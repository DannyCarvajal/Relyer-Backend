const { request, response } = require('express');


const toolsGet = (req = request, res = response) => {
   
   res.json(
   
      [
         {
            toolName: "Platzi",
            value: "Educational",
            link: "Platzi link"
         },
         {
            toolName: "Nequi",
            value: "fintech",
            link: "Nequi link"
         }
      ]
   )
}


module.exports = {
   toolsGet
}
