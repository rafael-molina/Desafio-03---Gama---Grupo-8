const express = require("express");


const pacientesController = require("../controllers/pacientesController");

const pacienteCreateValidation = require("../validations/pacientes/create");

const pacienteUpdateValidation = require("../validations/pacientes/update");

const routes = express.Router();

routes.get("/psicologos");
routes.get("/psicologos/:id");
routes.post("/psicologos");
routes.put("/psicologos/:id");
routes.delete("/psicologos/:id");


// rotas "pacientes"

routes.post("/pacientes", pacienteCreateValidation, pacientesController.cadastro);   

routes.get("/pacientes", pacientesController.listarPacientes);    

routes.get("/pacientes/:id", pacientesController.pacientePorId);    

routes.put("/pacientes/:id", pacienteUpdateValidation, pacientesController.atualizarPaciente);    

routes.delete("/pacientes/:id", pacientesController.deletarPaciente); 


module.exports = routes;