const { request, response} =require('express');

const Experto = require('../models/experto');

const expertsGet = async (req = request, res = response) => {
   
   const { limite = 5, desde = 0 } = req.query;
   const query = { estado: true };


   const [total, expertos] = await Promise.all([
      Experto.countDocuments(query),
      Experto.find(query)
         .skip(Number(desde))
         .limit(Number(limite))
   ])


   res.status(200).json({
      total,
      usuarios: expertos
   });
}

const expertsGetById = async (req = request, res= response) => {
   
   const { id } = req.params;

   const experto = await Experto.findById(id);
   const estado = experto.estado;

   if(!estado){
      return res.status(401).json({
         msg: 'Expert is not enabled'
      })
   }

   res.status(200).json({
      id,
      experto
   })
}

const expertsPost = async (req = request, res= response) => {

   const { nombre, category, correo, phoneNumber, company, experience} = req.body;

   const experto = new Experto({nombre, category, correo, phoneNumber, company, experience})

   //Guardar en BD
   await experto.save();

   res.status(201).json({
      msg: 'Si funciona API - Post  Experts',
      nombre, 
      category,
      correo,
      phoneNumber,
      company,
      experience
   })
}

const expertsPut = async (req = request, res = response) => {
   
   const {id} = req.params;
   const { _id, correo, ...resto } = req.body;

   const experto = await Experto.findByIdAndUpdate(id, resto);

   res.json({
      msg: 'Si funciona API - Put Experts',
      experto
   })
}

const expertsDelete = async (req = request, res= response) => {

   const{ id } = req.params;

   const experto = await Experto.findByIdAndUpdate(id,{estado: false });

   const usuarioAutenticado = req.usuario;

   res.json({
      experto,
      usuarioAutenticado
   })

}

module.exports = {
   expertsGet,
   expertsGetById,
   expertsPost,
   expertsPut,
   expertsDelete
}