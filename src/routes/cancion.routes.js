const {Router} = require('express')
const router = Router()
const canciones = require('../data/canciones')
const Cancion = require('../model/Cancion')

router.get('/canciones', (req,res)=>{
    res.json(canciones)
})

router.get('/canciones/:index', (req,res)=>{
    const index = req.params.index
    res.json(canciones[index])
})

router.post('/canciones', (req,res)=>{
    const {cancion, cantante} = req.body
    const nuevaCancion = new Cancion(cancion, cantante)
    canciones.push(nuevaCancion)
    res.json({
        msj: "Se agrego la canción"
    })
})


module.exports = router