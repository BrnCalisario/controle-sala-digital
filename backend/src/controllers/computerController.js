import computer from '../models/Computer.js'
import spot from '../models/Spot.js'

class computerController {
    async getAll(req, res) {
        const pcs = await computer.findAll()
        res.json(pcs)
    }

    async create(req, res) {
        try {
            const pos = req.body.Posicao
            computer.create(req.body)
            spot.update(
                { Ocupado: true },
                { where: { Posicao: pos } }
            )
            return res.status(200).json(e)
        } catch (e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }

    async remove(req, res) {
        const pos = req.body.Posicao

        computer.destroy({
            where: { Nome: req.body.Nome }
        })

        spot.update(
            { Ocupado: false },
            { where: { Posicao: pos } }
        )
    }

    async getByPos(req, res) {
        const pc = await computer.findOne({
            where: { Posicao: req.body.pos }
        })

        if(pc === null)
        {
            res.sendStatus(400)
            return
        }
        
        res.json(pc)
    }
}

export default new computerController()