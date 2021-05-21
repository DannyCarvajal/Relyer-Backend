const { request, response } = require('express');


const loginPost = (req = request, res = response) => {
   res.json({
      msg: 'API - login Post'
   })
}


module.exports = { 
   loginPost
}