
/* START EXPRESS */
const express= require('express');
const app= express();
const port= 3000;

/* HOW DO YOU SEND ME THE INFO */
app.use(express.json());
app.use(express.urlencoded({extended:false}));

/* ROUTER */ 
const userRouter= require('./routes/user')


/* ROUTES */
app.use('/api/users',userRouter)



app.listen(port,()=>{
console.log('bien bien')
})