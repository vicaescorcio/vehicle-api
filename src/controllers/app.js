// Controllers and Routes
// TODO: separate them into routers/vehicles.js and controllers/vehicles.js

const express = require('express');

const models = require('../models');

const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());

// lists all vehicles
app.get('/api/vehicles/', async (req, res) => {
  const vehicles = await models.Vehicle.findAll();
  res.json({ vehicles });
});

// gets a vehicle
app.get('/api/vehicles/:vehicleId', async (req, res) => {
  const vehicleId = req.params.vehicleId

  // TODO: create helpers to pull out this redudant record existency inspection blocks
  try {
    let searchResult = await models.Vehicle.findAll({ where: { id: vehicleId } });
    const vehicle = searchResult[0];

    if (vehicle != undefined) {
      res.json(vehicle);
    } else {
      res.status(404).send('There\'s no vehicle with this ID');
    }
  } catch(error) {
    console.log(error)
    res.status(500).send('Oops! Something went wrong');
  }
});

// creates a vehicle
app.post('/api/vehicle', async (req, res) => {
  try {
    const newVehicle = await models.Vehicle.create(req.body);

    res.json(newVehicle);
  } catch(error) {
    console.log(error)
    res.status(500).send('Oops! Something went wrong');
  }
});

// updates a vehicle
app.put('/api/vehicle/:vehicleId', async (req, res) => {
  const vehicleId = req.params.vehicleId

  try {
    let searchResult = await models.Vehicle.findAll({ where: { id: vehicleId } });
    const updatedVehicle = searchResult[0];

    if (updatedVehicle != undefined) {
      await updatedVehicle.update(req.body);

      res.json({ message: 'Vehicle was updated successfully!' });
    } else {
      res.status(404).send('There\'s no vehicle with this ID');
    }
  } catch(error) {
    console.log(error)
    res.status(500).send('Oops! Something went wrong');
  }
});

// removes a vehicle
app.delete('/api/vehicles/:vehicleId', async (req, res) => {
  try {
    let searchResult =
      await models.Vehicle.findAll({
        where: {
          id: req.params.vehicleId
        }
      });

      const deletedVehicle = searchResult[0];

      if(deletedVehicle) {
        await deletedVehicle.destroy();

        res.json({ message: 'Vehicle was deleted successfully!' });
      } else {
        res.status(404).send('There\'s no vehicle with this ID');
      }
    } catch(error) {
      console.log(error)
      res.status(500).send('Oops! Something went wrong');
    }
});

module.exports = app;