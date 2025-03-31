const {validationResult} = require('express-validator');
const {plainToInstance} = require('class-transformer');
const Userdto = require('../database/dtos/User.dto'); 
const User = require('../database/models/User'); 
getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll();
      console.log(users);
      const usersDto = users.map(user => plainToInstance(Userdto, user));
      res.json(usersDto);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener usuarios' });
    }
  };
module.exports = {
 getAllUsers
};