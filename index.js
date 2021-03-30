const mongoose = require('mongoose');

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
        if(customer.length === 0){
            console.log('no customers found');
        }
        console.info(customer);
        console.info(`${customer.length} matches`);
        process.exit(1);
    });
}

//Export All methods
module.exports = {
    addCustomer,
    findCustomer
}


// const { Command } = require('commander');
// const customer = require('./models/customer');
// const program = new Command();
// program.version('0.0.1');
// console.log(program.version);

// program
//     .option('-d, --debug', 'output extra debuggin');