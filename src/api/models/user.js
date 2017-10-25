var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: {type: String},
    mobile: {type: Number},
    password:{type: String},
    email: {type: String},
    created_at: {type: Date, default: Date.now},
    updated_at: Date 
})

module.exports = mongoose.model('User', UserSchema);
