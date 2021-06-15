require('dotenv').config({ path: '.env' });

const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// allows CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// parse requests of content-type - application/json
app.use(express.json());

app.use(
  express.static(path.resolve(__dirname, './vehicle-react-client/build'))
);

// All gets, except /api, will be handle by react app
app.get('/', (req, res) => {
  res.sendFile(
    path.resolve(__dirname, './vehicle-react-client/build', 'index.html')
  );
});

require('./src/routes/vehicles.routes')(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
