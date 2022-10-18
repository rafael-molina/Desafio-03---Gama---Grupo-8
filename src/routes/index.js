const express = require("express");

const pacientesController = require("../controllers/pacientesController");
const psicologosController = require("../controllers/psicologosController");

const pacienteCreateValidation = require("../validations/pacientes/create");

const pacienteUpdateValidation = require("../validations/pacientes/update");

const routes = express.Router();

// rotas "psicologos"

routes.get("/psicologos", psicologosController.listarPsicologos);
routes.get("/psicologos/:id", psicologosController.getPsicologoId);
routes.post("/psicologos", psicologosController.cadastrarPsicologo);
routes.put("/psicologos/:id", psicologosController.updatePsicologo);
routes.delete("/psicologos/:id", psicologosController.deletarPsicologo);

// rotas "pacientes"

routes.post(
  "/pacientes",
  pacienteCreateValidation,
  pacientesController.cadastro
);

routes.get("/pacientes", pacientesController.listarPacientes);

routes.get("/pacientes/:id", pacientesController.pacientePorId);

routes.put(
  "/pacientes/:id",
  pacienteUpdateValidation,
  pacientesController.atualizarPaciente
);

routes.delete("/pacientes/:id", pacientesController.deletarPaciente);

module.exports = routes;
