var environment = process.env.NODE_ENV || 'development'
var config = require('../knexfile')[environment]
var knex = require('knex')(config)

module.exports = {
  getCoffeeList: getCoffeeList
}

function getCoffeeList () {
  return knex('orders')
}
