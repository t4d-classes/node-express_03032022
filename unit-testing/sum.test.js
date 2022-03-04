const { sum } = require('./sum');

xdescribe('sum tests', () => {

  // setup
  beforeEach(() => {
    // run before each and every test
  });

  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds 1 + 2 to not equal 4', () => {
    expect(sum(1, 2)).not.toBe(4);
  });

  // teardown
  afterEach(() => {
    // run after each and every test
  });

});

