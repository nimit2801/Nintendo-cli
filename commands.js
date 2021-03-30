const program = require('commander');
const { PromiseProvider } = require('mongoose');

const { addCustomer, findCustomer } = require('./index');

program
    .version('1.0.0')
    .description('Client management System');

program
    .command('add <firstname> <lastname> <phone> <email>')
    .alias('a')
    .description('Add a customer')
    .action((firstname, lastname, phone, email) => {
        addCustomer({firstname, lastname, phone, email});
    });

program
    .command('find <name>')
    .alias('f')
    .description('Find a customer')
    .action((name) => findCustomer(name))
program
    .command('uri')
    .alias('u')
    .description(':)')
    .action(() => {
        console.info(process.env.MONGOURI)
    });

program.parse(process.argv);