const express = require('express');
const router = express.Router();

const{
   expertsGet,
   expertsGetById,
   expertsPost,
   expertsPut
} = require('../controllers/experts')

router.get('/', expertsGet);

router.get('/:id', expertsGetById);

router.post('/', expertsPost);

//Esta ruta funciona como delete, solo cambia el estado del experto
router.put('/:id', expertsPut);



module.exports = router;