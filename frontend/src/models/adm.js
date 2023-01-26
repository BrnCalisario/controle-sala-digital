const Sequelize = require("sequelize")
const database = require("../config/db")

const adm = database.define("adm", {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },  
    Login: {
        type: Sequelize.STRING(25),
        allowNull: false,
    },
    Senha: {
        type: Sequelize.STRING(25),
        allowNull: false
    }
})

module.exports = adm