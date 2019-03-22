'use strict'

//Importacion de biblioteca para conexion mongo db
let mongoose = require('mongoose');
let app = require("./app");
let port = 3701;

//promesa conexion mongo db
/*La promesa se usa para realizar procesos asincronos,
los cuales por ejemplo esperan hasta que lleguen los datos
y luego los muestra*/
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/cosita", { useNewUrlParser: true })
    .then(() => {
        console.log("conexion a la base de datos extablecida con exito");
    })
    .catch((err) => {
        console.log(err);
    });

//Creacion del servidor
app.listen(port, () => {
    console.log("Servidor corriendo correctamente");
});
