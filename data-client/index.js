//import { program } from 'commander';
const { program } = require('commander');

// import { all, one, append as appendResource } from './http-data.js';
const { all, one, append: appendResource } = require('./http-data');

// const httpData = require('./http-data');
// const all = httpData.all;
// const one = httpData.one;
// const appendResource = httpData.append;
// const { all, one, append: appendResource } = httpData;


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