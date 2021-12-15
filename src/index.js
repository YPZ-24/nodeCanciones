require('dotenv').config()

const app = require('./app')
const config = require('./config/config')

app.listen(config.PORT, () => {
    console.log("Servidor escuchando en el puerto "+config.PORT)
})