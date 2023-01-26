import Sequelize from 'sequelize'
import { connection as database } from '../database/connection'

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

export default adm