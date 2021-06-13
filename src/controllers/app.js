const express = require('express');
const axios = require('axios');

const models = require('../models');

const app = express();

// .env
const port = 3000;

app.use(express.json());

// list all vehicles
app.get('/', async (req, res) => {
  const vehicles = await models.Vehicle.findAll()
    res.json({ vehicles })
});

// get a vehicle
app.get('/vehicle/:vehicleId', async (req, res) => {
  const vehicleId = req.params.vehicleId
  try {
    const vehicle = await models.Vehicle.findAll({ where: { id: vehicleId } } )
    res.json(vehicle[0])
  } catch(error) {
    console.error(error)
  }
});

// create a vehicle
app.post('/vehicle', async (req, res) => {
  try {
    const newVehicle = new Vehicle(req.body)
    await newVehicle.save()
    res.json({ vehicle: newVehicle })
  } catch(error) {
    console.error(error)
  }
})

app.put('/vehicle/:vehicleId', function (req, res) {
  res.send('Got a PUT request at /user');
});

// removes a vehicle
app.delete('/vehicle/:vehicleId', async (req, res) => {
  const deletedVehicle =
    await models.Vehicle.destroy({
      where: {
        id: req.params.vehicleId
      }
    })
});

module.exports = app;