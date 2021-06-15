module.exports = (app) => {
  const vehicles = require('./../controllers/vehicles.controller');

  var router = require('express').Router();

  router.post('', vehicles.create);
  router.get('/:id', vehicles.show);
  router.get('', vehicles.index);
  router.delete('/:id', vehicles.delete);
  router.put('/:id', vehicles.update);

  app.use('/api/vehicles', router);
};
