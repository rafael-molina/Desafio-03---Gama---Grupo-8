const atendimentos = require("./atendimentos");
const Psicologos = require("./Psicologos");
const Pacientes = require("./Pacientes");

atendimentos.belongsTo(Pacientes, {
  foreignKey: "pacientes_id",
});

Pacientes.hasMany(atendimentos, {
  foreignKey: "pacientes_id",
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
