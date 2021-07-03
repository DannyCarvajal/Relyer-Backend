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
   
   const { nombre, correo, phoneNumber, comentary} = req.body;
   const contacto = new Contacto({ nombre, correo, phoneNumber, comentary});


   //Guardar en BD
   await contacto.save();

   res.json({
      contacto
   });
}


module.exports = {
   contactGet,
   contactPost
}


