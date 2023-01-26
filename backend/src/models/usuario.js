import Sequelize from 'sequelize'
import connection  from '../database/connection.js'

const usuario = connection.define("Usuario", {
    EDV: {
        type: Sequelize.STRING(8),
        primaryKey: true,
    },
    Nome_Completo: {
        type: Sequelize.STRING(60),
        allowNull: false
    },
    Cargo: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    Turno: {
        type: Sequelize.STRING(10),
        allowNull: true
    },
    CPF: {
        type: Sequelize.STRING(11),
        allowNull: false
    }
})

export default usuario