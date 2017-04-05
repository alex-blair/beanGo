import React from 'react'
import { connect } from 'react-redux'
import Add from './Add'

import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import { getOrders } from '../actions'

const App = React.createClass({
  componentDidMount () {
    this.props.getOrders()
  },
  render () {
    return (
      <div>
        <Home />
        <Add />
      </div>
    )
  }
})

const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: () => {
      dispatch(getOrders())
    }
  }
}

export default connect(null, mapDispatchToProps)(App)
