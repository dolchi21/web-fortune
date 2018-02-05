var express = require('express')
var uuid = require('uuid')

var fortune = require('./fortune')

var UUID = uuid.v4()

var app = express()

app.use((req, res, next) => {
    var response = {
        meta: {}
    }
    res.meta = (key, value) => response.meta[key] = value
    res.data = val => response.data = val
    res.response = () => response
    next()
})

app.use((req, res, next) => {
    res.meta('uuid', UUID)
    next()
})

app.get('/fortune', (req, res, next) => Promise.resolve().then(async () => {
    res.data(fortune())
    res.json(res.response())
}))

module.exports = app
