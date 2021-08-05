const {Schema, model } = require('mongoose'); 

const AnswerSchema = Schema({
    answer: {
       type: String,
       required: [true, 'La respuesta es obligatoria']
    },
    value: {
      type: String,
      required: [true, 'Valor es requerido']
    },
    questionId: {
      type: String,
      required: [true, 'Valor es requerido']
    }
 });

 AnswerSchema.methods.toJSON = function(){
    const { __v, _id, ...answer } = this.toObject();
    answer.uid = _id;
    return answer;
 }
 
 module.exports = model('Answer', AnswerSchema); //Mongoose le agrega la s por defecto