var express = require('express')

var app = express()

app.get('/fortune', (req, res, next) => Promise.resolve().then(async () => {
    res.json({
        data: 'asd'
    })
}))

module.exports = app
