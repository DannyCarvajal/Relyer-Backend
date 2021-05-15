const express= require('express');
const lowdDB = require("lowdb");


/* START EXPRESS */
const app= express();

//DB Setup
const FyleSync = require("lowdb/adapters/FileSync");

const adapter = new FyleSync("db.json");
const db = lowdDB(adapter);

// seed DB
const experts = [
   {
      "id": 123,
      "name": 'Pablo',
      "category": 'VIP',
      "phone": '3245678903',
      "email": "dsf@gmail.com",
      "company": 'Protalento',
      "experience": 2,
   }
]
db.defaults({ users: [], experts }).write();




//Server setup
const port= 3000;

/* HOW DO YOU SEND ME THE INFO */
app.use(express.json());
app.use(express.urlencoded({extended:false}));

/* ROUTER */ 
const userRouter= require('./routes/user')
const expertRouter = require('./routes/expert')

/* ROUTES */
app.use('/api/users',userRouter)
app.use('/api/experts',expertRouter)


app.listen(port,()=>{
console.log('bien bien')
})


//Pistas para el put
// .put(“/”, (req,res) => {})
// req.body.id
// db.get(“experts”).find({ id: id }).assigng({ changes }).write();