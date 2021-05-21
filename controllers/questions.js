const{ request, response } = require('express');

const questionsGet = (req = request, res = response ) => {
   res.json({
      msg: "API - questions Get"
   })
}

const questionsPost = (req = request, res = response) => {
   res.json({
      msg: "API - questions Post"
   })
}



module.exports = {
   questionsGet,
   questionsPost
}