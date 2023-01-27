import computer from '../models/Computer.js'
import spot from '../models/Spot.js'
import device from '../models/Device.js'
import log from '../models/Log.js'


class computerController {
    async getAll(req, res) {
        const pcs = await computer.findAll()
        res.json(pcs)
    }

    async create(req, res) {
        try {
            const pos = req.body.SpotPosition
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
        const pos = req.body.SpotPosition

        computer.destroy({
            where: { Name: req.body.Name }
        })

        spot.update(
            { Reserved: false },
            { where: { SpotPosition: pos } }
        )
    }

    async getByPos(req, res) {
        const pc = await computer.findOne({
            where: { SpotPosition: req.body.pos }
        })

        if (pc === null)
            return res.sendStatus(404)

        res.json(pc)
    }

    async getFullStats(req, res) {
        const pc = await computer.findOne({
            where: { SpotPosition: req.params.pos }
        })

        if (pc === null)
            return res.sendStatus(404)

        var queryDevices = await device.findAll({
            where: { Computer: pc.Name }
        })

        for (var d of queryDevices) {
            const queryLogs = await log.findAll({
                where: { Device: d.ID }
            })
            d.dataValues.Logs = queryLogs
        }

        const result = { computer: pc, devices: queryDevices }
        res.json(result)
    }
}

export default new computerController()