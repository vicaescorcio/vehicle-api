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
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres"
  }
}
