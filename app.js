var express = require('express')
var uuid = require('uuid')

var fortune = require('./fortune')
var state = require('./state')

state.set('uuid', uuid.v4())
state.set('startedAt', new Date())

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
    res.meta('startedAt', state.get('startedAt'))
    res.meta('uuid', state.get('uuid'))
    next()
})

app.get('/fortune', (req, res, next) => Promise.resolve().then(async () => {
    res.data(fortune())
    res.json(res.response())
}))

module.exports = app
