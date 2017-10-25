var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    productname: String,
    price: Number,
    brand: String
});

module.exports = mongoose.model('Product', ProductSchema);
