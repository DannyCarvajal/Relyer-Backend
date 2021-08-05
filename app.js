const express = require('express');
const helmet = require('helmet')
const cors = require('cors')
const { dbConnection } = require('./database/config.js');
const app = express();
const port = 5000;
app.use(express.json());




const conectarDB = async () => {
    await dbConnection();
}

// Conectar a base de datos
conectarDB();


//middleware
app.use(helmet());
app.use(cors());

//routes
const routeQuestions = require('./routes/questions.routes.js')
const routeAnswers = require('./routes/answers.routes.js');
const routeResults = require('./routes/results.routes.js');

//use routes
app.use('/questions', routeQuestions);
app.use('/answers', routeAnswers);
app.use('/results', routeResults);

//servidor
app.listen(port, () => {
    console.log('App iniciada en el puerto '+port);
});