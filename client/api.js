import request from 'superagent'

var coffeeURL = 'http://localhost:3000/coffees'

module.exports = {
  getCoffeeList: getCoffeeList
}

function getCoffeeList (callback) {
  request
    .get(coffeeURL)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}
