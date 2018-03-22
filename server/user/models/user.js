var Sequelize = require('sequelize');
//Sequlizw ORM for MySQL
var sequelize = new Sequelize('userDB', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

var User = sequelize.define('userTable', {
    _id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: Sequelize.UUIDV1
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


sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = User;

// //code format: ES5
// var bcrypt = require('bcrypt-nodejs');
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
// console.log('* user model & user schema loaded')

// // create a userSchema
// var userSchema = new Schema({
//     firstName: {
//         type: String,
//         required: [true, 'First Name is required.'],
//     },
//     lastName: {
//         type: String,
//         required: [true, 'Last Name is required.'],
//     },
//     emailAddress: {
//         type: String,
//         required: [true, 'Email Address is required.'],
//         unique: true,
//     },
//     password: {
//         type: String,
//         required: [true, 'Password is required.'],
//     },
//     status: {
//         type: String,
//         enum: ['Active', 'Inactive'],
//         default: 'Active',
//     },
//     role: {
//         type: String,
//         enum: ['Subscriber', 'Administrator'],
//         default: 'Subscriber',
//     },
//     createdAt: Date,
//     updatedAt: Date,
// }, { versionKey: false });


// // userSchema middlewares

// // on every save, add the date
// userSchema.pre('save', function (next) {
//     // get the current date
//     var currentDate = new Date();

//     // change the updated_at field to current date
//     this.updatedAt = currentDate;

//     // if created_at doesn't exist, add to that field
//     if (!this.createdAt) {
//         this.createdAt = currentDate;
//     }

//     next();
// });

// // userSchema methods


// // generating a hash
// userSchema.methods.generateHash = function (password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
// };

// // checking if password is valid
// userSchema.methods.validPassword = function (password) {
//     return bcrypt.compareSync(password, this.password);
// };

// // the schema is useless so far
// // we need to create a model using it
// var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
//export default User;


//module.exports = User;
