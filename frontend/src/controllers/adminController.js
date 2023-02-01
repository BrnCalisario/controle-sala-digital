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
    }

    async getUserCreate(req, res) {
        await axios.get('/user')
            .then(response => {

                return res.render('../views/admUsuarios', { usuarios: response.data })
            })
            .catch(error => {
                return res.redirect('/erro')
            })
    }

    async insertUser(req, res) {
        const data = req.body
        console.log(data)

        await axios.post('/user', {
            EDV: data.EDV,
            Full_Name: data.Name + " " + data.Name2,
            Role: data.Role,
            Shift: data.Shift,
            CPF: data.CPF.replaceAll('.', '').replace('-', '')
        }).then(response => {
            return res.redirect('/adm/usuarios')
        })
        .catch(error => {
            res.redirect('/error')
        })

    }
}

export default new adminController()