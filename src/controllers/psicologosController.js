const { Psicologos } = require("../models");

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
  
};

module.exports = psicologosController;
