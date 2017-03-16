import React from 'react'

const Order = props => {
  return (
    <li>{props.order.name} - {props.order.type}</li>
  )
}

export default Order
