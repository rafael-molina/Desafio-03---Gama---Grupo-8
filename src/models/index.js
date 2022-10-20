const atendimentos = require("./atendimentos");
const Psicologos = require("./Psicologos");
const Pacientes = require("./pacientes");

// esboço index models/ relacionamentos

atendimentos.belongsTo(Pacientes, {
  foreignKey: "paciente_id",
});

Pacientes.hasMany(atendimentos, {
  foreignKey: "paciente_id",
});

atendimentos.belongsTo(Psicologos, {
  foreignKey: "psicologos_id",
});

Psicologos.hasMany(atendimentos, {
  foreignKey: "psicologos_id",
});

module.exports = {
  atendimentos,
  Psicologos,
  Pacientes,
};
