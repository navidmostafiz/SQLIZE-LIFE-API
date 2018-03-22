var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var Sequelize = require('sequelize');
var app = express();
var apiRouting = require('./routes');
console.log('* express app loaded');

//json persing middleware
app.use(bodyParser.json());

//cross-server
app.use(cors());

app.use('/api', apiRouting);

// //Sequlizw ORM for MySQL
// var sequelize = new Sequelize('userDB', 'root', '123456', {
//     host: 'localhost',
//     dialect: 'mysql',
//     operatorsAliases: false,
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     },
// });



// var User = sequelize.define('user', {
//     _id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//         defaultValue: Sequelize.UUIDV1
//     },
//     firstName: {
//         type: Sequelize.STRING
//     },
//     lastName: {
//         type: Sequelize.STRING
//     },
//     emailAddress: {
//         type: Sequelize.STRING,
//         required: [true, 'Email Address is required.'],
//         unique: true,
//     },
//     password: {
//         type: Sequelize.STRING,
//         required: [true, 'Password is required.'],
//     },
//     status: {
//         type: Sequelize.ENUM,
//         values: ['Active', 'Inactive'],
//         defaultValue: 'Active',
//     },
//     role: {
//         type: Sequelize.ENUM,
//         values: ['Subscriber', 'Administrator'],
//         defaultValue: 'Subscriber',
//     },
//     createdAt: Sequelize.DATE,
//     updatedAt: Sequelize.DATE,
// });


// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });

// module.exports = User;
module.exports = app;