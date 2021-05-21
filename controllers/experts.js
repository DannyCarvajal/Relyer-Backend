const { request, response} =require('express');


const expertsGet = (req = request, res = response) => {
   res.json({
      msg: 'Si funciona API - Get Experts'
   })
}

const expertsGetById = (req = request, res= response) => {
   
   const id = req.params.id;

   res.json({
      msg: 'Si funciona API - Get by Id Experts',
      id
   })
}

const expertsPost = (req = request, res= response) => {

   res.json({
      msg: 'Si funciona API - Post by Id Experts'
   })
}

const expertsPut = (req = request, res = response) => {
   
   const id = req.params.id;

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