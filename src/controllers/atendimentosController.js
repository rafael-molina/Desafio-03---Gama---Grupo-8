const {  atendimentos } = require("../models");

const atendimentosController = {
  // GET /atendimentos
  async listarAtendimentos(req, res) {
    try {
      const listaDeAtendimento = await atendimentos.findAll();
      res.json(listaDeAtendimento);

      return res.status(200).json(listaDeAtendimento);
    } catch (error) {
      console.error(error);
    }
  },

  // GET /atendimentos/:id
  async infoAtendimento(req, res) {
    try {
      const { id } = req.params;
      const atendimento = await atendimentos.findOne({
        where: {
          id,
        },
      });

      if (!atendimento) {
        return res.status(400).json("Id não encontrado!");
      }

      res.status(200).json(atendimento);
    } catch (error) {
      console.error(error);
    }
  },

  // POST /atendimentos
  async pacienteAtendimento(req, res) {
    try {
      const { pacientes_id, data_atendimento, observacao } = req.body;

      const novoAtendimento = await atendimentos.create({
        pacientes_id,
        data_atendimento,
        observacao,
      });

      res.status(201).json(novoAtendimento);
    } catch (error) {
      return res.status(400).json("Ocorreu algum problema");
    }
  },
};

module.exports = atendimentosController;
