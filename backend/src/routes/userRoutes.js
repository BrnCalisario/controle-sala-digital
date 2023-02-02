import { Router } from "express";

import userController from "../controllers/userController.js";

const router = new Router();

router.get('/', userController.getAll)
router.post('/', userController.create)
router.put('/', userController.update)
router.delete('/:edv', userController.delete)

export default router