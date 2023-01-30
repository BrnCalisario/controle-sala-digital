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

router.get('/adm/computador/cadastrar/:pos', adminController.getComputerCreate)
router.post('/adm/computador/cadastrar/:pos', adminController.insertComputer)

router.get('/adm/usuarios', adminController.getUserCreate)
router.post('/adm/usuarios', adminController.insertUser)

router.get('/*', (req, res) => {
    res.render('notFound')
})

export default router;