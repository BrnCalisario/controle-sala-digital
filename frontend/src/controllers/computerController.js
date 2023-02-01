import { response } from 'express'
import axios from '../config/axios.js'

class computerController {
    async getComputerCreate(req, res) {
        const pos = req.params.pos
        await axios.get('/computer')
            .then(response => {
                const spotList = response.data.map(pc => pc.SpotPosition)
                
                if (spotList.filter(s => s == pos).length > 0)
                    throw new Error("Lugar já está sendo ocupado")

                const pcList = response.data.sort(pc => pc.SpotPosition)

                res.render('../views/admComputadores', {
                    computadores: response.data,
                    posicaoSelecionada: pos,
                    edit: false,
                    values: null
                })
            })
            .catch(error => {
                res.redirect("/erro")
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
                    Computer: data.Name,
                    isMainDevice: true,
                })
                return res.redirect('/adm')
            })
            .catch(error => {
                res.redirect('/erro')
            })
    }

    async getComputerDevice(req, res) {
        await axios.get('/computer/fullStats/' + req.params.pos)
            .then(response => {
                res.render('../views/addComponente', {
                    computador: response.data.pc,
                    edit: false,
                    values: null
                })
            })
            .catch(error => {
                res.redirect('/erro')
            })
    }

    async getComputerEditor(req, res) {
        const pos = req.params.pos
        await axios.get('/computer')
            .then(async response => {
                
                const selectedPc = await axios.get('/computer/' + req.params.pos)
                const pcList = response.data.sort(pc => pc.SpotPosition)

                res.render('../views/admComputadores', {
                    computadores: pcList,
                    posicaoSelecionada: pos,
                    edit: true,
                    values: { Name: selectedPc.data.Name, Brand: selectedPc.data.mainDevice.Brand ,Description: selectedPc.data.mainDevice.Description}
                })
            })
            .catch(error => {
                console.log(error)
                console.log(error.response)
                res.redirect("/adm")
            })
    }

    async updateComputer(req, res) {
        await axios.put('/computer/', req.body)
            .then(response => {
                res.redirect('/adm/computador/' + req.params.pos)
            })
            .catch(error => {
                console.log(error.response)
                res.redirect('/erro')
            })
    }

    async deleteComputer(req, res) {
        await axios.delete('/computer/' + req.params.pos)
            .then(response => {
                res.redirect('/adm')
            })
            .catch(error => {
                res.redirect('/erro')
            })
    }
}


export default new computerController()