import React from 'react'
import Add from './Add'

import { Route, Switch } from 'react-router-dom'

import Home from './Home'

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
        <Switch>
          <Route exact path="/" render={(props) => <Home orders={orders} {...props} />} />
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
          <Route render={() =><h1>Sorry, no route found</h1>} />
        </Switch>
      </div>
    )
  },
  addOrder (newOrder) {
    // if (newOrder.id) {
    //   this.state.activeOrders.filter(function (order) {
    //     order.id === newOrder.id
    //   })
    // } else {
    //
    // }
    console.log('new Order', newOrder)
    console.log('james was here')
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
