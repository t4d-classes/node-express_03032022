const fs = require('fs/promises');

const all = async (fileName, resourceName) => {
  const rawJson = await fs.readFile(fileName, 'utf-8');
  const data = JSON.parse(rawJson);
  console.log(data[resourceName]);
};

const one = async (fileName, resourceName, resourceId) => {
  const rawJson = await fs.readFile(fileName, 'utf-8');
  const data = JSON.parse(rawJson);
  console.log(data[resourceName].find(r => r.id === parseInt(resourceId, 10)));
};

const append = async (fileName, resourceName, resourceData) => {

  const newResource = resourceData
    .split(',')
    .reduce( (resourceObj, dataProp) => {
      const [ key, value ] = dataProp.split(':');
      resourceObj[key] = value;
      return resourceObj;
    }, {});


  const rawJson = await fs.readFile(fileName, 'utf-8');
  const data = JSON.parse(rawJson);

  newResource.id = Math.max(...data[resourceName].map(c => c.id), 0) + 1;

  data[resourceName].push(newResource);

  await fs.writeFile(fileName, JSON.stringify(data), 'utf-8');

  console.log(newResource);
};

module.exports = { all, one, append };