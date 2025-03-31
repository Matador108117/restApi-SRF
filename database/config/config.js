require ('dotenv').config();
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.TEST_DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true, // This will force SSL/TLS connections
      rejectUnauthorized: false, // Set to true for production, false for local testing with self-signed certificates
    },
  }
 
});
module.exports = sequelize;
/*module.exports ={
 "test": {
    "url": process.env.TEST_DATABASE_URL,
    "dialect": "postgres"
  },
  "production": {
    "url": process.env.DATABASE_URL,
    "dialect": "postgres"
  }
    */

