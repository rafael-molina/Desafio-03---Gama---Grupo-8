const express = require("express");

const pacientesController = require("../controllers/pacientesController");
const psicologosController = require("../controllers/psicologosController");
const dashboardController = require("../controllers/dashboardController");
const atendimentosController = require("../controllers/atendimentosController");
const psicologosCreateValidation = require("../validations/psicologos/create");
const psicologosUpdateValidation = require("../validations/psicologos/update");
const psicologosDeleteValidation = require("../validations/psicologos/delete");
const psicologosGetOneValidation = require("../validations/psicologos/getOne");
const authController = require("../controllers/authController")
const authLoginValidation = require("../validations/auth/login")
const pacientesCreateValidation = require("../validations/pacientes/create");
const pacientesUpdateValidation = require("../validations/pacientes/update");
const pacientesDeleteValidation = require("../validations/pacientes/delete");
const pacientesGetOneValidation = require("../validations/pacientes/getOne");
const atendimentosCreateValidation = require("../validations/atendimentos/create");
const atendimentosGetOneValidation = require("../validations/atendimentos/getOne")

const routes = express.Router();

// rotas de Atendimentos
routes.get("/atendimentos",atendimentosController.listarAtendimentos);
routes.get("/atendimentos/:id", atendimentosGetOneValidation, atendimentosController.infoAtendimento);
routes.post("/atendimentos", atendimentosCreateValidation, atendimentosController.pacienteAtendimento);


// rotas "psicologos"

routes.get("/psicologos", psicologosController.listarPsicologos);
routes.get(
  "/psicologos/:id",
  psicologosGetOneValidation,
  psicologosController.getPsicologoId
);
routes.post(
  "/psicologos",
  psicologosCreateValidation,
  psicologosController.cadastrarPsicologo
);
routes.put(
  "/psicologos/:id",
  psicologosUpdateValidation,
  psicologosController.updatePsicologo
);
routes.delete(
  "/psicologos/:id",
  psicologosDeleteValidation,
  psicologosController.deletarPsicologo
);

// rotas "pacientes"

routes.post(
  "/pacientes",
  pacientesCreateValidation,
  pacientesController.cadastro
);

routes.get("/pacientes", pacientesController.listarPacientes);

routes.get(
  "/pacientes/:id", 
  pacientesGetOneValidation,
  pacientesController.pacientePorId
);

routes.put(
  "/pacientes/:id",
  pacientesUpdateValidation,
  pacientesController.atualizarPaciente
);

routes.delete("/pacientes/:id",
  pacientesDeleteValidation,
  pacientesController.deletarPaciente
);


//dashboard
//número de pacientes
routes.get("/dashboard/numero-paciente", dashboardController.listarNumeroPacientes);
//número de atendimentos
routes.get("/dashboard/numero-atendimentos", dashboardController.listarNumeroAtendimentos);
//número de psicólogos
routes.get("/dashboard/numero-psicologos", dashboardController.listarNumeroPsicologos);
//média de atendimentos por psicólogos
routes.get("/dashboard/media-atendimentos-psicologos", dashboardController.mediaAtendimentosPsicologos);



//Rotas login
routes.post("/login", authLoginValidation, authController.login);




module.exports = routes;
