require('dotenv').config({path: '.env'})

const express = require('express')

const models = require('./src/models');

const app = express()

// .env
const port = 3000

app.use(express.json());

// list all vehicles
app.get('/', (req, res) => {
  models.Vehicle.findAll().then((item)=> {
    res.json({vehicles: item})
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
