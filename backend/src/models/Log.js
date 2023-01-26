import Sequelize from 'sequelize'
import database  from '../database/connection.js'

import device from './Device.js'
import logType from './LogType.js'
import user from './User.js'

const log = database.define("Relatorio", {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Descricao: {
        type: Sequelize.STRING(200),
        allowNull: false
    }
})

user.hasMany(log, { foreignKey: { name: 'Usuario' } })
device.hasMany(log, { foreignKey: { name: 'Periferico' } })
log.belongsTo(logType, { foreignKey: { name: 'Tipo'}})

export default log