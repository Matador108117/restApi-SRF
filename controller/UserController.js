const { plainToInstance } = require('class-transformer');
const UserDto = require('../database/dtos/User.dto');
const User = require('../database/models/users');

// Obtener todos los usuarios
const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll(); 
        console.log('hola');
        const usersDto = users.map(user => plainToInstance(UserDto, user.toJSON(), { excludeExtraneousValues: true }));
        res.json(usersDto);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
};

// Crear un nuevo usuario con validación
    const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.validatedData);
        console.log(20);
        const userDto = plainToInstance(UserDto, newUser.toJSON(), { excludeExtraneousValues: true });
        res.status(201).json(userDto);
    } catch (error) {
        console.error("Error en createUser:", error);
        res.status(500).json({ error: error.message || 'Error al crear usuario' });
    }
};


module.exports = { getAllUsers, createUser };
