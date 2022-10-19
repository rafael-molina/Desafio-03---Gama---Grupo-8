const Psicologos = require("../models/Psicologos");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../configs/secret");

const AuthController = {
    async login(req, res) {
        try {
            const {
                email, senha
            } = req.body;
            const psicologo = await Psicologos.findOne({
                where: {
                    email
                }
            });
            if (!psicologo) {
                return res.status(401).json("Email ou senha inválido, verifique e tente novamente");
            }
            if (!bcrypt.compareSync(senha, psicologo.senha)) {

                return res.status(401).json("Email ou senha inválido, verifique e tente novamente");

                const token = jwt.sign({
                    id: psicologo.id,
                    email: psicologo.email,
                    nome: psicologo.nome,
                }, secret.key)
                return res.json(token)

            }
        } catch (error) {
            console.log(error)
        }
    }
};

module.exports = AuthController;

//Preciso instalar o bcryptjs
//preciso importarjsonwebtoken


