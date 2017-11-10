var User = require('../models/user');
var Product = require('../models/products');
var Checkout = require('../models/productCheckout');
// var FB = require('../models/fbuser');

exports.createuser = function(req,res){
    var user = new User({
        username: req.body.username,
        mobile: req.body.mobile,
        email: req.body.email,
        password: req.body.password,
        created_at: new Date(),
        updated_at: ""
    });
    console.log(req)
    user.save(function (err, response) {
        if (err) {
            res.json(err);
        }
        else {
            res.json({
                success: true,
                body: response
            })
        }
    })
}

exports.loginUser = function (req, res) {
    var email = req.body.email;
    var password = req.body.password;

    console.log(email + '' + password);

    User.findOne({ $and: [ { email: email },{ password: password } ] },
        function(err,response) {
           
        if(err) {
        res.json(err);
        }
        res.json({ "response": response })
        });
        
}

exports.getproduct = function (req, res) {
    Product.find({}, function (err, response) {
        if (err) {
            return res.json(err);
        }
        res.json(response);
    })
}

exports.checkoutTotal = function(req, res){
    var usercheckout = new Checkout({
        totals:req.body.totals,
        userid:req.body.userid
    })
    usercheckout.save(function (err, response) {
        if (err) {
            res.json(err);
        }
        else {
            res.json({
                success: true,
                body: response
            })
        }
    })
}

// exports.userDetailsfb = function(req, res){
//     var fbuser = new FB({
//         email: req.body.email,
//         first_name: req.body.first_name,
//         gender: req.body.gender,
//         last_name: req.body.last_name
//     })
//     fbuser.save(function(err, response) {
//         if (err) {
//             res.json(err);
//         } else {
//             res.json({
//                 success: true,
//                 body: response
//             })
//         }
//     })
// }

// exports.productList = function(req,res){
//     var products = new Product({
//         name: req.body.name,
//         url: req.body.url,
//         price: req.body.price
//     })
//     products.save(function(err, response){
//         if(err){
//             res.json(err);
//         }else {
//             res.json({
//                 success: true,
//                 body: response
//             })
//         }
//     })
// }