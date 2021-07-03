const { request, response } = require('express');

const Tool = require('../models/tool');

const toolsGet = async (req = request, res = response) => {
   
   const { limite = 5, desde = 0 } = req.query;
   const query = { estado: true };


   const [total, tools] = await Promise.all([
      Tool.countDocuments(query),
      Tool.find(query)
         .skip(Number(desde))
         .limit(Number(limite))
   ])


   res.json({
      total,
      tools
   });
}

const toolsGetById = async (req = request, res = response) => {

   const { id } = req.params;
   
   const tool = await Tool.findById(id);
   const estado = tool.estado;
   if(!estado){
      return res.status(401).json({
         msg: 'Tool is not enabled'
      })
   }
   res.status(200).json({
      id,
      tool
   });
}

const toolsPost = async (req = request, res = response) => {

   const { nombre, category, description, link} = req.body;

   const tool = new Tool({ nombre, category, description, link});

   //Guardar en BD
   await tool.save();


   res.json({
      msg: 'Tools Post',
      tool
   })
}

const toolsPut = async (req = request, res = response) => {

   const { id } = req.params;
   const { _id, ...resto } = req.body;

   const tool = await Tool.findByIdAndUpdate(id, resto);


   res.json({
      tool
   })
}

const toolsDelete = async (req = request, res = response) => {

   const { id } =req.params;

   const tool = await Tool.findByIdAndUpdate(id, { estado: false});
   const usuarioAutenticado = req.usuario;

   res.json({
      tool, 
      usuarioAutenticado
   })
}

module.exports = {
   toolsGet,
   toolsGetById,
   toolsPost,
   toolsPut,
   toolsDelete
}
