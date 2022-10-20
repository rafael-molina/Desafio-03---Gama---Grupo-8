const { Pacientes }  = require("../models");


const pacientesController = {
    async cadastro(req, res) {
        try {
            const { nome, email, idade } = req.body;  
            const newPaciente = await Pacientes.create({  
                nome,
                email,
                idade
            });

            return res.status(201).json(newPaciente);

        } catch (error) {
            console.log(error);
            
        }
    },

    async listarPacientes(req, res) {
        try {
            const listaDePacientes = await Pacientes.findAll();
            res.json(listaDePacientes);
            
        } catch (error) {
            console.log(error);
            
        }
    },

    async pacientePorId (req, res) {
        try {
            const {id} = req.params;
            
            const dadosPaciente = await Pacientes.findByPk(id);

            if(!dadosPaciente) return res.status(404).json("id não encontrado");
            
            res.json(dadosPaciente);
            
        } catch (error) {
            console.log(error);
            
        }
        
    },

    async atualizarPaciente(req, res) {
        try {
            const {id} = req.params;
            const {nome, email, idade} = req.body;

            const pacienteAtualizar = await Pacientes.update(
                {
                 nome,
                 email,
                 idade,
                }, 
                {
                 where:{
                   id,
                },
            });

            const dadosPaciente = await Pacientes.findByPk(id);

            if(!dadosPaciente) return res.status(404).json("id não encontrado");

            res.status(200).json(dadosPaciente);
            
        } catch (error) {
            console.log(error)
            
        }
        
    },

    async deletarPaciente(req, res) {
        try {
            const {id} = req.params;
            const pacienteDeletar = await Pacientes.destroy({
                where:{
                    id,
                },    
            });

            if(!pacienteDeletar) return res.status(404).json("id não encontrado");

            res.status(204).json(); 
            
        } catch (error) {
            return res.status(500).json("ocorreu algum problema") 
            
        }
        

    },
}

module.exports = pacientesController;