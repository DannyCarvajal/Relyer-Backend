const {Schema, model } = require('mongoose'); 

const ResultsSchema = Schema({
    questionsId: {
       type: Object,
       required: [true, 'La pregunta es obligatoria']
    },
    answers: {
       type: Object,
       required: [true, 'Respuestas necesarias']
    },
    totalScore: {
      type: Number,
      required: [true, 'Puntaje es necesario']
    },
    usuarioId: {
       type: String,
       required: [true, 'Id usuario es necesario']
    }
 });

 ResultsSchema.methods.toJSON = function(){
    const { __v, _id, ...results } = this.toObject();
    results.uid = _id;
    return results;
 }
 
 module.exports = model('Results', ResultsSchema); //Mongoose le agrega la s por defecto