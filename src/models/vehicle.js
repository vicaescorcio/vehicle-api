'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Vehicle.init({
    name: DataTypes.STRING,
    externalKey: DataTypes.STRING,
    externalId: DataTypes.STRING,
    makeId: DataTypes.INTEGER,
    moreInfo: DataTypes.JSONB,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Vehicle',
  });
  return Vehicle;
};