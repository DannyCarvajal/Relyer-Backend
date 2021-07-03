const Role = require('../models/rol');
const Usuario = require('../models/usuario');
const Experto = require('../models/experto');
const Tool = require('../models/tool');



const esRoleValido = async (rol = '') => {

   const existeRol = await Role.findOne({ rol });
   if (!existeRol) {
      throw new Error(`El rol ${rol} no está registrado en la BD`)
   }
};

//Verificar si el correo existe
const emailExiste = async ( correo = '') => {

   const existeEmail = await Usuario.findOne({ correo: correo }); 

   if (existeEmail) {
      throw new Error(`El correo ${correo} ya está registrado en la BD`)
   }
}


//Verificar si el usuario ID existe
const existeUsuarioPorId = async ( id ) => {

   //Verificar si el ID existe
   const existeUsuario = await Usuario.findById(id);
   if (!existeUsuario) {
      throw new Error(`El id: ${id} no existe`)
   }
}

const existeExpertoPorId = async (id) => {
   
   //Verificar si el ID existe
   const existeExperto = await Experto.findById(id);
   if (!existeExperto) {
      throw new Error(`El id: ${id} no existe`)
   }
}


const existeToolPorId = async ( id ) => {
   
   //Verificar si el ID existe
   const existeTool = await Tool.findById(id);
   if(!existeTool){
      throw new Error(`El id: ${id} no existe`)
   }
}

module.exports = {
   esRoleValido,
   emailExiste,
   existeUsuarioPorId,
   existeExpertoPorId,
   existeToolPorId
}