import fetch from 'node-fetch';

const allColors = async () => {

  const res = await fetch('http://localhost:3050/colors');
  const cars = await res.json();
  return cars;
};

const appendColor = async (color) => {

  const res = await fetch('http://localhost:3050/colors', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(color),
  });
  const car = await res.json();
  return car;
};

appendColor({ name: 'orange', hexcode: 'ffff00'})
  .then(color => {
    console.log(color);
    return allColors();
  })
  .then(colors => {
    console.log(colors);
  });



// allColors().then(cars => console.log(cars));

console.log('made it here');