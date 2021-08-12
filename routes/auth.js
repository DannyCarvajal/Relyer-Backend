const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos')

const { login,
   loginAdmin
} = require('../controllers/auth');



const router = Router();

router.post('/login', [
   check('correo', 'El correo es obligatorio').isEmail(),
   check('password', 'La contraseña es obligatoria').not().isEmpty(),
   validarCampos
], login);

router.post('/loginAdmin', [
   check('correo', 'El correo es obligatorio').isEmail(),
   check('password', 'La contraseña es obligatoria').not().isEmpty(),
   validarCampos
], loginAdmin);


module.exports = router;