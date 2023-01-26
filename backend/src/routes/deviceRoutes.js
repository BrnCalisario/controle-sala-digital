import { Router } from "express";
import deviceController from '../controllers/deviceController.js'

const router = new Router()

router.post('/', deviceController.create)
router.get('/:id', deviceController.getByPC)


export default router

