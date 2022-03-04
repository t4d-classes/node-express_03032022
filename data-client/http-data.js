const fetch = require('node-fetch');

module.exports = (url) => {

  const all = async (resourceName) => {
    const res = await fetch(`${url}/${resourceName}`);
    const resources = await res.json();
    console.log(resources);  
  };

  const one = async (resourceName, resourceId) => {
    const res = await fetch(
      `${url}/${resourceName}/${resourceId}`);
    const resource = await res.json();
    console.log(resource);  
  };

  const append = async (resourceName, resourceData) => {

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

  return { all, one, append };

};