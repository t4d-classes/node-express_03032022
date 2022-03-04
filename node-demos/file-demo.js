const fs = require('fs/promises');

// const data = fs.readFileSync('./db.json', 'utf-8');

// console.log(data);

const addPurple = async () => {

  try {

    const rawJson = await fs.readFile('./db.json', 'utf-8');

    const data = JSON.parse(rawJson);

    data.colors.push({
      name: 'purple',
      hexcode: 'ff00ff',
      id: Math.max(...data.colors.map(c => c.id), 0) + 1,
    });

    await fs.writeFile('./db.json', JSON.stringify(data), 'utf-8');

    console.log('all done');

  } catch(err) {
    console.log(err);
  }

};

addPurple();
