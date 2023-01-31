import axios from '../config/axios.js'

class HomeController {

    async getHome(req, res) {

        await axios.get('/spot')
            .then(response => {
                const spotList = response.data.map(s => s.Reserved)
                return res.render('../views/home', { posicoes: spotList })
            })
            .catch(error => {
                const pos = []
                return res.render('../views/home', { posicoes: pos})
            })
    }


    async getLog(req, res) {
        await axios.get('/computer/fullStats/' + req.params.pos)
            .then(response => {
                
                console.log(response.data.pc)
                console.log(response.data.allLogs)
                return res.render('../views/relatorio', { computador: response.data.pc, logs: response.data.allLogs})
            })
            .catch(error => {
                res.render('../views/notFound')
            })
    }

    async insertLog(req, res) {
        var data = req.body

        data.CPF = data.CPF.replaceAll ('.', '').replace('-', '')

        console.log(data)
        if (!data.Type || !data.Device) 
            return res.redirect('/erro')
        
        await axios.post('/log', data)
            .then(response => {
                res.redirect(req.originalUrl)
            })
            .catch(error => {
                res.redirect('/erro')
            })

    }
}

export default new HomeController()