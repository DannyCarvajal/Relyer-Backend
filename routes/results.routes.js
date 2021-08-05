const express = require('express');
const routes = express.Router();
const resultsController = require('../controllers/results.controller.js')

routes.get('/', resultsController.getResults)

routes.get('/id/', resultsController.getResultsById)

routes.post('/', resultsController.addResults)

module.exports = routes;