var Sequelize = require('sequelize');
var { CONFIG } = require('./config');

//Sequlizw ORM for MySQL
var sequelize = new Sequelize(CONFIG.DB_NAME, CONFIG.DB_USER_NAME, CONFIG.DB_USER_PASSWORD, {
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


sequelize
    .authenticate()
    .then(() => { console.log('Connection has been established successfully.'); })
    .catch(error => { console.error('Unable to connect to the database:', error); });


module.exports = sequelize;