var environment = process.env.NODE_ENV || 'development'
var config = require('../knexfile')[environment]
var knex = require('knex')(config)

module.exports = {
  getCoffeeList: getCoffeeList,
}

var coffeeList = [{
  id: 1,
  name: 'Mocha'
},
{
  id: 2,
  name: 'Flat White'
},
{
  id: 3,
  name: 'Short Black'
},
{
  id: 4,
  name: 'Long Black'
},
{
  id: 5,
  name: 'Americano'
},
{
  id: 6,
  name: 'Green Tea'
},
{
  id: 7,
  name: 'Earl Grey'
}]

function getCoffeeList () {
  return knex('coffees')
}