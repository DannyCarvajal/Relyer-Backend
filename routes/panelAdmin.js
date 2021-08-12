const express = require('express');
const routes = express.Router();
const panelAdminController = require('../controllers/panelAdmin.js')
const { 
    validarCampos,
    validarJWT,
    esAdminRole
 } = require('../middlewares/index');

routes.post('/',validarJWT, esAdminRole, panelAdminController.adminIsLogin)

routes.get('/usuarios/', validarJWT, esAdminRole, panelAdminController.getUser)

routes.put('/usuarios/', validarJWT, esAdminRole, panelAdminController.userUpdate)

routes.delete('/usuarios/', validarJWT, esAdminRole, panelAdminController.userDelete)

routes.get('/expertos/', validarJWT, esAdminRole, panelAdminController.getExpert)

routes.put('/expertos/', validarJWT, esAdminRole, panelAdminController.expertUpdate)

routes.delete('/expertos/', validarJWT, esAdminRole, panelAdminController.expertDelete)

routes.get('/tools/', validarJWT, esAdminRole, panelAdminController.getTools)

routes.put('/tools/', validarJWT, esAdminRole, panelAdminController.toolsUpdate)

routes.delete('/tools/', validarJWT, esAdminRole, panelAdminController.toolsDelete)

module.exports = routes;