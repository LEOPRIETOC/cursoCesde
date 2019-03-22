'use strict'
let express = require('express');
//importo el controlador project
let ProjectControllers = require('../controllers/ProjectControllers');
//metodo router de express
let router = express.Router();
//se crea una ruta por get ('ruta a crear', 'metodo del controlador')
router.get('/home', ProjectControllers.home);
//Se crea una nueva ruta
router.get('/test', ProjectControllers.test);
router.post('/saveProject', ProjectControllers.saveProject);

module.exports = router;