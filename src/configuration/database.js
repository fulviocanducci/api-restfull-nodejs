const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/db/database.db',
});
module.exports = sequelize;
