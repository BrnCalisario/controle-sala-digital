import Sequelize from 'sequelize'
import database  from '../database/connection.js'

const logType = database.define("tipoRelatorio", {
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


export default logType