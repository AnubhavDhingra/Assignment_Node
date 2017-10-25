var express = require('express');
var router = express.Router();

var userController = require('../controllers/signup');


router.route('/createuser')
  .post(userController.createuser);

router.route('/getUsers')
  .get(userController.getUsers);

router.route('/loginuser')
  .post(userController.loginUser);

module.exports = router;