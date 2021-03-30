const mongoose = require('mongoose');
require('dotenv').config({path: '../config/config.env'});

const customerSchema = mongoose.Schema({
    firstname: {type: String},
    lastname: {type: String},
    phone: {type: Number},
    email: {type: String}
});

// Define and export

module.exports = mongoose.model('Customer', customerSchema);