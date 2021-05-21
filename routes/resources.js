const express = require('express');
const router = express.Router();


const {
   resourcesGet
} =require('../controllers/resources')


router.get('/:name', resourcesGet )




module.exports = router;