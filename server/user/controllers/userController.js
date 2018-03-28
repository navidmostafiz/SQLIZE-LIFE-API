//code format: ES5
var User = require('../models/user');
console.log('* express api controller loaded');

//get user
module.exports.getAllUser = function (request, response, next) {
    console.log('userController.getAllUser()');

    User.findAll()
        .then(users => {
            return response.status(200).json({
                success: true,
                message: 'Get all user',
                data: users,
            });
        })
        .catch(error => {
            return response.status(403).json({
                success: false,
                message: error,
            });
        });
}


//add new user
module.exports.addUser = function (request, response, next) {
    console.log('userController.addUser');

    User.create(request.body)
        .then(newUser => {
            console.log(`New user ${newUser.name}, with id ${newUser._id} has been created.`);
            return response.status(200).json({
                success: true,
                message: `New user ${newUser.name}, with id ${newUser._id} has been created.`,
                newUser
            });
        }).catch(error => {
            return response.status(403).json({
                success: false,
                message: error,
            });
        });
}

//get user by Id
module.exports.getUserById = function (request, response, next) {
    var userId = request.params._id;
    console.log('userController.getUserById(' + userId + ')');

    User.findOne({ where: { _id: userId } })
        .then(users => {
            //console.log(users);
            return response.status(200).json({
                success: true,
                message: 'Get user by Id',
                data: users,
            });
        })
        .catch(error => {
            return response.status(403).json({
                success: false,
                message: error,
            });
        });
}

//update user
module.exports.updateUser = function (request, response, next) {
    console.log('userController.updateUser(' + request.body._id + request.body.firstName, request.body.lastName + ')');

    var newUser = request.body;

    User.update(newUser, { where: { _id: request.body._id } })
        .then(updateUser => {
            return response.status(200).json({
                success: true,
                message: 'user updated',
                data: updateUser,
            });
        }).catch(error => {
            return response.status(403).json({
                success: false,
                message: error,
            });
        });
}

//delete user
module.exports.deleteUser = function (request, response, next) {
    console.log('userController.deleteUser: not functional');
    var userId = request.params._id;

    User.destory({ where: { _id: userId } })
        .then(deletedUser => { console.log('user deleted', deletedUser); })
        .catch(error => {
            return response.status(403).json({
                success: false,
                message: error,
            });
        });
}
