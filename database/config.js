const mongoose = require('mongoose');
const dotenv = require('dotenv').config()




const dbConnection = async() => {

   try {
      await mongoose.connect("mongodb+srv://relyer_user:relyer_password@cluster0.f02ku.mongodb.net/RelyerDB", {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useCreateIndex: true,
         useFindAndModify: false
      });

      console.log('Base de datos conectada')
      
   } catch (error) {
      console.log(error);
      throw new Error('Error al iniciar la base de datos');
      
   }
}

dbConnection();
module.exports = {
   dbConnection
}