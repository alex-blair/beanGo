var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var server = express()

var coffees = require('./routes/coffees')
var orders = require('./routes/orders')

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/coffees', coffees)
server.use('/orders', orders)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

module.exports = server
