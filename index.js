require('dotenv').config();
const sequelize = require('./database/config/config');  
const server = require('./server');

const PORT = process.env.PORT || 8080;

sequelize.sync().then(() => {
    console.log('Base de datos sincronizada');
    server.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
  });