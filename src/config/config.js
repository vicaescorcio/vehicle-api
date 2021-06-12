require('dotenv').config({path: './../.env'})

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": `${process.env.DB_NAME}_development`,
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": "userdb",
    "password": null,
    "database": `${process.env.DB_NAME}_test`,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "userdb",
    "password": null,
    "database": `${process.env.DB_NAME}_production`,
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
