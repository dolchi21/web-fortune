var express = require('express')
var uuid = require('uuid')

var UUID = uuid.v4()

var fortune = require('./fortune')

var app = express()

app.use((req, res, next) => {
    res.response = {
        meta: {
            uuid: UUID
        }
    }
    res.data = val => res.response.data = val
    next()
})

app.get('/fortune', (req, res, next) => Promise.resolve().then(async () => {
    res.data(fortune())
    res.json(res.response)
}))

module.exports = app
