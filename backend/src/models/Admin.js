import Sequelize from 'sequelize'
import database  from '../database/connection.js'

const admin = database.define("Admin", {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Login: {
        type: Sequelize.STRING(25),
        allowNull: false,
        unique: true,
    },
    Password: {
        type: Sequelize.STRING(25),
        allowNull: false
    }
})

export default admin