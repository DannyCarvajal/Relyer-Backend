const { Router } = require('express');
const { check } = require('express-validator');


const { 
   validarCampos,
   validarJWT,
   esAdminRole,
   tieneRole
} = require('../middlewares/index');


const{ esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators')

const {
   usuariosGet,
   usuariosGetyId,
   usuariosPost,
   usuariosPut,
   usuariosPatch,
   usuariosDelete
} = require('../controllers/usuarios');


const router = Router();

router.get('/', usuariosGet);

router.get('/:id',[
   check('id', 'No es un ID válido').isMongoId(),
   check('id').custom(id => existeUsuarioPorId(id)),
   validarCampos
], usuariosGetyId);

router.post('/', [
   check('nombre', 'El nombre es obligatorio').not().isEmpty(),
   check('password', 'El password debe tener más de 6 letras').isLength({ min: 6 }),
   check('correo', 'El correo no es válido').isEmail(),
   check('correo').custom( correo => emailExiste(correo)),
   // check('rol', 'No es un rol permitido').isIn('ADMIN_ROLE, USER_ROLE'),
   check('rol').custom( rol => esRoleValido(rol) ),
   validarCampos
    
], usuariosPost);

router.put('/:id',[
   check('id', 'No es un ID válido').isMongoId(),
   check('id').custom(id => existeUsuarioPorId(id)),
   check('rol').custom( rol => esRoleValido(rol) ),
   validarCampos
], usuariosPut);


router.delete('/:id', [
   validarJWT,
   // esAdminRole,
   tieneRole('ADMIN_ROLE', 'VENTAS_ROLE'),
   check('id', 'No es un ID válido').isMongoId(),
   check('id').custom(id => existeUsuarioPorId(id)),
   validarCampos
], usuariosDelete);

router.patch('/', usuariosPatch);



module.exports = router;