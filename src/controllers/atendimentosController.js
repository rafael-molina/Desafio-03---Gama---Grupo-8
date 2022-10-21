const { Atendimentos, Pacientes } = require("../models");
const jwtDecode = require("jwt-decode");

const atendimentosController = {
  // GET /atendimentos
  async listarAtendimentos(req, res) {
    try {
      const listaDeAtendimento = await Atendimentos.findAll();
      res.json(listaDeAtendimento);

      return res.status(200).json(listaDeAtendimento);

    } catch (error) {
      return res.status(500).json("Ocorreu algum problema, contate o suporte");
    }
  },

  // GET /atendimentos/:id
  async infoAtendimento(req, res) {
    try {
      const { id } = req.params;
      const atendimento = await Atendimentos.findOne({
        where: {
          id,
        },
      });

      if (!atendimento) {
        return res.status(400).json("Id não encontrado!");
      }

      res.status(200).json(atendimento);

    } catch (error) {
      return res.status(500).json("Ocorreu algum problema, contate o suporte");
    }
  },

  // POST /atendimentos
  async pacienteAtendimento(req, res) {
    try {
      const { pacientes_id, data_atendimento, observacao } = req.body;

      const token = req.headers["authorization"]
      const decodedId = jwtDecode(token).id;
      const dadosPaciente = await Pacientes.findByPk(pacientes_id);

      if (!dadosPaciente) return res.status(404).json("Id não encontrado");

      const novoAtendimento = await Atendimentos.create({
        psicologos_id: decodedId,
        pacientes_id,
        data_atendimento,
        observacao,
      });

      res.status(201).json(novoAtendimento);
      
    } catch (error) {
      return res.status(500).json("Ocorreu algum problema, contate o suporte");
    }
  },
};

module.exports = atendimentosController;
