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

    async update(req, res) {
        console.log(req.body)
        await device.update({
            Brand: req.body.Brand,
            Description: req.body.Description
        }, { where: { Computer: req.body.Name } })
            .then(response => {
                return res.sendStatus(200)
            }).catch(error => {
                console.log(error)
                return res.sendStatus(400)
            })
    }

    async delete(req, res) {
        const pos = req.params.pos

        await computer.destroy({
            where: { SpotPosition: pos }
        }).then(response => {
            device.destroy(({
                where: { Computer: null }
            }))

            spot.update(
                { Reserved: false },
                { where: { Position: pos } }
            )

            return res.sendStatus(200)
        })
            .catch(error => {
                console.log(error)
                return res.sendStatus(400)
            })
    }

    async getByPos(req, res) {
        const pc = await computer.findOne({
            where: { SpotPosition: req.params.pos }
        })

        const mainDevice = await device.findOne({
            where: { Computer: pc.Name, isMainDevice: true }
        })

        pc.dataValues.mainDevice = mainDevice.dataValues

        if (pc === null)
            return res.sendStatus(404)

        res.json(pc.dataValues)
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

        var allLogs = []
        for (var d of queryDevices) {
            const queryLogs = await log.findAll({
                where: { Device: d.ID }
            })

            var withDevice = queryLogs.map((log) => {
                log.Device = d.Name
                return log
            })

            allLogs.push.apply(allLogs, withDevice)

            d.dataValues.Logs = queryLogs
        }

        pc.dataValues.devices = queryDevices

        const result = { pc, allLogs }
        res.json(result)
    }


}

export default new computerController()