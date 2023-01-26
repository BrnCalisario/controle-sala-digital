import express, { json, urlencoded } from 'express'

import userRoutes from './src/routes/userRoutes.js'
import spotRoutes from './src/routes/spotRoutes.js'
import computerRoutes from './src/routes/computerRoutes.js'
import deviceRoutes from './src/routes/deviceRoutes.js'

class App {
    constructor() {
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(json({ limit: '50mb' }))
        this.app.use(urlencoded({ extended: true }))
    }

    routes() {
        this.app.use('/user', userRoutes)
        this.app.use('/spot', spotRoutes)
        this.app.use('/computer', computerRoutes)
        this.app.use('/device', deviceRoutes)
    }
}

export default new App().app