const express = require('express')
const users = require('../services/quotes.service')

const router = express.Router()

router.get('/all', users.getAllQuotes)

router.get('/byid/:id', users.getById)

router.post('/create', users.createQuote)

router.put('/update', users.updateQuotes)

router.delete('/delete/:id', users.deleteQuotes)

module.exports = router