const { request, response } = require('express');

const contactPost = (req = request, res = response) => {
   const {
      nombres,
      apellidos,
      correo,
      telefono,
      comentarios
   } = req.body;

   res.json({
      nombres,
      apellidos,
      correo,
      telefono,
      comentarios
   })
}


module.exports = {
   contactPost
}


