const { Router } = require('express');
const { check } = require('express-validator');

const { 
   validarCampos,
   validarJWT,
   tieneRole
} = require('../middlewares/index');


const {
   contactGet,
   contactPost,
   contactUpdate,
   contactDelete
} = require('../controllers/contact')

const router = Router();

router.get('/', [
   validarJWT,
   tieneRole('ADMIN_ROLE'),
], contactGet);


router.post('/', [
   check('nombre', 'El nombre es obligatorio').not().isEmpty(),
   check('correo', 'El correo no es válido').isEmail(),
   check('telefono', 'El numero es obligatorio').not().isEmpty(),
   check('comentario', 'El comentario es obligatorio').not().isEmpty(),
   validarCampos
], contactPost);

router.put('/', validarJWT, contactUpdate);

router.delete('/', validarJWT, contactDelete);


module.exports = router;