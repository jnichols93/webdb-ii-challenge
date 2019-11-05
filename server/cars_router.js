const express = require('express')
const car = require('express').Router()

const knex = require('../data/knexfile.js')
car.use(express.json())


car.get('/', (req, res) => {
    knex
    .select('*')
    .from('cars')
    .then(car => {
        res.status(200).json(cars)
    })
    .catch(err => {
        res.status(500).json({ error: `Server error could not get cars: ${err}` })
    })
})

car.get('/:id', (req, res) => {
    knex
    .select('*')
    .from('cars')
    .where('id', '=', req.params.id)
    .then(car => {
        res.status(200).json(car)
    })
    .catch(err => {
        res.status(500).json({ error: `Server error could not get car: ${err}` })
    })
})

car.post('/', (req, res) => {
    knex
    .insert(req.body, id)
    .into('cars')
    .then(insert => {
        res.status(201).json(insert)
    })
    .catch(err => {
        res.status(500).json({ error: `Server error could not get accounts: ${err}` })
    })
})
module.exports = car