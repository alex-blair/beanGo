var environment = process.env.NODE_ENV || 'development'
var config = require('../knexfile')[environment]
var knex = require('knex')(config)

module.exports = {
  getCoffeeList,
  getOrders,
  addOrder,
  completeOrder
}

function getCoffeeList () {
  return knex('coffees')
}

function getOrders () {
  return knex('orders')
}

function addOrder (order) {
  return knex('orders')
    .insert(order)
}

function completeOrder (orderId) {
  return knex('orders')
    .where({id: orderId})
    .del()
}