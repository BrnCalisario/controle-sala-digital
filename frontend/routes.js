import express from 'express'
import { Router } from 'express'

import homeController from './src/controllers/homeController.js'
import adminController from './src/controllers/adminController.js'
import computerController from './src/controllers/computerController.js'
import deviceController from './src/controllers/deviceController.js'

const router = new Router()

// HOME
router.get('/', homeController.getHome)


// TELA DE RELATÓRIO
router.get('/relatorio/:pos', homeController.getLog)
router.post('/relatorio/:pos/filter', homeController.filterLog)
router.post('/relatorio/:pos', homeController.insertLog)

// TELE DE LOGIN
router.get('/login', adminController.getLogin)
router.post('/login', adminController.authenticateLogin)


// TELA DE ADM
router.get('/adm', adminController.getHome)

// CADASTRO DE USUÁRIOS
router.get('/adm/usuarios', adminController.getUserCreate)
router.post('/adm/usuarios', adminController.insertUser)
router.post('/adm/editUsuario', adminController.getUserEditor)
router.post('/adm/editUsuario/edit', adminController.updateUser)
router.post('/adm/editUsuario/delete/:edv', adminController.deleteUser)

// CADASTRO DE COMPUTADORES
router.get('/adm/computador/cadastrar/:pos', computerController.getComputerCreate)
router.post('/adm/computador/cadastrar/:pos', computerController.insertComputer)

router.get('/adm/computador/editar', computerController.getComputersEditor)
router.post('/adm/computador/editar/:pos', computerController.getComputerEditor)

router.post('/adm/computador/editar/:pos/edit', computerController.updateComputer)
router.post('/adm/removeComputer/:pos', computerController.deleteComputer)

// CADASTRO DE COMPONENTES
router.get('/adm/computador/:pos', computerController.getComputerDevice)
router.post('/adm/computador/:pos', deviceController.createDevice)

router.post('/adm/editDevice/:pos/', deviceController.getDeviceEditor)
router.post('/adm/editDevice/:pos/edit', deviceController.updateDevice)
router.post('/adm/removeDevice/:pos/', deviceController.deleteDevice)

router.get('/adm/relatorio/:pos', homeController.getADMLog)
router.post('/adm/relatorio/:pos/filter', homeController.filterADMLog)
router.post('/adm/relatorio/resolver/:pos', homeController.resolveLog)

router.get('/*', (req, res) => {
    res.render('notFound')
})

export default router;