const Sequelize = require("sequelize")
const database = require("../config/db")

const tipoRelatorio = database.define("tipoRelatorio", {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },  
    Tipo: {
        type: Sequelize.STRING(30),
        allowNull: false,
    }
})


module.exports = tipoRelatorio