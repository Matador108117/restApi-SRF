const cors = require('cors');
const express = require('express');
const Userouter = require('../routes/Userouter');
const router = require ('../routes/index');

const server = express();
server.use(cors());
server.options('*', cors());

server.use(express.json());
server.use('/', router)
server.use('/users', Userouter);
module.exports = server;
