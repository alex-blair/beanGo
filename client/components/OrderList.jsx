import React from 'react'
import { connect } from 'react-redux'
// import {Link} from 'react-router'

import Order from './Order'

const OrderList = props => {
  return (
    <div className='OrderList'>
      <h2>Order List</h2>
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

const mapStateToProps = (state) => {
  return {
    orders: state.orders
  }
}

export default connect(mapStateToProps)(OrderList)
