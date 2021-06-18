require('dotenv').config();
const Server = require('./models/server');

const server = new Server();

server.listen();



//https://server-relyer.herokuapp.com/