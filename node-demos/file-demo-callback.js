const fs = require('fs');

// const data = fs.readFileSync('./db.json', 'utf-8');

// console.log(data);

fs.readFile('./db.json', 'utf-8', (err, rawJson) => {

  if (err) {
    console.log(err);
    return;
  }

  const data = JSON.parse(rawJson);

  data.colors.push({
    name: 'purple',
    hexcode: 'ff00ff',
    id: Math.max(...data.colors.map(c => c.id), 0) + 1,
  });

  fs.writeFile('./db.json', JSON.stringify(data), 'utf-8', err => {

    if (err) {
      console.log(err);
      return;
    }  
  
    console.log('all done');

  });

});



