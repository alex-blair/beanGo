import request from 'superagent'

var orderListURL = 'http://localhost:3000/orders'

module.exports = {
  getOrderList: getOrderList
}

function getOrderList (callback) {
  request
    .get(orderListURL)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        console.log('Hello World')
        callback(null, res.body.orders)
      }
    })
}
