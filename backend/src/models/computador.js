import Sequelize from 'sequelize'
import { connection as database } from '../database/connection'
import sala from "./sala"

const computador = database.define("Computador", {
    Nome: {
        type: Sequelize.STRING(12),
        primaryKey: true,
        allowNull: false,
    },
})

sala.hasOne(computador, {foreignKey: {name: 'Posicao'}})

export default computador