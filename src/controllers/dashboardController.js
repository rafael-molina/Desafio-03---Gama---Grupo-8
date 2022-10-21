const pacientes = require("../models/pacientes");
const atendimentos = require("../models/atendimentos");
const Psicologos = require("../models/Psicologos");

const dashboardController = {
  async listarNumeroPacientes(req, res) {
    try {
      const numeroPacientes = await pacientes.count();

      return res.status(200).json(numeroPacientes);
    } catch (error) {
      return res.status(500).json("Ocorreu algum erro, contate o suporte");
    }
  },
  async listarNumeroAtendimentos(req, res) {
    try {
      const numeroAtendimentos = await atendimentos.count();

      return res.status(200).json(numeroAtendimentos);
    } catch (error) {
      return res.status(500).json("Ocorreu algum erro, contate o suporte");
    }
  },
  async listarNumeroPsicologos(req, res) {
    try {
      const numeroPsicologos = await Psicologos.count();

      return res.status(200).json(numeroPsicologos);
    } catch (error) {
      return res.status(500).json("Ocorreu algum erro, contate o suporte");
    }
  },
  async mediaAtendimentosPsicologos(req, res) {
    try {
      const countPsicologos = await Psicologos.count({});

      const countAtendimentos = await atendimentos.count({});


      const mediaAtendimentos = countAtendimentos / countPsicologos;

      return res.status(200).json(mediaAtendimentos);
    } catch (error) {
      return res.status(500).json("Ocorreu algum erro, contate o suporte");
    }
  },
};

module.exports = dashboardController;
