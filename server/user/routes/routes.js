var express = require('express');
var { verifyToken } = require('../../auth/middleware/verifyToken')
var userController = require('../controllers/userController');
var userRoutes = express.Router();
console.log('* user api root router loaded');
//we bind each user api methods to a user controller methods

//FOR GET & POST
//localhost:3000/api/users/
userRoutes.route('/')
  .get(verifyToken, userController.getAllUser)
  .post(verifyToken, userController.addUser);

//FOR GET & PUT BY ID
//localhost:3000/api/users/:id
userRoutes.route('/:_id')
  .get(verifyToken, userController.getUserById)
  .put(verifyToken, userController.updateUser)
  .delete(verifyToken, userController.deleteUser);

module.exports = userRoutes