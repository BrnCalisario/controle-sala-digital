import device from '../models/Device.js'
import log from '../models/Log.js'
import user from '../models/User.js'

class logController {
    async getAll(req, res) {
        const logs = await log.findAll()
        res.json(logs)
    }

    async create(req, res) {
        const userQuery = await user.findOne(
            { where: { EDV: req.body.EDV, CPF: req.body.CPF } }
        ).catch(error => { return res.sendStatus(400) })

        if (!userQuery)
            return res.sendStatus(400)

        if (!userQuery.Active) {
            return res.sendStatus(410)
        }

        const deviceQuery = await device.findOne(
            { where: { ID: req.body.Device } }
        ).catch(error => { return res.sendStatus(400) })

        if (!deviceQuery)
            return res.sendStatus(400)

        await log.create({
            Description: req.body.Description,
            Resolved: false,
            Type: req.body.Type,
            User: req.body.EDV,
            Device: req.body.Device,
        }).catch(error => {
            return res.sendStatus(400)
        })

        return res.sendStatus(200)
    }

    async resolveLog(req, res) {
        await log.update(
            { Resolved: true },
            { where: { ID: req.params.id } })
            .then(response => {
                return res.sendStatus(200)
            })
            .catch(error => {
                return res.sendStatus(400)
            })
    }
}

export default new logController()