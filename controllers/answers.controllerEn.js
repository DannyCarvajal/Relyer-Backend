const { request, response} = require('express');
const Answers = require('../models/answersEn.js');

const getAnswers = async (req, res) => {
    const [answers] = await Promise.all([
        Answers.find()
     ])

    res.status(200).json({answers})
}

const getAnswersById = async (req, res) => {
    const {id} = req.query

    if(!id){
        res.status(401).json({msg: 'Es necesario ingresar un ID valido'})
    }
    const answers = await Answers.findById( id );

    res.status(200).json({answers})
}

const addAnswers = async (req, res) => {
    const {answer, value, questionId} = req.body

    if(!answer || !value ||!questionId){
        res.status(401).json({msg: 'Respuesta no valida'})
    }

    const answers = new Answers({answer, value, questionId})

    console.log(answers);

    await answers.save();

    res.status(200).json({msg : "Datos añadidos", data : answers});
}

const deleteAnswers = async (req, res) => {
    const {id} = req.query;

    if(!id){
        res.status(401).json({msg: 'id no valida'})
    }

    const answers = await Answers.findByIdAndDelete( id );

    res.status(200).json({answers, mensaje: "Pregunta eliminado"})
}

const updateAnswers = async (req, res) => {
    const {id} = req.query
    const {answer, value, questionId} = req.body
    if(!id || !answer || !value || !questionId){
        res.status(401).json({msg: 'Datos invalidos'})
    }
    const todo = {id, answer, value, questionId}
    const answers = await Answers.findByIdAndUpdate( id, todo );

    res.status(200).json(answers)
}

exports.getAnswers = getAnswers;
exports.getAnswersById = getAnswersById;
exports.addAnswers = addAnswers;
exports.deleteAnswers = deleteAnswers;
exports.updateAnswers = updateAnswers;