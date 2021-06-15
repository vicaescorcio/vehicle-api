const models = require('../models');

// lists all vehicles
exports.index = async (req, res) => {
  const vehicles = await models.Vehicle.findAll();
  res.json({ vehicles });
};

// gets a vehicle
exports.show = async (req, res) => {
  const vehicleId = req.params.id

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
};

// creates a vehicle
exports.create = async (req, res) => {
  try {
    const newVehicle = await models.Vehicle.create(req.body);

    res.json(newVehicle);
  } catch(error) {
    console.log(error)
    res.status(500).send('Oops! Something went wrong');
  }
};

// updates a vehicle
exports.update = async (req, res) => {
  const vehicleId = req.params.id

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
};

// deletes a vehicle
exports.delete = async (req, res) => {
  try {
    let searchResult =
      await models.Vehicle.findAll({
        where: {
          id: req.params.id
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
};
