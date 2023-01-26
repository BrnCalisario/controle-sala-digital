import Sequelize from 'sequelize'
import { connection as database } from '../database/connection'

const sala = database.define("Sala", {
    Posicao: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    Ocupado: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
})

export default sala