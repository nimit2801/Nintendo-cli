#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer')
const { PromiseProvider } = require('mongoose');

const {
    addCustomer,
    findCustomer,
    updateCustomers,
    removeCustomers,
    listCustomers
 } = require('./index');

// Customer questions
const questions = [
    {
        type: 'input',
        name: 'firstname',
        message: 'Customer First Name'
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'Customer Last Name'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Customer Phone Number'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Customer Email Address'
    },
];


program
    .version('1.0.0')
    .description('Client management System');

// program
//     .command('add <firstname> <lastname> <phone> <email>')
//     .alias('a')
//     .description('Add a customer')
//     .action((firstname, lastname, phone, email) => {
//         addCustomer({firstname, lastname, phone, email});
//     });


// Add Command
program
    .command('add')
    .alias('a')
    .description('Add a customer')
    .action(() => {
        prompt(questions).then(answers => addCustomer(answers))
    })

// Find Command

program
    .command('find <name>')
    .alias('f')
    .description('Find a customer')
    .action((name) => findCustomer(name));

// Update Command
program
    .command('update <_id>')
    .alias('u')
    .description('Update a customer')
    .action((_id) => {
        prompt(questions).then(answers => updateCustomers(_id, answers))
    });

// Remove Command
program
    .command('remove <_id>')
    .alias('r')
    .description('Remove a customer')
    .action((_id) => {
        removeCustomers(_id)
    });

program
    .command('list')
    .alias('l')
    .description('List of all members')
    .action(() => listCustomers())

    // Gives URI for your mongodb atlas connections
program
    .command('uri')
    .description(':)')
    .action(() => {
        console.info(process.env.MONGOURI)
    });

 

program.parse(process.argv);