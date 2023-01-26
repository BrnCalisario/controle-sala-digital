import device from '../models/Device.js'
import computer from '../models/Computer.js'

class DeviceController {
    async getAll(req, res) {
        const devices = await device.findAll()
        res.json(devices)
    }

    async create(req, res) {
        try {
            const fk = req.body.Computador
            const pc = await computer.findOne({
                where: { Nome: fk}
            })
            
            if (pc === null)
                throw new Error("Computador não existe")
            
            device.create(req.body)
            res.sendStatus(200)
        } catch (e) {
            res.sendStatus(400)
        }
    }

    async getByPC(req, res) {
        const query = await device.findAll({
            where: { Computador: req.params.pc },
            raw: true
        })

        res.json(query)
    }
}

export default new DeviceController()