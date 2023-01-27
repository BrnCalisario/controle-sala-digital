import { Router } from "express";

import computerController from '../controllers/computerController.js'

const router = new Router()

router.get('/', computerController.getAll)
router.post('/', computerController.create)
router.get('/pos', computerController.getByPos)
router.get('/fullStats/:pos', computerController.getFullStats)

export default router