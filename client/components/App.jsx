import React from 'react'
import Add from './Add'

import {Route} from 'react-router-dom'

import Home from './Home'
import Test from './Test'

const App = React.createClass({
  getInitialState () {
    return {
      activeOrders: []
    }
  },
  render() {
    const orders = this.state.activeOrders
    return (
      <div>
        <Route exact path="/" render={() => <Home orders={orders} />} />
        <Route path="/test" component={Test} />
        <Route path="/add" render={(props) => <Add addOrder={this.addOrder} {...props} />} />
        <Route path="/edit/:id" render={(props) => {
          console.log(props)
          var currentOrder = this.state.activeOrders.filter(function (order) {
            return order.id === Number(props.match.params.id)
          } )[0]
          return (
            <Add addOrder={this.addOrder} currentOrder={currentOrder} />
          )
        }} />
      </div>
    )
  },
  addOrder (newOrder) {
    let id = this.state.activeOrders.length++
    newOrder.id = id
    console.log(...this.state.activeOrders)
    const newState = {
      activeOrders: this.state.activeOrders
    }
    newState.activeOrders.push(newOrder)
    console.log(newState)
    this.setState(newState)
  }
})

export default App
