const atendimentos = require('../models/atendimentos');

const bcrypt = require("bcryptjs");

const atendimentosController = {

    async listarAtendimentos(req, res) {
        try {
            const listaDeAtendimento = await atendimentos.findAll();
            res.json(listaDeAtendimento);

            return res.status(200).json(listaDeAtendimento);
        } catch (error) {
            console.error(error);
        }
    },


}

module.exports = atendimentosController;