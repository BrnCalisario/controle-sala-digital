import { response } from 'express'
import axios from '../config/axios.js'
import formatCPF from '../config/formatCPF.js'

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
                return res.render('../views/admUsuarios', {
                    usuarios: response.data,
                    edit: false,
                    values: { Shift: '' }
                })
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

    async getUserEditor(req, res) {
        await axios.get('/user')
            .then(response => {

                console.log(req.body)
                const splited = req.body.Name.split(' ')
                const firstName = splited[0]
                splited.shift()
                const lastName = splited.join(' ')

                const userInfo = {
                    Name: firstName,
                    Name2: lastName,
                    EDV: req.body.EDV,
                    CPF: formatCPF(req.body.CPF),
                    Role: req.body.Role,
                    Shift: req.body.Shift
                }
                console.log(userInfo)

                return res.render('../views/admUsuarios', {
                    usuarios: response.data,
                    edit: true,
                    values: userInfo
                })
            })
            .catch(error => {
                console.log(error)
                res.redirect('/error')
            })
    }

    async updateUser(req, res) {
        const data = req.body

        const aluno = {
            EDV: data.EDV,
            Full_Name: data.Name + " " + data.Name2,
            Role: data.Role,
            Shift: data.Shift,
            CPF: data.CPF.replaceAll('.', '').replace('-', ''),
        }

        await axios.put('/user/', aluno)
            .then(response => {
                return res.redirect('/adm/usuarios')
            })
            .catch(error => {
                res.redirect('/erro')
            })
    }

    async deleteUser(req, res) {
        await axios.delete('/user/' + req.params)
            .then(response => {
                return res.redirect('/adm/usuarios')
            })
            .catch(error => {
                res.redirect('/erro')
            })
    }
}

export default new adminController()