import { response } from 'express'
import axios from '../config/axios.js'

class adminController {
    async getLogin(req, res) {
        res.render('../views/admLogin')
    }

    async authenticateLogin(req, res) {
        await axios.post('/admin/login', {
            Login: req.body.Login,
            Password: req.body.Password
        })
        .then(() => {
            res.redirect('/adm')
        })
        .catch(error => {
            console.log(error.response.data)
            res.render('../views/notFound')
        })
    }

    async getHome(req, res) {
        await axios.get('/spot')
            .then(response => {
                const spotList = response.data.map(s => s.Reserved)
                return res.render('../views/admSala', { posicoes: spotList })
            })
            .catch(error => {
                return res.redirect("/erro")
            })

        // res.render('../views/admSala')
    }

    async getComputerCreate(req, res) {
        res.render('../views/admComputadores')
    }
}

export default new adminController()