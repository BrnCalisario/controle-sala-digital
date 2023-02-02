import axios from '../config/axios.js'

class HomeController {

    async getHome(req, res) {

        await axios.get('/spot')
            .then(response => {
                const spotList = response.data.map(s => s.Reserved)
                return res.render('../views/home', { posicoes: spotList })
            })
            .catch(error => {
                const pos = []
                return res.render('../views/home', { posicoes: pos })
            })
    }


    async getLog(req, res) {
        await axios.get('/computer/fullStats/' + req.params.pos)
            .then(response => {

                var myLogs = response.data.allLogs
                myLogs = myLogs.map((l) => {
                    var date = new Date(l.createdAt).toJSON().slice(0, 10).split('-')
                    l.createdAt = date[2] + "/" + date[1] + "/" + date[0]
                    return l
                })

                return res.render('../views/relatorio', { computador: response.data.pc, logs: response.data.allLogs, filter: 'Todos' })
            })
            .catch(error => {
                res.render('../views/notFound')
            })
    }

    async getADMLog(req, res) {
        await axios.get('/computer/fullStats/' + req.params.pos)
            .then(response => {

                var myLogs = response.data.allLogs
                myLogs = myLogs.map((l) => {
                    var date = new Date(l.createdAt).toJSON().slice(0, 10).split('-')
                    l.createdAt = date[2] + "/" + date[1] + "/" + date[0]
                    return l
                })

                return res.render('../views/admRelatorio', { computador: response.data.pc, logs: response.data.allLogs, filter: 'Todos' })
            })
            .catch(error => {
                res.render('../views/notFound')
            })
    }

    async filterADMLog(req, res) {
        const selectedFilter = req.body.filter
        await axios.get('/computer/fullStats/' + req.params.pos)
            .then(response => {

                var myLogs = response.data.allLogs

                myLogs = myLogs.map((l) => {
                    var date = new Date(l.createdAt).toJSON().slice(0, 10).split('-')
                    l.createdAt = date[2] + "/" + date[1] + "/" + date[0]
                    return l
                })

                switch (selectedFilter) {
                    case "Todos":
                        break
                    case "Pendentes":
                        myLogs = myLogs.filter(l => !l.Resolved)
                        break
                    case "Resolvidos":
                        myLogs = myLogs.filter(l => l.Resolved)
                }


                console.log(req.body.filter)
                return res.render('../views/admRelatorio', { computador: response.data.pc, logs: myLogs, filter: selectedFilter })
            })
            .catch(error => {
                console.log(error)
                res.render('../views/notFound')
            })
    }

    async filterLog(req, res) {
        const selectedFilter = req.body.filter
        await axios.get('/computer/fullStats/' + req.params.pos)
            .then(response => {

                var myLogs = response.data.allLogs

                myLogs = myLogs.map((l) => {
                    var date = new Date(l.createdAt).toJSON().slice(0, 10).split('-')
                    l.createdAt = date[2] + "/" + date[1] + "/" + date[0]
                    return l
                })

                switch (selectedFilter) {
                    case "Todos":
                        break
                    case "Pendentes":
                        myLogs = myLogs.filter(l => !l.Resolved)
                        break
                    case "Resolvidos":
                        myLogs = myLogs.filter(l => l.Resolved)
                }


                console.log(req.body.filter)
                return res.render('../views/relatorio', { computador: response.data.pc, logs: myLogs, filter: selectedFilter })
            })
            .catch(error => {
                console.log(error)
                res.render('../views/notFound')
            })
    }

    async insertLog(req, res) {
        var data = req.body

        data.CPF = data.CPF.replaceAll('.', '').replace('-', '')

        if (!data.Type || !data.Device)
            return res.redirect('/erro')

        await axios.post('/log', data)
            .then(response => {
                res.redirect(req.originalUrl)
            })
            .catch(error => {
                res.redirect('/erro')
            })
    }

    async resolveLog(req, res) {
        await axios.post('/log/' + req.body.id)
            .then(response => {
                res.redirect('/adm/relatorio/' + req.params.pos)
            })
            .catch(error => {
                console.log(error)
                res.redirect('/erro')
            })
    }
}

export default new HomeController()