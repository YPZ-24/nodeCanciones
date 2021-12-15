const express = require('express')
const app = express();
const cancionRoutes = require('./routes/cancion.routes')
const cors = require('cors')

//middlewares
app.use(express.json())
app.use(cors())

//rutas
app.use(cancionRoutes)

module.exports = app;