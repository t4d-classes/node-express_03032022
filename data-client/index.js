import { program } from 'commander';
import fetch from 'node-fetch';

program
  .command('all [resourceName]')
  .description('get all of the resources')
  .action(async (resourceName) => {
    const res = await fetch(`http://localhost:3050/${resourceName}`);
    const resources = await res.json();
    console.log(resources);  
  });

program
  .command('one [resourceName] [resourceId]')
  .description('get one of the resources by id')
  .action(async (resourceName,resourceId) => {
    const res = await fetch(
      `http://localhost:3050/${resourceName}/${resourceId}`);
    const resource = await res.json();
    console.log(resource);  
  });

program
  .command('add [resourceName] [resourceData]')
  .description('append a new resource')
  .action(async (resourceName,resourceData) => {

    const newResource = resourceData
      .split(',')
      .reduce( (resourceObj, dataProp) => {
        const [ key, value ] = dataProp.split(':');
        resourceObj[key] = value;
        return resourceObj;
      }, {});

    const res = await fetch(
      `http://localhost:3050/${resourceName}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newResource),
      },
    );
    const resource = await res.json();
    console.log(resource);
  });  

program.parse();