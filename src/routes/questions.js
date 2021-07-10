const express = require('express');
const routes = express.Router();
let questions = require('../questions.json')

routes.get('/', (req, res) => {
    res.status(200).json({data: questions})
})

routes.post('/', (req, res) => {
    questions.push(req.body);
    res.status(200).json({msg : "Datos añadidos", data : questions});
})

routes.delete('/', (req, res) => {
    const {id} = req.query
    let i = questions.map(item => item.id).indexOf(parseInt(id))
    if (i == -1){
        res.status(400).json({message: 'id no encontrado'})
    }else{
        questions.splice(i, 1)
        res.status(200).json(questions)
    }
})

routes.put('/', (req, res) =>{
    const {id} = req.query
    const {question} = req.body
    let i = questions.map(item => item.id).indexOf(parseInt(id))
    if (i == -1){
        res.status(400).json({message: 'id no encontrado'})
    }else{
        questions[i].question=question
        res.status(200).json(questions)
    }
    
})

module.exports = routes;