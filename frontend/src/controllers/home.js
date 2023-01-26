// const salas = require("../models/sala")
// const computador = require("../models/computador")
// const periferico = require("../models/periferico")
// const usuario = require("../models/usuario")
// const tipoRelatorio = require("../models/tipoRelatorio")
// const relatorio = require("../models/relatorio")
// const adm = require("../models/adm")



module.exports = {
    async getHome(req, res) {
        res.render('../views/home')
    }
}