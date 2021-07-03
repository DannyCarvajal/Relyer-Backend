const { Router } = require('express');
const { check } = require('express-validator');


const { 
   validarCampos,
   validarJWT,
   tieneRole
} = require('../middlewares/index');

const{ 
   existeToolPorId } = require('../helpers/db-validators')


const { 
   toolsGet, 
   toolsGetById,
   toolsPost,
   toolsPut,
   toolsDelete
} = require('../controllers/tools')


const router = Router();


router.get('/', toolsGet);


router.get('/:id', [
   check('id', 'No es un ID válido').isMongoId(),
   check('id').custom(id => existeToolPorId(id)),
   validarCampos
], toolsGetById);


router.post('/', [
   check('nombre', 'El nombre es obligatorio').not().isEmpty(),
   check('category', 'La categoria es obligatoria').not().isEmpty(),
   check('description', 'La description es obligatoria').not().isEmpty(),
   validarCampos
],toolsPost);


router.put('/:id', [
   check('id', 'No es un ID válido').isMongoId(),
   check('id').custom(id => existeToolPorId(id)),
   validarCampos
],toolsPut);


router.delete('/:id',[
   validarJWT,
   // esAdminRole,
   tieneRole('ADMIN_ROLE'),
   check('id', 'No es un ID válido').isMongoId(),
   check('id').custom(id => existeToolPorId(id)),
   validarCampos
], toolsDelete);


module.exports = router;