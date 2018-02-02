var express = require('express')

var fortune = require('./fortune')

var app = express()

app.get('/fortune', (req, res, next) => Promise.resolve().then(async () => {
    res.json({
        data: fortune()
    })
}))

module.exports = app
