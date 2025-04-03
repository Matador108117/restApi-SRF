require ('dotenv').config();
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.TEST_DATABASE_URL, {
"username": "fit_manager",
    "password": "fRCoM83OLZ5d8GtKxMlLTw6jhGGt7r2h",
    "database": "fit_nhqz",
    "host": "dpg-cvhpvl1c1ekc738e69lg-a.oregon-postgres.render.com",
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
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

