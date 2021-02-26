const { DataTypes, Model } = require('sequelize');
const database = require('../configuration/database.js');

class People extends Model {}

People.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    modelName: 'People',
    timestamps: false,
    tableName: 'people',
  }
);

module.exports = People;
