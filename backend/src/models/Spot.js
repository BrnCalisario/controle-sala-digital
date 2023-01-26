import Sequelize from 'sequelize'
import database from '../database/connection.js'

const spot = database.define("Lugar", {
    Posicao: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    Ocupado: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
})

export default spot