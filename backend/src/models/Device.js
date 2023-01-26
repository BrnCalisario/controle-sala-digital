import Sequelize from 'sequelize'
import database  from '../database/connection.js'
import computer from './Computer.js'

const device = database.define("Periferico", {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nome: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    Marca: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    Descricao: {
        type: Sequelize.STRING(200),
        allowNull: true
    }
})

computer.hasMany(device, {foreignKey: {name: 'Computador'}})

export default device