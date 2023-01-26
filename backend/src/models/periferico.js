import Sequelize from 'sequelize'
import { connection as database } from '../database/connection'
import computador from './computador'

const periferico = database.define("Periferico", {
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

computador.hasMany(periferico, {foreignKey: {name: 'Computador'}})

export default periferico