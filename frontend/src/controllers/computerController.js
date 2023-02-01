import { response } from 'express'
import axios from '../config/axios.js'

class computerController {
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

    async getComputerDevice(req, res) {
        await axios.get('/computer/fullStats/' + req.params.pos)
            .then(response => {
                res.render('../views/addComponente', { computador: response.data.pc, edit: false, values: null })
            })
            .catch(error => {
                res.redirect('/erro')
            })
    }

    async createDevice(req, res) {
        await axios.post('/device/', req.body)
            .then(response => {
                res.redirect(req.originalUrl)
            })
            .catch(error => {
                res.redirect('/erro')
            })
    }

    async getDeviceEditor(req, res) {
        await axios.get('/computer/fullStats/' + req.params.pos)
            .then(response => {
                console.log(req.body)
                res.render('../views/addComponente', { computador: response.data.pc, edit: true, values: req.body })
            })
            .catch(error => {
                res.redirect('/erro')
            })
    }
    
    async updateDevice(req, res) {
        console.log(req.body)
        await axios.put('/device/', req.body)
            .then(response => {
                res.redirect('/adm/computador/' + req.params.pos)
            })
            .catch(error => {
                console.log('erro')
                res.redirect('/erro')
            })
    }

    async deleteDevice(req, res) {
        await axios.delete('/device/', { ID: req.body.ID})
            .then(response => {
                res.redirect('/adm/computador/' + req.params.pos )
            })
            .catch(error => {
                res.redirect('/erro')
            })
    }
}


export default new computerController()