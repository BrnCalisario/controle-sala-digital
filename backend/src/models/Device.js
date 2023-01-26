import Sequelize from 'sequelize'
import database  from '../database/connection.js'
import computer from './Computer.js'

const device = database.define("Device", {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Name: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    Brand: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    Description: {
        type: Sequelize.STRING(200),
        allowNull: true
    }
})

computer.hasMany(device, {foreignKey: {name: 'Computer'}})

export default device