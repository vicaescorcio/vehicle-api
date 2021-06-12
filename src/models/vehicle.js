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
    external_id: DataTypes.STRING,
    licenseplate: DataTypes.STRING,
    finorvin: DataTypes.STRING,
    doors: DataTypes.JSONB,
    location: DataTypes.JSONB,
    odometer: DataTypes.JSONB,
    fuel: DataTypes.JSONB,
    status_charge: DataTypes.JSONB
  }, {
    sequelize,
    modelName: 'Vehicle',
  });
  return Vehicle;
};