'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Vehicles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      external_id: {
        type: Sequelize.STRING
      },
      licenseplate: {
        type: Sequelize.STRING
      },
      finorvin: {
        type: Sequelize.STRING
      },
      doors: {
        type: Sequelize.JSONB
      },
      location: {
        type: Sequelize.JSONB
      },
      odometer: {
        type: Sequelize.JSONB
      },
      fuel: {
        type: Sequelize.JSONB
      },
      status_charge: {
        type: Sequelize.JSONB
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Vehicles');
  }
};