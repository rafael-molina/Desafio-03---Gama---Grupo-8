const Atendimentos = require("./atendimentos");
const Psicologos = require("./Psicologos");
const Pacientes = require("./Pacientes");

Atendimentos.belongsTo(Pacientes, {
  foreignKey: "pacientes_id",
});

Pacientes.hasMany(Atendimentos, {
  foreignKey: "pacientes_id",
});

Atendimentos.belongsTo(Psicologos, {
  foreignKey: "psicologos_id",
});

Psicologos.hasMany(Atendimentos, {
  foreignKey: "psicologos_id",
});

module.exports = {
  Atendimentos,
  Psicologos,
  Pacientes,
};
