const { Sequelize } = require("sequelize");
const sequelize = new Sequelize('controleEstoqueSenac', 'root', 'n9b8aa92', {
    host: 'localhost',
    dialect: 'mysql',
});
module.exports = sequelize;
