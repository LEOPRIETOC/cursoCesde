'use strict'
let mongose = require('mongoose');
let Schema = mongose.Schema;
//squema de la bd
let projectSchema = Schema({
    nombre: String,
    apellido: String,
    ciudad: String,
    edad: Number,
    fruta: String
});
//
module.exports = mongose.model('curso', projectSchema);