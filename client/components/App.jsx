import React from 'react'
import Add from './Add'

import {Route} from 'react-router-dom'

import Home from './Home'
import Test from './Test'

const App = React.createClass({
  getInitialState () {
    return {
      activeOrders: [
        {
          id: 1,
          name: 'James Mead',
          type: 'Flat White',
          size: 'Small',
          modifiers: ['Almond', 'Soy'],
          sugars: 1,
          comments: 'Please add a cinnamon stick'
        },
        {
          id: 2,
          name: 'Alex Blair',
          type: 'Mocha',
          size: 'Small',
          modifiers: ['Almond Milk', 'Soy Milk'],
          sugars: 0,
          comments: 'I want a picture of a cat on top'
        },
        {
          id: 3,
          name: 'Bob',
          type: 'Mocha',
          size: 'Small',
          modifiers: [],
          sugars: 4,
          comments: ''
        }
      ]
    }
  },
  render() {
    const orders = this.state.activeOrders
    return (
      <div>
        <Route exact path="/" render={() => <Home orders={orders} />} />
        <Route path="/test" component={Test} />
        <Route path="/add" render={() => <Add addOrder={this.addOrder} />} />
        <Route path="/edit/:id" render={(props) => {
          console.log(props)
          var currentOrder = this.state.activeOrders.filter(function(order) {
            return order.id === Number(props.match.params.id)
          } )[0]
          return (
            <Add addOrder={this.addOrder} currentOrder={currentOrder} />
          )
        }} />
      </div>
    )
  },
  addOrder () {}
})

export default App
