var express = require('express');
var authController = require('../controllers/authController');
var authRoutes = express.Router();
console.log('* login root router loaded');

//GET: localhost:3000/api/login/ for getting token 
//POST: localhost:3000/api/login/ for user credentials submission and getting token and atuhenticaated user obj back
authRoutes.route('/')
    .get(authController.getToken)
    .post(authController.getTokenByCred);

module.exports = authRoutes