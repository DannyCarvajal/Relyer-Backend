const express = require('express');
const routes = express.Router();
const questionsController = require('../controllers/questions.controller.js')

routes.get('/', questionsController.getQuestions)

routes.post('/', questionsController.addQuestions)

routes.delete('/', questionsController.deleteQuestions)

routes.put('/', questionsController.updateQuestions)

module.exports = routes;