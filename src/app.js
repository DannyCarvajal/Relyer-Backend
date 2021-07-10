const express = require('express');
const app = express();
const port = 5000;
const routeQuestions = require('./routes/questions.js')
const routeAnswers = require('./routes/answers.js');
app.use(express.json());

app.use('/questions', routeQuestions);
app.use('/answers', routeAnswers);

app.listen(port, () => {
    console.log('App iniciada en el puerto '+port);
});