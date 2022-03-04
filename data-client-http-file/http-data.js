const fetch = require('node-fetch');

const all = async (url, resourceName) => {
  const res = await fetch(`${url}/${resourceName}`);
  const resources = await res.json();
  console.log(resources);  
};

const one = async (url, resourceName, resourceId) => {
  const res = await fetch(
    `${url}/${resourceName}/${resourceId}`);
  const resource = await res.json();
  console.log(resource);  
};

const append = async (url, resourceName, resourceData) => {

  const newResource = resourceData
    .split(',')
    .reduce( (resourceObj, dataProp) => {
      const [ key, value ] = dataProp.split(':');
      resourceObj[key] = value;
      return resourceObj;
    }, {});

  const res = await fetch(
    `${url}/${resourceName}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newResource),
    },
  );
  const resource = await res.json();
  console.log(resource);
};

module.exports = { all, one, append };