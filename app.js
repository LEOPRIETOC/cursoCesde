'use strict'
//importacion de biblioteca (Modulos)
let express = require('express');
//let bodyParser = require('body-parser');
//Ejecuto express
let app = express();
// cargar archivo de rutas
let projecRoutes = require('./Routes/ProjectRoutes');
//middlwares
/*los middlware es un metodo que se ejecuta antes 
de ejecutar un controador*/

//app.use(bodyParser.urlencoded({ extended: false }));

//Cualquier cosa que llegue de una peticion 
//la convierte en formato Json
app.use(express.json());

//exportar modulo 
//lo deja disponible para importarlo en cualquier otro archivo
//rutas 
app.use('/api',projecRoutes);
module.exports = app;