const express = require('express');
const { getAllUsers, createUser } = require('../controller/UserController'); // Verifica la ruta correcta
const validateDto = require('../middlewares/validate.dto');
const UserDto = require('../database/dtos/User.dto');

const router = express.Router();
router.get('/', (req, res) => res.send('Welcome'))
router.get('/users', validateDto(UserDto), getAllUsers );
router.post('/users', validateDto(UserDto), createUser );
module.exports = router;
