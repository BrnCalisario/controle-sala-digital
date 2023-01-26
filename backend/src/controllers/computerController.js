import computer from '../models/Computer.js'
import spot from '../models/Spot.js'
import device from '../models/Device.js'

class computerController {
    async getAll(req, res) {
        const pcs = await computer.findAll()
        res.json(pcs)
    }

    async create(req, res) {
        try {
            const pos = req.body.Position
            computer.create(req.body)
            spot.update(
                { Reserved: true },
                { where: { Position: pos } }
            )
            return res.sendStatus(200)
        } catch (e) {
            return res.sendStatus(400)
        }
    }

    async remove(req, res) {
        const pos = req.body.Position

        computer.destroy({
            where: { Name: req.body.Name }
        })

        spot.update(
            { Reserved: false },
            { where: { Position: pos } }
        )
    }

    async getByPos(req, res) {
        const pc = await computer.findOne({
            where: { Position: req.body.pos }
        })

        if (pc === null)
            return res.sendStatus(404)

        res.json(pc)
    }

    async getAllDevices(req, res) {
        const pc = await computer.findOne({
            where: { Position: req.body.pos }
        })

        if (pc === null)
            return res.sendStatus(404)

        const queryDevices = await device.findAll({
            where: { Computer: pc.Name }
        })

        const result = { computer: pc, devices: queryDevices }
        res.json(result)
    }
}

export default new computerController()