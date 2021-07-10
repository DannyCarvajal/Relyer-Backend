const express = require('express');
const routes = express.Router();
let answers = require('../answers.json')

routes.get('/', (req, res) => {
    res.status(200).json({data: answers})
})

routes.post('/', (req, res) => {
    answers.push(req.body);
    res.status(200).json({msg : "Datos añadidos", data : answers});
})


routes.delete('/', (req, res) => {
    const {id} = req.query
    let i = answers.map(item => item.id).indexOf(parseInt(id))
    if (i == -1){
        res.status(400).json({message: 'id no encontrado'})
    }else{
        answers.splice(i, 1)
        res.status(200).json(answers)
    }
})

routes.put('/', (req, res) =>{
    const {id} = req.query
    const {answer, value, fk} = req.body
    let i = answers.map(item => item.id).indexOf(parseInt(id))
    if (i == -1){
        res.status(400).json({message: 'id no encontrado'})
    }else{
        console.log(answer, value, fk);
        answers[i].answer = answer
        answers[i].value = value
        answers[i].fk = fk
        res.status(200).json(answers)
    }
    
})

module.exports = routes;