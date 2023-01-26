import express, { json, urlencoded } from 'express'

import userRoutes from './src/routes/userRoutes.js'

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
    }
}

export default new App().app