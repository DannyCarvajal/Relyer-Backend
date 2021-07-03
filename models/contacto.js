
const {Schema, model } = require('mongoose'); 

const ContactoSchema = Schema({
   nombre: {
      type: String,
      required: [true, 'El nombre es obligatorio']
   },
   correo: {
      type: String,
      required: [true, 'El correo es obligatorio'],
      unique: true
   },
   phoneNumber: {
      type: String,
   },
   comentary: {
      type: String,
   },
   estado: {
      type: Boolean,
      default: true
   }
});

//Para sacar __v y password de lo que muestro
ContactoSchema.methods.toJSON = function(){
   const { __v, _id, ...entry } = this.toObject();
   entry.uid = _id;
   return entry;
}

module.exports = model('Contacto', ContactoSchema); //Mongoose le agrega la s por defecto
