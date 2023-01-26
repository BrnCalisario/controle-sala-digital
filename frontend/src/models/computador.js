const Sequelize = require("sequelize")
const database = require("../config/db")
const sala = require("../models/sala")

const computador = database.define("Computador", {
    Nome: {
        type: Sequelize.STRING(12),
        primaryKey: true,
        allowNull: false,
    },
})

sala.hasOne(computador, {foreignKey: {name: 'Posicao'}})

// computador.belongsTo(sala, {
//     foreignKey: {
//         name: 'FK_Posicao',
//         allowNull: true
//     }
// })

module.exports = computador