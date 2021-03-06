// get configuration
const { getConfig } = require('./config');
const configData = getConfig();

// get data source
const connString = configData.config.source === 'http'
  ? configData.config.url : configData.config.file;

const { all, one, append } = (
  configData.config.source === 'http'
    ? require('./http-data')
    : require('./file-data')
)(connString);

// define the commands
const { program } = require('commander');

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
  .action(append);  

program.parse();
