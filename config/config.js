require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.KRSAPP_DB_USERNAME,
    "password": process.env.KRSAPP_DB_PASSWORD,
    "database": process.env.KRSAPP_DB_NAME,
    "host": process.env.KRSAPP_DB_HOST,
    "port": process.env.KRSAPP_DB_PORT,
    "dialect": process.env.KRSAPP_DB_DIALECT
  },
  "test": {
    "username": process.env.KRSAPP_DB_USERNAME,
    "password": process.env.KRSAPP_DB_PASSWORD,
    "database": process.env.KRSAPP_DB_NAME,
    "host": process.env.KRSAPP_DB_HOST,
    "port": process.env.KRSAPP_DB_PORT,
    "dialect": process.env.KRSAPP_DB_DIALECT
  },
  "production": {
    "username": process.env.KRSAPP_DB_USERNAME,
    "password": process.env.KRSAPP_DB_PASSWORD,
    "database": process.env.KRSAPP_DB_NAME,
    "host": process.env.KRSAPP_DB_HOST,
    "port": process.env.KRSAPP_DB_PORT,
    "dialect": process.env.KRSAPP_DB_DIALECT
  }
}
