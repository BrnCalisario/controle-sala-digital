import Sequelize from 'sequelize'
import database  from '../database/connection.js'
import spot from "./Spot.js"

const computer = database.define("Computer", {
    Name: {
        type: Sequelize.STRING(12),
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
})

spot.hasOne(computer, {foreignKey: {name: 'Posicao'}})

export default computer