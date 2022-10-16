const db = require("../database");
const { Datatypes } = require("sequelize");

const Psicologos = db.define(
  "psicologos",
  {
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: Datatypes.STRING,
    },
    email: {
      type: Datatypes.STRING,
    },
    senha: {
      type: Datatypes.STRING,
    },
    apresentacao: {
      type: Datatypes.TEXT,
    },
    createdAt: {
      type: DataTypes.TIMESTAMP,
    },
    updatedAt: {
      type: DataTypes.TIMESTAMP,
    },
  },
  {
    tableName: "psicologos",
  }
);

module.exports = Psicologos;
