import React from 'react'

import OrderList from './OrderList'

const Home = props => {
  return (
    <OrderList orders={props.orders} />
  )
}

export default Home
