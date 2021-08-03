
const {Schema, model } = require('mongoose'); 

const ContactoSchema = Schema({
   nombre: {
      type: String,
      required: [true, 'El nombre es obligatorio']
   },
   correo: {
      type: String,
      unique: false,
      required: [true, 'El correo es obligatorio']
   },
   telefono: {
      type: String,
      required: [true, 'El telefono es obligatorio']
   },
   comentario: {
      type: String,
      required: [true, 'El comentario es obligatorio']
   },
   date: {
      type: Date, 
      default: Date.now()
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
