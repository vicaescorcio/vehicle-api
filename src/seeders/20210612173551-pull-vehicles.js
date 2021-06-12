'use strict';

const axios = require('axios');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    console.log('Pulling vehicles from API...');

    const res = await axios.get('http://fipeapi.appspot.com/api/1/carros/veiculos/39.json')
    const vehicles = res.data

    console.log('done!');

    const pulledVehicles = vehicles.map((vehicle, index) => {
      return {
        name: vehicle['name'],
        externalId: vehicle['id'],
        externalKey: vehicle['key'],
        makeId: 39,
        createdAt: Date().toISOString,
        updatedAt: Date().toISOString,
      }
    });

    console.log(pulledVehicles);

    console.log('Inserting and uploading in databases...');

    await queryInterface.bulkInsert('Vehicles', pulledVehicles);

    console.log('done!');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Vehicles', null, {});
  }
};
