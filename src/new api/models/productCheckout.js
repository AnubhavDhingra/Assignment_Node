var mongoose = require('mongoose');

var CheckoutSchema = new mongoose.Schema({
    totals:{type: String},
    userid:{type: String}
})

module.exports = mongoose.model('Checkout', CheckoutSchema);
