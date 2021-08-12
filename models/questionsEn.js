const {Schema, model } = require('mongoose'); 

const QuestionSchema = Schema({
    question: {
       type: String,
       required: [true, 'La pregunta es obligatoria']
    },
    type: {
       type: String,
       required: [true, 'el tipo es obligatorio']
    }
 });

 QuestionSchema.methods.toJSON = function(){
    const { __v, _id, ...question } = this.toObject();
    question.uid = _id;
    return question;
 }
 
 module.exports = model('enQuestion', QuestionSchema); //Mongoose le agrega la s por defecto