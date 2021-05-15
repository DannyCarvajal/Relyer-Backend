const lowdDB = require('lowdb');
const router = require('express').Router()
const FyleSync = require("lowdb/adapters/FileSync");
const adapter = new FyleSync("db.json");
const db = lowdDB(adapter);
const { nanoid } = require('nanoid');

//GET todos experts
router.get('/', (req, res) => {
   const experts = db.get('experts').value();

   res.status(200).json({success: true, data: experts})

});

router.post('/', (req, res) =>{
   const {name, category, phone, email, company, experience} = req.body;
   //Realizar la validacion
   //Procesar datos
   const expert = {
      id: nanoid(),
      name, 
      category, 
      phone, 
      email, 
      company,
      experience
   }
   db.get('experts').push(expert).write();

   res.status(200).json({
      success: true, 
      message: 'Expert has been created', 
      data: expert
   })

})


// GET experts/:id
//POST experts
//PUT experts/:id
//DELETE experts/:id










module.exports= router;