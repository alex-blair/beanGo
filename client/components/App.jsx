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
          mods: ['Almond Milk', 'Soy Milk'],
          comments: 'I want a picture of a dog on top'
        },
        {
          id: 2,
          name: 'Alex Blair',
          type: 'Flat White',
          size: 'Small',
          mods: ['Almond Milk', 'Soy Milk'],
          comments: 'I want a picture of a cat on top'
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
