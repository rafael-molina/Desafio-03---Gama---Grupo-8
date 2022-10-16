const { Pacientes }  = require("../models");

const bcrypt = require("bcryptjs"); // este modulo deve ser primeiro instalado(digite "npm i bcryptjs" no terminal), depois impotamos ele como esta feito nesta linha

const pacientesController = {
    async cadastro(req, res) {
        try {
            const { nome, email, idade } = req.body;  // aqui eu recebo todos os campos para cadastro do psicologo através do body
            const newPaciente = await Pacientes.create({  // aqui estamos de fato criando os dados na base de dados
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

            //if(!id) return res.status(400).json("id não enviado"); // aqui colocamos uma condição que diz: "se o id for undefined ou não for encontrado retorne o status 400, que significa bad request(não foi enviado)". Tambem é importante imprimir uma mensagem de erro através do json.
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

            res.status(200).json("paciente atualizado com sucesso!");
            
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

            res.status(204).json(); // o status 204 significa "no content" mostrando que o metodo foi executado e deu certo
            
        } catch (error) {
            return res.status(500).json("ocorreu algum problema") // é importante ter sempre a estrutura try/catch para funções assincronas para podermos devolver alguma resposta para o nosso usuario caso ocorra um erro. É comum para o catch colocarmos o erro status(500) que significa "internal server error"
            
        }
        

    },
}

module.exports = pacientesController;