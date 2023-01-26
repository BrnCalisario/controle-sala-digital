import spot from '../models/Spot.js'

class SpotController {
    async getAll(req, res) {
        const spots = await spot.findAll()
        res.json(spots)
    }

    async initializeRoom(req, res) {
        for(var i = 1; i < 21; i++)  {
            spot.create({
                Posicao: i,
                Ocupado: false                
            })
        }
    }
}

export default new SpotController()