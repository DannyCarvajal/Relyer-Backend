
const { Schema, model } = require('mongoose');


const UsuarioSchema = Schema({
   nombre: {
      type: String,
      required: [true, 'El nombre es obligatorio']
   },
   correo: {
      type: String,
      required: [true, 'El correo es obligatorio']
   },
   password: {
      type: String,
      required: [true, 'La contraseña es obligatoria'],
   },
   imagen: {
      type: String,
   },
   rol: {
      type: String,
      required: true,
      enum: ['ADMIN_ROLE', 'USER_ROLE']
   },
   estado: {
      type: Boolean,
      default: true
   },
   google: {
      type: Boolean,
      default: true
   }
})


module.exports = model( 'Usuarios', UsuarioSchema );



//Lo que quiero grabar en la BD
// {
//    nombre: 'Santiago',
//    correo: 'satiago@mail.com',
//    password: 'santiago_pass',
//    img: 'santiago.jpg',
//    rol: 'admin',
//    estado: false,
//    google: false
// }