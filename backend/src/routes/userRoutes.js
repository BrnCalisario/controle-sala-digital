import { Router } from "express";

import userController from "../controllers/userController.js";

const router = new Router();

router.get('/', userController.getAll)
router.post('/', userController.insert)

export default router