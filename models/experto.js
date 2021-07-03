
const {Schema, model } = require('mongoose'); 

const ExpertoSchema = Schema({
   nombre: {
      type: String,
      required: [true, 'El nombre es obligatorio']
   },
   category: {
      type: String,
      required: [true, 'La categoria es obligatoria']
   },
   correo: {
      type: String,
      required: [true, 'El correo es obligatorio'],
      unique: true
   },
   phoneNumber: {
      type: String,
      required: [true, 'El número telefonico es obligatorio'],
      unique: true
   },
   company: {
      type: String,
      required: [true, 'La empresa es obligatoria']
   },
   experience: {
      type: String,
      required: [true, 'La experiencia es obligatoria'],
   },
   img: {
      type: String,
   },
   estado: {
      type: Boolean,
      default: true
   }
});

//Para sacar __v y password de lo que muestro
ExpertoSchema.methods.toJSON = function(){
   const { __v, _id, ...experto } = this.toObject();
   experto.uid = _id;
   return experto;
}

module.exports = model('Experto', ExpertoSchema); //Mongoose le agrega la s por defecto
