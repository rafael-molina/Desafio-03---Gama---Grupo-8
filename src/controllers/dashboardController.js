const pacientes = require("../models/pacientes");
const atendimentos = require("../models/atendimentos");
const psicologos = require("../models/Psicologos");
const Psicologos = require("../models/Psicologos");

const dashboardController = {
  async listarNumeroPacientes(req, res) {
    try {
      const numeroPacientes = await pacientes.count();

      return res.status(200).json(numeroPacientes);
    } catch (error) {
      return res.status(500).json("Ocorreu algum problema");
    }
  },
  async listarNumeroAtendimentos(req, res) {
    try {
      const numeroAtendimentos = await atendimentos.count();

      return res.status(200).json(numeroAtendimentos);
    } catch (error) {
      return res.status(500).json("Ocorreu algum problema");
    }
  },
  async listarNumeroPsicologos(req, res) {
    try {
      const numeroPsicologos = await Psicologos.count();

      return res.status(200).json(numeroPsicologos);
    } catch (error) {
      return res.status(500).json("Ocorreu algum problema");
    }
  },
  async mediaAtendimentosPsicologos(req, res) {
    try {
      const mediaAtendimentos = await Psicologos.avg();
  

      return res.status(200).json(mediaAtendimentos);
    } catch (error) {
      return res.status(500).json("Ocorreu algum problema");
    }
  },
};

module.exports = dashboardController;
