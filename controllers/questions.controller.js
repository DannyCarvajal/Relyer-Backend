const { request, response} = require('express');

const Question = require('../models/questions.js');

const getQuestions = async (req, res) => {

    const [questions] = await Promise.all([
        Question.find()
     ])

    res.status(200).json({questions})
}

const addQuestions = async (req, res) => {
    const {question, type} = req.body

    if(!question || !type){
        res.status(401).json({msg: 'Pregunta no valida'})
    }

    const questions = new Question({question, type})

    //bd
    await questions.save();

    res.status(200).json({msg : "Datos añadidos", data : questions});
}

const deleteQuestions = async (req, res) => {
    const {id} = req.query;

    if(!id){
        res.status(401).json({msg: 'id no valida'})
    }

    const questions = await Question.findByIdAndDelete( id );

    res.status(200).json({questions, mensaje: "Pregunta eliminado"})
}

const updateQuestions = async (req, res) => {
    const {id} = req.query
    const {question} = req.body
    if(!question || !id){
        res.status(401).json({msg: 'Datos invalidos'})
    }
    const todo = {id, question}
    const questions = await Question.findByIdAndUpdate( id, todo );

    res.status(200).json(questions)
}

exports.getQuestions = getQuestions;
exports.addQuestions = addQuestions;
exports.deleteQuestions = deleteQuestions;
exports.updateQuestions = updateQuestions;