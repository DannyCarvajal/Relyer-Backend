
const router = require('express').Router()


router.get('/',(req,res)=>{
    
    const users = [
        {
            "name": "Aleja Henao",
            "username": "Alejascout",
            "category":"entrepreneur",
            "thumbnail": "https://source.unsplash.com/40x40/?aleja",
            "email":"alejahenaoes@hotmail.com"
        },
        {
            "name": "Pablo Velásquez",
            "username": "pablito",
            "category":"entrepreneur",
            "thumbnail": "https://source.unsplash.com/40x40/?pablo",
            "email":"pablito@hotmail.com"
        }
    ]

    res.status(200).send({data: users})


})
router.post('/',(req,res)=>{


})
router.put('/',(req,res)=>{

})
router.delete('/',(req,res)=>{

})

module.exports= router;