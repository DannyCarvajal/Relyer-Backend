const { request, response } = require('express');

const Contacto = require('../models/contacto');

const contactGet = async ( req = request, res = response) => {

   const { limite = 5, desde = 0 } = req.query;
   const query = { estado: true };


   const [total, entries] = await Promise.all([
      Contacto.countDocuments(query),
      Contacto.find(query)
         .skip(Number(desde))
         .limit(Number(limite))
   ])


   res.status(200).json({
      total,
      entries
   });
}

const contactPost = async (req = request, res = response) => {
   
   const { nombre, correo, telefono, comentario} = req.body;
   const contacto = new Contacto({ nombre, correo, telefono, comentario});


   //Guardar en BD
   await contacto.save();

   res.status(201).json({
      contacto
   });
}

const contactUpdate = async (req = request, res = response) => {
   const {id}= req.query
   const {estado, nombre, correo, telefono, comentario} = req.body;

   if(!id || !estado || ! nombre || !correo || !telefono || !comentario){
      res.status(404).json({msg: "Hace falta datos"})
   }
   const contactGuardado = await Contacto.findById(id);
   let date = contactGuardado.date;

   let todo = {id, date, estado, nombre, correo, telefono, comentario}
   const contact = await Contacto.findByIdAndUpdate(id, todo);

   res.status(200).json(contact)
}

const contactDelete = async (req, res) => {
   const {id} = req.query;

   if(!id){
       res.status(401).json({msg: 'id no valida'})
   }

   const contact = await Contacto.findByIdAndDelete( id );

   res.status(200).json({contact, mensaje: "Contacto eliminado"})
}


module.exports = {
   contactGet,
   contactPost,
   contactUpdate,
   contactDelete
}


