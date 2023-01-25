const Sequelize = require("sequelize")
const database = require("../config/db")
const periferico = require("./periferico")
const tipoRelatorio = require("./tipoRelatorio")
const usuario = require("./usuario")

const relatorio = database.define("Relatorio", {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Descricao: {
        type: Sequelize.STRING(200),
        allowNull: false
    }
})

usuario.hasMany(relatorio, { foreignKey: { name: 'Usuario' } })
periferico.hasMany(relatorio, { foreignKey: { name: 'Periferico' } })
relatorio.belongsTo(tipoRelatorio, { foreignKey: { name: 'Tipo'}})

module.exports = relatorio