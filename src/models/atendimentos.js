const db = require("../database");

const { DataTypes } = require("sequelize");
const Psicologos = require("./Psicologos");
const pacientes = require("./pacientes");

const atendimentos = db.define(
  "atendimentos",
  {
    data_atendimento: {
      type: DataTypes.DATE,
    },
    observacao: {
      type: DataTypes.TEXT,
    },
    pacientes_id: {
      type: DataTypes.INTEGER,
      references: {
        model: pacientes,
        key: "id",
      },
    },
    psicologos_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Psicologos,
        key: "id",
      },
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "atendimentos",
  }
);

module.exports = atendimentos;
