const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const awsMiddleware = require('aws-serverless-express/middleware');
const routes = require('./routes');

const app = express();

app.use(cors());//Puedo recibir peticiones de otros lados 
app.use(bodyParser.json());
app.use(awsMiddleware.eventContext());

app.use('/', routes); //Todos los path rutas que vengan las voy a coger y pasar/redirigimos a routes, quien me manejara las rutas que hayan

module.exports = app;