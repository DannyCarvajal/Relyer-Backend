const { Router } = require('express');
const { check } = require('express-validator');

const { 
   validarCampos,
   validarJWT,
   tieneRole
} = require('../middlewares/index');


const{ 
   existeExpertoPorId } = require('../helpers/db-validators')

const { 
   expertsGet, 
   expertsPost, 
   expertsGetById,
   expertsPut,
   expertsDelete
} = require('../controllers/expertos');




const router = Router();

router.get('/', expertsGet);


router.get('/:id',[
   check('id', 'No es un ID válido').isMongoId(),
   check('id').custom(id => existeExpertoPorId(id)),
   validarCampos
], expertsGetById);


router.post('/',[
   check('nombre', 'el nombre es obligatorio').not().isEmpty(),
   check('correo', 'El correo no es válido').isEmail(),
   validarCampos

], expertsPost);


router.put('/:id', [
   check('id', 'No es un ID válido').isMongoId(),
   check('id').custom(id => existeExpertoPorId(id)),
   validarCampos
],expertsPut);


router.delete('/:id', [
   validarJWT,
   // esAdminRole,
   tieneRole('ADMIN_ROLE'),
   check('id', 'No es un ID válido').isMongoId(),
   check('id').custom(id => existeExpertoPorId(id)),
   validarCampos
], expertsDelete);


module.exports = router;