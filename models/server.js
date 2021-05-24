const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config')

class Server {

   constructor(){

      this.app = express();
      this.port = process.env.PORT || 3000;


      //Rutas del servidor
      this.expertsPath = '/api/experts';
      this.contactPath = '/api/contact';
      this.resourcesPath = '/api/resources';
      this.toolsPath = '/api/tools';
      this.questionsPath = '/api/questions';
      this.loginPath = '/api/login';
      this.registerPath = '/api/register';

      //Conectar con BD
      this.connectDB();

      //Middlewares
      this.middlewares();

      //Rutas
      this.routes();

   }

   async connectDB(){
      await dbConnection();
   }

   middlewares(){
      //CORS
      this.app.use( cors() );

      //Lectura y parseo del body
      this.app.use( express.json() );

   }

   routes() {
      this.app.use(this.expertsPath, require('../routes/experts'));

      this.app.use(this.contactPath, require('../routes/contact'));

      this.app.use(this.resourcesPath, require('../routes/resources'));

      this.app.use(this.toolsPath, require('../routes/tools'));

      this.app.use(this.questionsPath, require('../routes/questions.js'));

      this.app.use(this.loginPath, require('../routes/login'));

      this.app.use(this.registerPath, require('../routes/register'))

   }

   listen(){
      this.app.listen( this.port, () => {
         console.log( `Servidor Relyer corriendo en el puerto ${this.port}`)
      })
   }
}


module.exports = Server;