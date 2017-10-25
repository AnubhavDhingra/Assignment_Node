var User = require('../models/user');

exports.createuser = function(req,res){
    var user = new User({
        username: req.body.username,
        mobile: req.body.mobile,
        email: req.body.email,
        password: req.body.password,
        created_at: new Date(),
        updated_at: ""
    });
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

exports.getUsers = function (req, res) {
    User.find({}, function (err, response) {
        if (err) {
            return res.json(req, res, err);
        }

        res.json(response);
    })
}

exports.loginUser = function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    
    User.findOne({ $and: [ { email: email },{ password: password } ] },
        function(err,response) {
        if(err) {
        res.json(err);
        }
        if(response) {
        res.json({ "response": response })
        }
        if(!response){
        res.json({ "response": response })
            
        }
        });
        
}

exports.
