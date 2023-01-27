import admin from '../models/Admin.js'

class adminController {
    async create(req, res) {
        await admin.create(req.body)
            .then(() => { res.sendStatus(200) })
            .catch(error => { res.sendStatus(400) })
    }

    async authenticateLogin(req, res) {
        const data = req.body

        const account = await admin.findOne({ where: {  Login: data.Login } })
        
        if (account == null || account.Password != data.Password)
            return res.sendStatus(400)

        return res.sendStatus(200)
    }
}

export default new adminController()