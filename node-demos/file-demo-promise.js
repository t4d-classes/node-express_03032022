const fs = require('fs/promises');

// const data = fs.readFileSync('./db.json', 'utf-8');

// console.log(data);

fs.readFile('./db.json', 'utf-8')
  .then(rawJSON => {
  
    const data = JSON.parse(rawJson);

    data.colors.push({
      name: 'purple',
      hexcode: 'ff00ff',
      id: Math.max(...data.colors.map(c => c.id), 0) + 1,
    });

    return data;  
  
  })
  .then(data => {
    return fs.writeFile('./db.json', JSON.stringify(data), 'utf-8');
  })
  .then(() => {
    console.log('all done');
  })
  .catch(err => {
    console.log(err);
  });




