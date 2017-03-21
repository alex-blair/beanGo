import React from 'react'
// import {Link} from 'react-router'

import Order from './Order'

const OrderList = props => {
  return (
    <div className='OrderList'>
      <h2>Order List</h2>
      {console.log(props.orders)}
      <ul>
        {props.orders.map(order => {
          return (
            <Order order={order} key={order.id} />
          )
        })}
      </ul>
    </div>
  )
}

export default OrderList
