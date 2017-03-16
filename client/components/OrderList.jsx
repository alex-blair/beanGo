import React from 'react'
// import {Link} from 'react-router'

import Order from './Order'

const OrderList = props => {
  return (
    <div className='OrderList'>
      <h2>Order List</h2>
      <ul>
        {props.orders.map(order => {
          return (
            <li key={order.id}>{order.name} - {order.type}</li>
          )
        })}
      </ul>
    </div>
  )
}


export default OrderList
