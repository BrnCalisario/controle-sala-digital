import Sequelize from 'sequelize'
import { connection as database } from '../database/connection'

import periferico from './periferico'
import tipoRelatorio from './tipoRelatorio'
import usuario from './usuario'

const relatorio = database.define("Relatorio", {
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

usuario.hasMany(relatorio, { foreignKey: { name: 'Usuario' } })
periferico.hasMany(relatorio, { foreignKey: { name: 'Periferico' } })
relatorio.belongsTo(tipoRelatorio, { foreignKey: { name: 'Tipo'}})

export default relatorio