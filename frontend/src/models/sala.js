const Sequelize = require("sequelize")
const database = require("../config/db")

const sala = database.define("Sala", {
    Posicao: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    Ocupado: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
})

module.exports = sala