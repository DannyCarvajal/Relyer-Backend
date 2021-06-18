const { request, response} =require('express');


const expertsGet = (req = request, res = response) => {
   res.status(200).json({
      msg: 'Si funciona API - Get Experts'
   })
}

const expertsGetById = (req = request, res= response) => {
   
   const {id} = req.params;

   res.json({
      msg: 'Si funciona API - Get by Id Experts',
      id
   })
}

const expertsPost = (req = request, res= response) => {

   //Created Succesfull - Status 200
   //Bad request - Status 400
   //Unauthorized - Status 401
   //Recibe
   // {
   //    name = "name",
   //    category = "category",
   //    phoneNumber = "phoneNumber",
   //    email = "email",
   //    company = "company",
   //    experience = "3+"
   // }
   const { name, category, phoneNumber, email, company, experience} = req.body;

   res.status(400).json({
      msg: 'Ingrese todos los datos solicitados - Post by Id Experts'
   })

   res.status(201).json({
      msg: 'Si funciona API - Post by Id Experts',
      name,
      category,
      phoneNumber,
      email,
      company,
      experience
   })
}

const expertsPut = (req = request, res = response) => {
   
   const {id} = req.params;

   res.json({
      msg: 'Si funciona API - Get by Id Experts',
      id
   })
}


module.exports = {
   expertsGet,
   expertsGetById,
   expertsPost,
   expertsPut
}