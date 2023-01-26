import axios from '../config/axios.js'

class HomeController {

    async getHome(req, res) {
        const spots = await axios.get('/spot')
        const spotList = spots.data.map(s => s.Ocupado)

        res.render('../views/home', {posicoes: spotList})
    }
}

export default new HomeController()