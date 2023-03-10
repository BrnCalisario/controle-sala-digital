import dotenv from 'dotenv'

dotenv.config()
import Sequelize from "sequelize"

const database = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
        dialect: 'mssql',
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
    }    
)

database.sync()

export default database;