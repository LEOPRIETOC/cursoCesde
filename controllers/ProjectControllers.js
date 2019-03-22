'use strict'
//Se crea un abjeto controller tipo json
let Project = require('../Models/ProjectModel');
let controller = {
    home: function (req, res) {
        return res.status(200).send({
            message: 'soy la home'
        })
    },
    test: function (req, res){
        return res.status(200).send({
            message: "soy el metodo test del controlador project"
        });
    },
    saveProject: function (req, res){
        let project = new Project();
        let params = req.body;
        project.nombre = params.nombre;
        project.apellido = params.apellido;
        project.ciudad = params.ciudad;
        project.edad = params.edad;
        project.fruta = params.fruta;
        project.save((err, projectStored) => {
            if (err) {
                return res.status(500).send({
                    message: "erro no se ha podido guardar el documento"
                });
            }
                if (!projectStored) {
                    return res.status(404).send({
                        message: 'No se ha podido guardar el proyecto'
                    });
                }
                return res.status(200).send({
                    project: projectStored,
                    message: "metodo save project"
                });
            });
            }
        };
        module.exports = controller;