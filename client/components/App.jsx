import React from 'react'
import Add from './Add'

import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import Api from '../api'

const App = React.createClass({
  getInitialState () {
    return {
      activeOrders: []
    }
  },
  componentDidMount () {
    Api.getOrderList(this.renderOrderList)
  },
  renderOrderList (err, orders) {
    this.setState({
      error: err,
      activeOrders: orders
    })
  },
  render () {
    // const orders = this.state.activeOrders
    return (
      <div>
        <Switch>
          <Route exact path="/" render={(props) => <Home orders={this.state.activeOrders} {...props} />} />
          <Route path="/add" render={(props) => <Add addOrder={this.addOrder} {...props} />} />
          <Route path="/edit/:id" render={(props) => {
            var currentOrder = this.state.activeOrders.filter(function (order) {
              return order.id === Number(props.match.params.id)
            })[0]
            return (
              <Add addOrder={this.addOrder} currentOrder={currentOrder} />
            )
          }} />
          <Route render={() => <h1>Sorry, no route found</h1>} />
        </Switch>
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
