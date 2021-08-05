const { request, response} = require('express');
const Results = require('../models/results.js');
const Answers = require('../models/answers.js');
const results = require('../models/results.js');


const getResults = async (req, res) => {

    const [results] = await Promise.all([
        Results.find()
     ])

    res.status(200).json({results})
}
const getResultsById = async (req, res) => {
    const {id} = req.query
    const results = await Results.find({usuarioId: id})

    res.status(200).json({results})
}

const addResults = async (req, res) => {
    const {questionsId, answers, score,  usuarioId} = req.body
    let totalScore = 0;

    if(!questionsId || !answers ||!score || !usuarioId){
        res.status(401).json({msg: 'Pregunta no valida'})
    }

    
    let arrayTemp = Object.values(score);
    let stringAnswers = arrayTemp.toString();
    let arrayAnswers = stringAnswers.split(',');

    for(let value of arrayAnswers){
        const score2 =  await Answers.findById(value);
        if(score2.value != 'N/A'){
            totalScore += parseInt (score2.value)
        }
    }
    let scoreString = totalScore.toString()
    console.log(scoreString);
    const results = new Results({questionsId, answers, totalScore, usuarioId})

    //bd
    await results.save();

    res.status(200).json({msg : "Datos añadidos", data : results});
}

exports.getResults = getResults;
exports.getResultsById = getResultsById;
exports.addResults = addResults;