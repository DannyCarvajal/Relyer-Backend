const express = require('express');
const router = express.Router();

const { 
   fastRegisterPost,
   completeRegisterPost
} = require('../controllers/register');


router.post('/fast', fastRegisterPost );

router.post('/complete', completeRegisterPost );


module.exports = router;

