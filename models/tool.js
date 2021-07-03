
const {Schema, model } = require('mongoose'); 

const ToolSchema = Schema({
   nombre: {
      type: String,
      required: [true, 'El nombre es obligatorio']
   },
   category: {
      type: String,
      required: [true, 'La categoria es obligatorio'],
   },
   description: {
      type: String,
      required: [true, 'La descripcion es obligatorio']
   },
   link: {
      type: String,
   },
   estado: {
      type: Boolean,
      default: true
   }
});

//Para sacar __v y password de lo que muestro
ToolSchema.methods.toJSON = function(){
   const { __v, _id, ...tool } = this.toObject();
   tool.uid = _id;
   return tool;
}

module.exports = model('Tool', ToolSchema); //Mongoose le agrega la s por defecto
