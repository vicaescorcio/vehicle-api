const request = require('supertest');
const app = require('./../controllers/app');
const models = require('../models');

describe('GET /', () => {
  test('It should respond with status code OK', async () => {
    const response = await request(app).get('/api/vehicles/');

    expect(response.body).toEqual({'vehicles':[]});
    expect(response.statusCode).toBe(200);
  });
});

describe('GET /vehicles/:id', () => {
  test(`It should respond with a vehicle`, async () => {
    let expectedVehicle = await models.Vehicle.create({ name: 'AUDI-9' });

    const response = await request(app).get(`/api/vehicles/${expectedVehicle.id}`);

    expect(response.body.name).toEqual(expectedVehicle.name);
    expect(response.statusCode).toBe(200);
  });

  test('It should respond with status code not found', async () => {
    let inexistentVehicledId = 1321312;

    const response = await request(app).get(`/api/vehicles/${inexistentVehicledId}`);

    expect(response.statusCode).toBe(404);
  });
});

describe('DELETE /vehicles/:id', () => {
  test('It should respond with status code OK', async () => {
    let expectedVehicle = await models.Vehicle.create({ name: 'AUDI-9' });

    const response = await request(app).delete(`/api/vehicles/${expectedVehicle.id}`);

    expect(response.body.message).toEqual('Vehicle was deleted successfully!');
    expect(response.statusCode).toBe(200);
  });

  test('It should respond with status code not found', async () => {
    let inexistentVehicledId = 1321312;

    const response = await request(app).delete(`/api/vehicles/${inexistentVehicledId}`);

    expect(response.statusCode).toBe(404);
  });
});


describe('POST /vehicle', () => {
  test('It should respond with status code OK', async () => {
    let params = { name: 'AUDI-10' };
    const response = await request(app).post('/api/vehicle').send(params);

    expect(response.body.name).toEqual(params.name);
    expect(response.statusCode).toBe(200);
  });
});

describe('PUT /vehicle/:id', () => {
  test('It should respond with status code OK', async () => {
    let searchResult = await models.Vehicle.findAll({ where: { name: 'AUDI-9' }});
    let existentVehicle = searchResult[0];

    let params = { name: 'AUDI-20' };
    const response = await request(app).put(`/api/vehicle/${existentVehicle.id}`).send(params);

    expect(response.body.message).toEqual('Vehicle was updated successfully!');
    expect(response.statusCode).toBe(200);
  });


  test('It should respond with status code not found', async () => {
    let inexistentVehicledId = 1321312;

    const response = await request(app).put(`/api/vehicle/${inexistentVehicledId}`);

    expect(response.statusCode).toBe(404);
  });
});
