const { Psicologos } = require("../models");
const { nome, email, senha, apresentacao } = require("../models/Psicologos");

const psicologosController = {
  listarPsicologos: async (req, res) => {
    try {
      const listaDePsicologos = await Psicologos.findAll({});

      res.status(200).json(listaDePsicologos);
    } catch (error) {
      console.log(error);
    }
  },
  async getPsicologoId(req, res) {
    try {
      const { id } = req.params;
      const psicologo = await Psicologos.findOne({
        where: {
          psicologos_id: id,
        },
      });
      res.status(200).json(psicologo);
    } catch (error) {
      return res.status(404).json("id não encontrado");
    }
  },
  //falta finalizar
  async postPsicologo(req, res) {
    try {
      const { nome, email, senha, apresentacao } = req.body;
    } catch (error) {}
  },
  async updatePsicologo(req, res) {
    const { id } = req.params;
    const { nome, email, senha, apresentacao } = req.body;

    if (!id) return res.status(400).json("id não enviado");
    if (!nome) {
      return res.status(400).json("Você deve enviar o parametro nome");
    }
    if (!email) {
      return res.status(400).json("Você deve enviar o email");
    }
    if (!senha) {
      return res.status(400).json("Você deve enviar a senha");
    }
    if (!apresentacao) {
      return res.status(400).json("Você deve enviar o texto de apresentacao");
    }
    const psicologoAtualizado = await Psicologos.update(
      {
        nome,
        email,
        senha,
        apresentação,
      },
      {
        where: {
          psicologos_id: id,
        },
      }
    );

    res.status(200).json(psicologoAtualizado);
  },
  async deletarPsicologo(req, res) {
    const { id } = req.params;

    if (!id) return res.status(400).json("id não encontrado");

    await Psicologos.destroy({
      where: {
        psicologos_id: id,
      },
    });
    res.sendStatus(204);
  },
};

module.exports = psicologosController;
