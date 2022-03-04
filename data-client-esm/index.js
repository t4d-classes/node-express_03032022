import { program } from 'commander';

// named import
import { all, one, append as appendResource } from './http-data.js';
// import * as httpData from './http-data.js';

// default import
// import httpData from './http-data.js';

const append = () => {};

program
  .command('all [resourceName]')
  .description('get all of the resources')
  .action(all);

program
  .command('one [resourceName] [resourceId]')
  .description('get one of the resources by id')
  .action(one);

program
  .command('add [resourceName] [resourceData]')
  .description('append a new resource')
  .action(appendResource);  

program.parse();