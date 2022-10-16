const db = require("../database")

const { dataTypes } = require("sequelize")

const atendimentos = db.define(
    "atendimentos",
    {
        data_atendimento:{
            type: dataTypes.DATE,
        },
        observacao:{
            type: dataTypes.TEXT,
        },
        createdAt: {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        },
        pacientes_id: {
            type: dataTypes.INTEGER,
        },
    },
    {
        tableName:"atendimentos"
    }
);

module.exports = atendimentos