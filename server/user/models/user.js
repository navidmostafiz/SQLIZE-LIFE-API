//code format: ES5
var Sequelize = require('sequelize');
var bcrypt = require('bcrypt-nodejs');
var sequelize = require('../../core/sequalizeContext')

var User = sequelize.define('userTable', {
    _id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        //defaultValue: Sequelize.UUIDV1
    },
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    emailAddress: {
        type: Sequelize.STRING,
        required: [true, 'Email Address is required.'],
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
        required: [true, 'Password is required.'],
    },
    status: {
        type: Sequelize.ENUM,
        values: ['Active', 'Inactive'],
        defaultValue: 'Active',
    },
    role: {
        type: Sequelize.ENUM,
        values: ['Subscriber', 'Administrator'],
        defaultValue: 'Subscriber',
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
});


// // Class Method
// // generating a hash
// User.generateHash = function (password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
// };

// User.validPassword = function (password) {
//     return bcrypt.compareSync(password, this.password);
// };

// // Instance Method
// User.prototype.someMethod = function () {
//     //..
// }

module.exports = User;

//get user by Credentials
module.exports.getUserByCred = function (emailAddress, password) {
    console.log('USER Model.getUserByCred(' + emailAddress + ', ' + password + ')');
    return User.findOne({ where: { emailAddress: emailAddress } });
}