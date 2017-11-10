var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: {type: String},
    mobile: {type: Number,unique:true},
    password:{type: String},
    email: {type: String, unique: true,required:true},
    total: {type: Number, default: 0 },
    created_at: {type: Date, default: Date.now},
    updated_at: Date 
})

module.exports = mongoose.model('User', UserSchema);
