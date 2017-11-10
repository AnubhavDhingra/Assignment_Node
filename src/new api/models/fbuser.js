var mongoose = require('mongoose');

var FbuserSchema = new mongoose.Schema({
    email : String,
    first_name: String,
    gender: String,
    last_name: String
})

module.exports = mongoose.model('fbuser', FbuserSchema);