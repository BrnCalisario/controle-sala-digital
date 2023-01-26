import axios from '../config/axios.js'

class HomeController {

    async getHome(req, res) {
        const spots = await axios.get('/spot')
        const spotList = spots.data.map(s => s.Ocupado)

        res.render('../views/home', {posicoes: spotList})
    }

    async getRelatorio(req, res) {
        const position = req.params.pos

        await axios({
            method: 'get',
            url: "/computer/pos",
            data: {
                pos: position
            }
        }).then(result => {
            const pc = result.data
            res.render('../views/relatorio', {computador: pc})
        })
        .catch(error => {
            res.render('../views/notFound')
        })
    }
}

export default new HomeController()