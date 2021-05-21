const { request, response } =require('express');



const resourcesGet = (req = request, res= response) => {
   
   const { name } = req.params;

   res.json({
      msg: 'API - resourcesGet',
      name
   })
}



module.exports = {
   resourcesGet
}
