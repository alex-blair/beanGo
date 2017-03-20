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
        <Route exact path="/" render={(props) => <Home orders={orders} {...props} />} />
        <Route path="/test" component={Test} />
        <Route path="/add" render={(props) => <Add addOrder={this.addOrder} {...props}/>} />
        <Route path="*" render={() =><h1>Sorry, no route found</h1>} />
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
