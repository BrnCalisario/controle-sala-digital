import { Router } from 'express'

import admController from '../controllers/admController.js'

const router = new Router()

router.post("/newLogin", admController.create)
router.post("/login", admController.authenticateLogin)

export default router