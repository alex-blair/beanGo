import React from 'react'

const Order = props => {
  // const addSpaceBetweenModifiers = props.order.modifiers.map (modifier => ' ' + modifier)
  const addSpaceBetweenModifiers = props.order.modifiers.join (' & ')
  return (
    <div className='orderContainer'>
      <div className='orderName'>
        <h3>{props.order.name}</h3>
      </div>
      <div className='orderDetails'>
        <div className='size'>
          {props.order.size}
        </div>
        <div className='type'>
        {props.order.type}
        </div>
        <div className='modifiers'>
          {props.order.modifiers.length === 0
            ? null
            : 'with ' + addSpaceBetweenModifiers}
        </div>
        <div className='sugars'>
          {props.order.sugars === 0
            ? null
            : props.order.sugars + ' x sugar'}
        </div>
        <div className='comments'>
          {props.order.comments === ''
            ? null
            : props.order.comments}
        </div>
      </div>
    </div>
  )
}

export default Order
