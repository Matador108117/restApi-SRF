const  express = require('express');
const { ExpressValidator } = require('express-validator');
const { getAllUsers } = require('../controller/UserController');
const Userouter = express.Router();
Userouter.get('/users', getAllUsers);
module.exports = Userouter;