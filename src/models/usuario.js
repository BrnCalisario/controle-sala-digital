const Sequelize = require("sequelize")
const database = require("../config/db")

const usuario = database.define("Usuario", {
    EDV: {
        type: Sequelize.STRING(8),
        primaryKey: true,
    },
    Nome_Completo: {
        type: Sequelize.STRING(60),
        allowNull: false
    },
    Cargo: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    Turno: {
        type: Sequelize.STRING(10),
        allowNull: true
    },
    CPF: {
        type: Sequelize.STRING(11),
        allowNull: false
    }
})

module.exports = usuario