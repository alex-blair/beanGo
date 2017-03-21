var express = require('express')
var router = express.Router()

const db = require('../../db/db')

router.get('/', function (req, res) {
  db.getCoffeeList(req.app.get('knex'))
    .then(function (orders) {
      res.send({orders: orders})
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
