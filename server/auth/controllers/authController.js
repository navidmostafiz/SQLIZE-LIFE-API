//code format: ES5
var jwt = require('jsonwebtoken');
//var userController = require('../../user/controllers/userController');
var userModel = require('../../user/models/user');
console.log('** auth controller loaded');

//get token
module.exports.getToken = function (request, response, next) {
    console.log('authController.getToken()');
    var user = null;
    var token = jwt.sign({ user }, 'secretKeySalt')

    return response.status(200).json({
        success: true,
        message: 'getToken',
        token
    });
}

//get token using credentials and checking if user exists and returning token with authenticated user object
module.exports.getTokenByCred = function (request, response, next) {
    console.log('authController.getTokenByCred()');

    userModel.getUserByCred(request.body.emailAddress, request.body.password)
        .then(function (data) {
            if (data != null) {
                var authUser = data.dataValues;
                // console.log('*** authUser: authUser.firstName', authUser.firstName);

                var token = jwt.sign({ authUser }, 'secretKeySalt')

                return response.status(200).json({
                    success: true,
                    message: 'getTokenByCred',
                    token
                });
            }
            else {
                return response.status(200).json({
                    success: false,
                    message: 'invalid user name or password',
                });
            }
        });

}