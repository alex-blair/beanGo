import React from 'react'
import Home from './Home'

const App = React.createClass( {
  getInitialState () {
    return {
      activeOrders: [
        {
          id: 1,
          name: 'James Mead',
          type: 'Flat White',
          size: 'Small',
          modifiers: ['Almond Milk', 'Soy Milk'],
          sugars: 1,
          comments: 'I want a picture of a dog on top'
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
        <Home orders={orders} />
      </div>
    )
  }
})


export default App
