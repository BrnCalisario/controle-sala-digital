import { Router } from "express";
import logController from '../controllers/logController.js'

const router = new Router()

router.get('/', logController.getAll)
router.post('/', logController.create)
router.post('/:id', logController.resolveLog)

export default router

