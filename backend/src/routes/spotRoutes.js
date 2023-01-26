import { Router } from "express";

import spotController from '../controllers/spotController.js'

const router = new Router()

router.get('/', spotController.getAll)
router.get('/init', spotController.initializeRoom)

export default router