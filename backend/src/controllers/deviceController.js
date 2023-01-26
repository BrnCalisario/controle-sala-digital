import device from '../models/Device.js'
import computer from '../models/Computer.js'

class DeviceController {
    async getAll(req, res) {
        const devices = await device.findAll()
        res.json(devices)
    }

    async create(req, res) {
        try {
            const fk = req.body.Computer
            const pc = await computer.findOne({
                where: { Name: fk}
            })
            
            if (pc === null)
                throw new Error()
            
            device.create(req.body)
            return res.sendStatus(200)
        } catch (e) {
            return res.sendStatus(400)
        }
    }

    async getByPC(req, res) {
        const query = await device.findAll({
            where: { Computer: req.params.pc },
            raw: true
        })

        res.json(query)
    }
}

export default new DeviceController()