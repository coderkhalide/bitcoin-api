const express = require('express')
const bitcoins = require('../routers/bitcoins')
const error = require('../middlewares/error')

module.exports =  function(app){
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use('/api/bitcoins', bitcoins)
    app.use(error)
}