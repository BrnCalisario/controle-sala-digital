import express from 'express'
import { Router } from 'express'

import homeController from './src/controllers/homeController.js'
import adminController from './src/controllers/adminController.js'

const router = new Router()


router.get('/', homeController.getHome)


router.get('/relatorio/:pos', homeController.getRelatorio)

router.get('/login', adminController.getLogin)
router.post('/login', adminController.authenticateLogin)

router.get('/adm', adminController.getHome)
router.get('/adm/computador/cadastrar', adminController.getComputerCreate)




router.get('/*', (req, res) => {
    res.render('notFound')
})

export default router;