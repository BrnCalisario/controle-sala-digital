import user from '../models/User.js';

class UserController {
    async getAll(req, res) {
        const users = await user.findAll()
        res.json(users)
    }  

    async insert(req, res) {
        try {
            user.create(req.body);
        } catch (e) {
            return res.status(400).json(e)
        }
    }

    async findByPk(req, res) {
        const pk = req.body.pk
        const query = await user.findByPk(pk)
    }
}

export default new UserController()