const express = require('express');
const router = express.Router();

const { 
   questionsGet,
   questionsPost
} = require('../controllers/questions');

router.get('/', questionsGet);

router.post('/', questionsPost);

module.exports = router;


