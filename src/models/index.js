
// esboço index models/ relacionamentos

const Pacientes = require("./pacientes");



Pacientes.hasMany(Atendimentos,{    
    foreignKey:"paciente_id"
});



module.exports = {
    Pacientes    
};