var express = require('express')
var router = express.Router()

var db = require('../../db/db')

router.get('/', function (req, res) {
  db.getCoffeeList()
    .then(function (result) {
      res.send(result)
    })
})

module.exports = router