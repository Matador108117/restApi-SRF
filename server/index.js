const cors = require('cors');
const express = require('express');
const router = require ('../routes/index');
const server = express();
server.use(cors());
server.options('*', cors());

server.use(express.json());
server.use('/api',router)
module.exports = server;
