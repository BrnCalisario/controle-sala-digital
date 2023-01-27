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


    async getRelatorio(req, res) {
        await axios.get('/computer/fullStats/' + req.params.pos)
            .then(response => {
                console.log(response.data)
                return res.render('../views/relatorio', { computador: response.data })
            })
            .catch(error => {
                res.render('../views/notFound')
            })
    }
}

export default new HomeController()