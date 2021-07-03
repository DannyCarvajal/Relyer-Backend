const { Router } = require('express');
const { check } = require('express-validator');

const { 
   validarCampos,
   validarJWT,
   tieneRole
} = require('../middlewares/index');


const {
   contactGet,
   contactPost
} = require('../controllers/contact')

const router = Router();

router.get('/', [
   validarJWT,
   tieneRole('ADMIN_ROLE'),
],contactGet);


router.post('/', [
   check('nombre', 'El nombre es obligatorio').not().isEmpty(),
   check('correo', 'El correo no es válido').isEmail(),
   validarCampos
], contactPost);



module.exports = router;