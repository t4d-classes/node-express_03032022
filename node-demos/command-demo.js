import { program } from 'commander';

program
  .command('add [x] [y]')
  .description('add two numbers')
  .action((x,y) => {
    console.log(parseInt(x) + parseInt(y));
  });

program
  .command('subtract [x] [y]')
  .description('subtract two numbers')
  .action((x,y) => {
    console.log(parseInt(x) - parseInt(y));
  });

program.parse();