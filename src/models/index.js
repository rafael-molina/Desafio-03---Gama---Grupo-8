const atendimentos = require("./atendimentos");
const Psicologos = require("./Psicologos");

// esboço index models/ relacionamentos

const Pacientes = require("./pacientes");



Pacientes.hasMany(Atendimentos,{    
    foreignKey:"paciente_id"
});



module.exports = {
    atendimentos,
    Psicologos,
    Pacientes,
};