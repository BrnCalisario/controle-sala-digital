import Sequelize from 'sequelize'
import { connection as database } from '../database/connection'

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


export default tipoRelatorio