import { Router } from "express";
import deviceController from '../controllers/deviceController.js'

const router = new Router()

router.post('/', deviceController.create)
router.put('/', deviceController.update)
router.get('/:id', deviceController.getByPC)
router.delete('/:id', deviceController.delete)
export default router

