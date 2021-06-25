
const {Schema, model } = require('mongoose'); 

const UsuarioSchema = Schema({
   nombre: {
      type: String,
      required: [true, 'El nombre es obligatorio']
   },
   correo: {
      type: String,
      required: [true, 'El correo es obligatorio'],
      unique: true
   },
   password: {
      type: String,
      required: [true, 'La contraseña es obligatoria'],
   },
   location: {
      type: String,
   },
   img: {
      type: String,
   },
   position: {
      type: String,
      required: true,
      emun: ['ENTREPRENEUR', 'EMPLOYEE']
   },
   rol: {
      type: String,
      required: true,
      emun: ['ADMIN_ROLE', 'USER_ROLE']
   },
   estado: {
      type: Boolean,
      default: true
   }
});

//Para sacar __v y password de lo que muestro
UsuarioSchema.methods.toJSON = function(){
   const { __v, password, _id, ...usuario } = this.toObject();
   usuario.uid = _id;
   return usuario;
}

module.exports = model('Usuario', UsuarioSchema); //Mongoose le agrega la s por defecto






// {
//    nombre: 'asd',
//    correo: 'asasdfa',
//    password: '123123',
//    img: 'asadf',
//    rol: ' adsfnasfdsa',
//    estado: false,
//    google: false
// }