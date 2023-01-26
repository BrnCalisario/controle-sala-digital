import user from '../models/usuario.js'

class UserController {
    async getAll(req, res) {
        const users = await user.findAll();
        res.json(users)
    }  

    async insert(req, res) {
        try {
            user.create(req.body);
        } catch (e) {
            return res.status(400).json(e);
        }
    }
}

export default new UserController()