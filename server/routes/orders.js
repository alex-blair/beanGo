var express = require('express')
var router = express.Router()

var db = require('../../db/db')

router.get('/', function (req, res) {
  db.getOrders()
    .then(orders => {
      orders = orders.map(order => {
        return Object.assign(
          {},
          order,
          { modifiers: order.modifiers.split(',') }
        )
      })
      res.send(orders)
    })
})

router.post('/', function (req, res) {
  
  const { name, type, size, modifiers, sugars, comments } = req.body
  
  const order = {
    name,
    type,
    size,
    modifiers: modifiers ? modifiers.join() : '',
    sugars,
    comments
  }
  
  db.addOrder(order)
    .then(result => res.send({ message: 'Added Order' }))
})

router.delete('/:id', function(req, res) {
  const orderId = req.params.id
  db.completeOrder(orderId)
    .then(result => res.json({ message: 'Deleted Order' }))
})



module.exports = router