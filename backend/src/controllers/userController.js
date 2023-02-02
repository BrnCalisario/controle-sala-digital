import user from '../models/User.js';

class UserController {
    async getAll(req, res) {
        const users = await user.findAll({ where: { Active: true } })
        res.json(users)
    }

    async create(req, res) {
        await user.create(req.body)
            .then(response => {
                return res.sendStatus(200)
            })
            .catch(error => {
                return res.sendStatus(400)
            })
    }

    async findByPk(req, res) {
        const pk = req.body.pk
        const query = await user.findByPk(pk)
    }

    async update(req, res) {
        await user.update(req.body, { where: { EDV: req.body.EDV } })
            .then(response => {
                return res.sendStatus(200)
            })
            .catch(error => {
                console.log(error)
                return res.sendStatus(400)
            })
    }

    async delete(req, res) {
        await user.update(
            { Active: false },
            { where: { EDV: req.params.edv } }
        ).then(response => {
            return res.sendStatus(200)
        })
        .catch(error => {
            return res.sendStatus(400)
        })
}


}

export default new UserController()