const { Psicologos } = require("../models");

const psicologosController = {
  //testado-ok
  async listarPsicologos(req, res) {
    try {
      const listaDePsicologos = await Psicologos.findAll({});

      res.status(200).json(listaDePsicologos);
    } catch (error) {}
  },
  //testado - ok
  async getPsicologoId(req, res) {
    try {
      const { id } = req.params;
      const psicologo = await Psicologos.findOne({
        attributes: ["nome", "email", "apresentacao"],
        where: {
          id,
        },
      });
      if (!psicologo) {
        return res.status(404).json("id não encontrado");
      }
      res.status(200).json(psicologo);
    } catch (error) {
      return res.status(500).json("Ocorreu algum problema");
    }
  },
  //testado - ok
  async cadastrarPsicologo(req, res) {
    try {
      const { nome, email, senha, apresentacao } = req.body;

      if (!nome || !email || !senha || !apresentacao) {
        return res.status(400).json("Você deve informar todos os parametros");
      }

      const novoPsicologo = await Psicologos.create({
        nome,
        email,
        senha,
        apresentacao,
      });

      res.status(201).json(novoPsicologo);
    } catch (error) {
      return res.status(500).json("Ocorreu algum problema");
    }
  },
  //testado-ok
  async updatePsicologo(req, res) {
    try {
      const { id } = req.params;
      const { nome, email, senha, apresentacao } = req.body;

      if (!nome || !email || !senha || !apresentacao) {
        return res.status(400).json("Você deve informar todos os parametros");
      }

      const psicologoAtualizado = await Psicologos.update(
        {
          nome,
          email,
          senha,
          apresentacao,
        },
        {
          where: {
            id,
          },
        }
      );
      const psicologo = await Psicologos.findByPk(id);

      res.status(200).json(psicologo);
    } catch (error) {
      return res.status(500).json("Ocorreu algum problema");
    }
  },
  //testado - ok
  async deletarPsicologo(req, res) {
    const { id } = req.params;

    const deletePsicologo = await Psicologos.destroy({
      where: {
        id,
      },
    });
    if (deletePsicologo === 0) {
      return res.status(404).json("id não encontrado");
    }
    res.sendStatus(204);
  },
};

module.exports = psicologosController;
