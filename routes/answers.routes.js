const express = require('express');
const routes = express.Router();
const answersController = require('../controllers/answers.controller.js')

routes.get('/', answersController.getAnswers)

routes.get('/id/', answersController.getAnswersById)

routes.post('/', answersController.addAnswers)

routes.delete('/', answersController.deleteAnswers)

routes.put('/', answersController.updateAnswers)

module.exports = routes;