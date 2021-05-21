const express = require('express');
const router = express.Router();


const { toolsGet } = require('../controllers/tools')


router.get('/', toolsGet);


module.exports = router;