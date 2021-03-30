const mongoose = require('mongoose');
require('dotenv').config({path: './.env'});


// map global promise - get rid of warning
mongoose.Promise = global.Promise;
//connect db
const db = mongoose.connect('mongodb+srv://Admin:Admin@leaderboard.rynaf.mongodb.net/customer?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

// Import model
const Customer = require('./models/customer');

// Add Customer
const addCustomer = (customer) => {
    Customer.create(customer).then(customer => {
        console.info('New Customer Added');
        process.exit(1);
    });
}

// Find Customer
const findCustomer = (name) => {
    // Make case insensitive
    const search = new RegExp(name, 'i');
    // Customer.find({$or: [{firtsname: search}, {lastname:search}]})
    Customer.find({$or: [{firstname: search}, {lastname: search}]})
    .then(customer => {
        console.info(customer);
        console.info(`${customer.length} matches`);
        if(customer.length === 0){
            console.log('no customers found');
        }
        process.exit(1);
    });
}

// Update Csutomers
const updateCustomers = (_id, customer) => {
    Customer.updateMany({_id}, customer)
    .then(customer => {
        console.info('Customer Updated');
        process.exit(1);
    });
}

// Remove Customers
const removeCustomers = (_id) => {
    Customer.deleteOne({_id})
    .then(customer => {
        console.info('Customer Removed');
        process.exit(1);
    })
}

// List Customers
const listCustomers = () => {
    Customer.find()
        .then(customers => {
            console.info(customers);
            console.info(`${customers.length} customers`)
            process.exit(1);
        })
}

//Export All methods
module.exports = {
    addCustomer,
    findCustomer,
    updateCustomers,
    removeCustomers,
    listCustomers
}


// const { Command } = require('commander');
// const customer = require('./models/customer');
// const program = new Command();
// program.version('0.0.1');
// console.log(program.version);

// program
//     .option('-d, --debug', 'output extra debuggin');