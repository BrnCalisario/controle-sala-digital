const sequelize = require('sequelize')

const connection = new sequelize(
    'MAINTENANCE_LOG',
    'disrct_Bruno',
    'projetobosch123',
    {
        dialect: 'mssql',
        host: 'localhost',
        port: 1433
    }
)

connection.sync()

module.exports = connection;