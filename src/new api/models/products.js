var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    name: String,
    url: String,
    price: Number
});

module.exports = mongoose.model('productlist', ProductSchema);

