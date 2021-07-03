const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const Usuario = require('../models/usuario');


const usuariosGet = async (req = request, res = response) => {

   const { limite = 5, desde = 0 } = req.query;
   const query = { estado: true };


   const [total, usuarios] = await Promise.all([
      Usuario.countDocuments(query),
      Usuario.find(query)
         .skip(Number(desde))
         .limit(Number(limite))
   ])


   res.json({
      total,
      usuarios
   });
}

const usuariosGetyId = async (req = request, res = response) => {
   
   const { id } = req.params;
   
   const usuario = await Usuario.findById(id);
   const estado = usuario.estado;
   if(!estado){
      return res.status(401).json({
         msg: 'User is not enabled'
      })
   }
   res.status(200).json({
      id,
      usuario
   });
}

const usuariosPost = async (req = request, res = response) => {
   const { nombre, correo, password, location, position, rol } = req.body;
   const usuario = new Usuario({ nombre, correo, password, location, position, rol });


   //Encriptar la contraseña
   const salt = bcryptjs.genSaltSync();
   usuario.password = bcryptjs.hashSync(password, salt);


   //Guardar en BD
   await usuario.save();

   res.json({
      msg: 'post API - controlador',
      usuario
   });
}
const usuariosPut = async (req = request, res = response) => {

   const { id } = req.params;
   const { _id, password, google, correo, ...resto } = req.body;

   // TODO validar contra base de datos
   if (password) {
      //Encriptar la contraseña
      const salt = bcryptjs.genSaltSync();
      resto.password = bcryptjs.hashSync(password, salt);
   }

   const usuario = await Usuario.findByIdAndUpdate(id, resto);

   res.json({
      usuario
   });
}
const usuariosPatch = (req = request, res = response) => {
   res.json({
      msg: 'patch API - controlador'
   });
}
const usuariosDelete = async(req = request, res = response) => {

   const { id } = req.params;

   //Fisicamente lo borramos
   //const usuario = await Usuario.findByIdAndDelete( id );

   const usuario = await Usuario.findByIdAndUpdate( id, { estado: false });
   const usuarioAutenticado = req.usuario;


   res.json({
      usuario, 
      usuarioAutenticado
   });
}


module.exports = {
   usuariosGet,
   usuariosGetyId,
   usuariosPost,
   usuariosPut,
   usuariosPatch,
   usuariosDelete
}