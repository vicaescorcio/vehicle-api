require('dotenv').config({ path: '.env' })

const path = require('path');
const express = require('express');
const app = require('./src/controllers/app');
const port = 3000;

// At the NODE server
app.use(express.static(path.resolve(__dirname, '../vehicle-react-client/build')));

// All gets, except /api, will be handle by react app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../vehicle-react-client/build', 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
