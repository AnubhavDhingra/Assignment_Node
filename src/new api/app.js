var express = require('express');
var mongoose = require('mongoose');
var cor = require('cors');
var bodyParser = require('body-parser');
require('./models/products');
require('./models/user');
// require('/models/fbuser');
mongoose.connect('mongodb://localhost:27017/stuffkart');

var app = module.exports = express();

var NODE_ENV = 'development';

app.set('env', process.env.NODE_ENV || 'production');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cor());

routes = require('./routes/index');
app.use('/api',routes);

var port = process.env.PORT || 2000;

app.listen(port);
console.log('Server is running on port '+ port);