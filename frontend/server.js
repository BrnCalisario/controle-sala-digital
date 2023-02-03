import express from "express"
import routes from "./routes.js"

import favicon from 'serve-favicon'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

app.use(favicon(process.cwd() + '/public/img/favicon.png'))

app.set('views', './src/views')
app.set('view engine', 'ejs')
app.use(routes)

app.listen(3000, () => console.log("Rodando em: http://localhost:3000/"))