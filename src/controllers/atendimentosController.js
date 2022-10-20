
const { pacientes, atendimentos, psicologos} = require('../models/')
/* const atendimentos = require('../models/atendimentos');
 */
const bcrypt = require("bcryptjs");

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
            const { psicologos_id } = req.params;
            const atendimento = await atendimentos.findOne({
                where: {
                    psicologos_id,
                },
            })

            if (!atendimento) {
                return res.status(400).json("Id não encontrado!");
              }
              
            return req.status().json(atendimento)

        } 
        catch (error) {
            console.error(error);
        }
    },

    // POST /atendimentos
    async pacienteAtendimento(req, res) {
        try{
            const { data_atendimento, observacao,  pacientes_id } = req.body;

            const novoAtendimento = await atendimentos.create({
                data_atendimento,
                observacao,
                pacientes_id,
            });

            res.status(201).json(novoAtendimento);

        } catch (error) {
            return res.status(400).json("Ocorreu algum problema")
        }
    },




}

module.exports = atendimentosController;