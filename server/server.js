const express = require('express')
const CarRouter = require('./cars_router.js')

const server = express()
server.use(express.json())

server.use('/api/cars', CarRouter)

server.get('/', (req, res) => {
    res.send('cars DB open')
})

module.exports = server