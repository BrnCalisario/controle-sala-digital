import Sequelize from 'sequelize'
import database  from '../database/connection.js'
import spot from "./Spot.js"

const computer = database.define("Computador", {
    Nome: {
        type: Sequelize.STRING(12),
        primaryKey: true,
        allowNull: false,
    },
})

spot.hasOne(computer, {foreignKey: {name: 'Posicao'}})

export default computer