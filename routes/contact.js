const express = require('express');
const router = express.Router();

const {
   contactPost
} = require('../controllers/contact')

router.post('/', contactPost);




module.exports = router;