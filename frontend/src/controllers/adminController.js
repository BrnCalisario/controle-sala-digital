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
    }

    async getUserCreate(req, res) {
        await axios.get('/user')
            .then(response => {
                console.log(response.data)
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
            return res.redirect('/adm')
        })
        .catch(error => {
            res.redirect('/error')
        })

    }

    async getComputerCreate(req, res) {
        const pos = req.params.pos

        await axios.get('/computer')
            .then(response => {
                const spotList = response.data.map(pc => pc.SpotPosition)
                if (spotList.filter(s => s == pos).length > 0) {
                    throw new Error("Lugar já está sendo ocupado")
                }

                const pcList = response.data.sort(pc => pc.createdAt)

                res.render('../views/admComputadores', { computadores: response.data, posicaoSelecionada: pos })
            })
            .catch(error => {
                res.redirect("/error")
            })
    }

    async insertComputer(req, res) {
        const data = req.body

        await axios.post('/computer', {
            Name: data.Name,
            SpotPosition: req.params.pos
        })
            .then(response => {
                axios.post('/device', {
                    Name: "Este Computador",
                    Brand: data.Brand,
                    Description: data.Model,
                    Computer: data.Name
                })
                return res.redirect('/adm')
            })
            .catch(error => {
                res.redirect('/error')
            })
    }

    async insertLog(req, res) {
        const position = req.params.pos

        
    }
}

export default new adminController()