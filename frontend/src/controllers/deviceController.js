import { response } from 'express'
import axios from '../config/axios.js'

class deviceController {
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
                res.render('../views/addComponente', { computador: response.data.pc, edit: true, values: req.body })
            })
            .catch(error => {
                res.redirect('/erro')
            })
    }
    
    async updateDevice(req, res) {
        await axios.put('/device/', req.body)
            .then(response => {
                res.redirect('/adm/computador/' + req.params.pos)
            })
            .catch(error => {
                res.redirect('/erro')
            })
    }
    
    async deleteDevice(req, res) {
        
        await axios.delete('/device/' + req.body.ID)
            .then(response => {
                res.redirect('/adm/computador/' + req.params.pos )
            })
            .catch(error => {
                res.redirect('/erro')
            })
    }
}

export default new deviceController()