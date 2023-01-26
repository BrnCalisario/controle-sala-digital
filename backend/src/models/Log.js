import Sequelize from 'sequelize'
import database  from '../database/connection.js'

import device from './Device.js'
import user from './User.js'

const log = database.define("Log", {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Description: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    Resolved: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    Type: {
        type: Sequelize.STRING(30),
        allowNull: false
    }
})

user.hasMany(log, { foreignKey: { name: 'Usuario' } })
device.hasMany(log, { foreignKey: { name: 'Periferico' } })

export default log