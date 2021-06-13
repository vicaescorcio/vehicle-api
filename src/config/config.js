require('dotenv').config({ path: './../.env' })

module.exports = {
  'development': {
    'username': process.env.DB_USER,
    'password': process.env.DB_PASSWORD,
    'database': 'garage_development',
    'host': process.env.DB_HOST,
    'dialect': 'postgres'
  },
  'test': {
    'username': process.env.DB_USER,
    'password': process.env.DB_PASSWORD,
    'database': 'garage_test',
    'host':  process.env.DB_HOST,
    'dialect': 'postgres'
  },
  'production': {
    'username': 'userdb',
    'password': null,
    'database': 'garage_production',
    'host': '127.0.0.1',
    'dialect': 'postgres'
  }
}
