const mongoose = require('mongoose');
const customerSchema = mongoose.Schema({
    firstname: {type: String},
    lastname: {type: String},
    phone: {type: Number},
    email: {type: String}
});

// Define and export

module.exports = mongoose.model('Customer', customerSchema);