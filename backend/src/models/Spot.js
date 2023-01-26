import Sequelize from 'sequelize'
import database from '../database/connection.js'

const spot = database.define("Spot", {
    Position: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
    },
    Reserved: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
})

export default spot