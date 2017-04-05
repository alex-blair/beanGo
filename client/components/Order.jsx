import React from 'react'
import { connect } from 'react-redux'

import { deleteOrder, editOrder } from '../actions'

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
          <button className='editButton' onClick={() => props.editOrder(props.order.id)}>Edit</button>
        </div>
        <div className='delete property'>
          <button onClick={() => props.deleteOrder(props.order.id)} className='deleteButton'>Delete</button>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteOrder: (id) => {
      dispatch(deleteOrder(id))
    },
    editOrder: (id) => {
      dispatch(editOrder(id))
    }
  }
}
export default connect(null, mapDispatchToProps)(Order)
