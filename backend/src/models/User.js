import Sequelize from 'sequelize'
import database  from '../database/connection.js'

const user = database.define("User", {
    EDV: {
        type: Sequelize.STRING(8),
        primaryKey: true,
    },
    Full_Name: {
        type: Sequelize.STRING(60),
        allowNull: false
    },
    Role: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    Shift: {
        type: Sequelize.STRING(10),
        allowNull: true
    },
    CPF: {
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true
    },
    Active: { 
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    }
})

export default user