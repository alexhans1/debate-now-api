let dotenv = require('dotenv'); //enables environment variables for development
dotenv.config({path: '.env'});

module.exports = {
  development: {
    username: 'root',
    password: process.env.DB_PASSWORD_LOCAL,
    database: 'test123',
    host: 'localhost',
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mssql',
    dialectOptions: {
      encrypt: true,
    },
  }
};
