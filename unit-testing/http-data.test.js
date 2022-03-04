jest.spyOn(global.console, 'log')
jest.mock('node-fetch', () => require('fetch-mock-jest').sandbox());

const { all, one, append } = require('./http-data');

const fetchMock = require('node-fetch')

describe('http-data', () => {

  test('all', async () => {

    const mockCars = require('./db.json').cars;

    fetchMock.get('http://localhost:3050/cars', mockCars);

    await all('cars')

    expect(console.log).toHaveBeenCalledWith(mockCars);
    expect(fetchMock)
      .toHaveLastFetched('http://localhost:3050/cars', 'get');
  });

  test('one', async () => {

    const carId = 1;
    const carUrl = `http://localhost:3050/cars/${carId}`;

    const mockCar = require('./db.json').cars.find(c => c.id === carId);

    fetchMock.get(carUrl, mockCar);

    await one('cars', carId)

    expect(console.log).toHaveBeenCalledWith(mockCar);
    expect(fetchMock).toHaveLastFetched(carUrl, 'get');
  });

  test('append', async () => {

    const carData = "make:Ford,model:T,year:1928,color:blue,price:800";
    const carsUrl = 'http://localhost:3050/cars';

    fetchMock.post(carsUrl, (_, options) => {

     return {
        ...JSON.parse(options.body),
        id: 3,
      };

    });

    await append('cars', carData)

    expect(console.log).toHaveBeenCalledWith({
      make: 'Ford', model: 'T', year: '1928', color: 'blue', price: '800', id: 3,
    });

    expect(fetchMock).toHaveLastFetched(carsUrl, {
      method: 'POST',
      body: {
        make: 'Ford', model: 'T', year: '1928', color: 'blue', price: '800',
      },
    });

  });

  afterEach(() => {
    fetchMock.mockReset();
    jest.clearAllMocks();
  });

});
