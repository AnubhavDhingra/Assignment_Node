var express = require('express');
var router = express.Router();

var userController = require('../controllers/signup');


router.route('/createuser')
  .post(userController.createuser);

router.route('/loginuser')
  .post(userController.loginUser);
 
router.route('/getproducts')
  .get(userController.getproduct); 

router.route('/checkout')
  .post(userController.checkoutTotal);  
 
// router.route('/fbuserdata')
//   .post(userController.userDetailsfb);

// router.route('/postproduct')
//   .post(userController.productList);

module.exports = router;