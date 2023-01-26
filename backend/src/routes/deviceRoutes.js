import { Router } from "express";
import deviceController from '../controllers/deviceController.js'

const router = new Router()

router.post('/', deviceController.create)

export default router

