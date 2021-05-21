const { request, response } = require('express');

const fastRegisterPost = (req = request, res = response) => {
   res.json({
      msg: 'API fastRegister Post'
   })
}

const completeRegisterPost = (req = request, res = response) => {
   res.json({
      msg: 'API completeRegisterPost'
   })
}


module.exports = {
   fastRegisterPost,
   completeRegisterPost
}