import express from 'express'
import { Router } from 'express'

import homeController from './src/controllers/homeController.js'

const router = new Router()

router.get('/', homeController.getHome)
router.get('/relatorio/:pos', homeController.getRelatorio)


export default router;