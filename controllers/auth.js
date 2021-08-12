const { request, response} = require('express');
const bcryptjs = require('bcryptjs');

const  Usuario  = require('../models/usuario');
const { generarJWT } = require('../helpers/generar-jwt');



const login = async( req = request, res = response) => {

   const { correo, password } = req.body;

   try{

      //Verificar si email existe
      const usuario = await Usuario.findOne({ correo });
      if( !usuario ) {
         return res.status(400).json({
            msg: 'Usuario / Password no son correctos - correo'
         });
      }

      //Verificar si usuario está activo
      if ( !usuario.estado ){
         return res.status(400).json({
            msg: 'Usuario / Password no son correctos - estado: false'
         })
      }

      //Verificar la contraseña
      const validPassword = bcryptjs.compareSync( password, usuario.password );
      if( !validPassword ){
         return res.status(400).json({
            msg: 'Usuario / Passsword no son correctos - password'
         });
      }

      //Generar el JWT
      const token = await generarJWT( usuario.id );

      res.json({
         msg: 'Login ok',
         usuario, token
      })

   } catch (error) {
      console.log(error);
      res.status(500).json({
         msg: 'Error. Contacte el administrador'
      })
   }
}

const loginAdmin = async( req = request, res = response) => {

   const { correo, password } = req.body;

   try{

      //Verificar si email existe
      const usuario = await Usuario.findOne({ correo });
      if( !usuario ) {
         return res.status(400).json({
            msg: 'Usuario / Password no son correctos - correo'
         });
      }

      //Verificar si usuario está activo
      if ( !usuario.estado ){
         return res.status(400).json({
            msg: 'Usuario / Password no son correctos - estado: false'
         })
      }

      //Verificar la contraseña
      const validPassword = bcryptjs.compareSync( password, usuario.password );
      if( !validPassword ){
         return res.status(400).json({
            msg: 'Usuario / Passsword no son correctos - password'
         });
      }

      //verificar si es administrador
      if (usuario.rol != "ADMIN_ROLE") {
         return res.status(400).json({
            msg: 'Usuario no es administrador'
         });
      }

      //Generar el JWT
      const token = await generarJWT( usuario.id );

      res.json({
         msg: 'Login ok',
         usuario, token
      })

   } catch (error) {
      console.log(error);
      res.status(500).json({
         msg: 'Error. Contacte el administrador'
      })
   }
}

module.exports = {
   login, 
   loginAdmin
}