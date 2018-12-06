const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const porta = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./App/controllers/index')(app);


app.listen(porta);