var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var Sequelize = require('sequelize');
var app = express();
var apiRouting = require('./routes');
console.log('* express app loaded');

//json persing middleware
app.use(bodyParser.json());
//cross-server middleware
app.use(cors());

app.use('/api', apiRouting);

module.exports = app;