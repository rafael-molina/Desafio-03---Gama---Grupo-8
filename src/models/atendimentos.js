const db = require("../database")

const { DataTypes } = require("sequelize")

const atendimentos = db.define(
    "atendimentos",
    {
        data_atendimento:{
            type: DataTypes.DATE,
        },
        observacao:{
            type: DataTypes.TEXT,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
        pacientes_id: {
            type: DataTypes.INTEGER,
        },
    },
    {
        tableName:"atendimentos"
    }
);

module.exports = atendimentos