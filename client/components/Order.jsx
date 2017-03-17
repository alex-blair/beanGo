import React from 'react'
import {Link} from 'react-router-dom'

const Order = props => {
  // const addSpaceBetweenModifiers = props.order.modifiers.map (modifier => ' ' + modifier)
  const addSpaceBetweenModifiers = props.order.modifiers.join (' & ')
  return (
    <div className='orderContainer'>
      <div className='orderName'>
        <h3>{props.order.name}</h3>
      </div>
      <div className='orderDetails'>
        <div className='size property'>
          {props.order.size}
        </div>
        <div className='type property'>
        {props.order.type}
        </div>
          {props.order.modifiers.length === 0
            ? null
            : <div className='modifiers property'>{'with ' + addSpaceBetweenModifiers}</div>}
          {props.order.sugars === 0
            ? null
            : <div className='sugars property'>{props.order.sugars + ' x sugar'}</div>}
          {props.order.comments === ''
            ? null
            : <div className='comments property'>{props.order.comments}</div>}

        <div className='edit property'>
          <Link to='/test'><button className='editButton'>Edit</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Order
