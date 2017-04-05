import request from 'superagent'

export const updateOrderField = (key, value) => {
  return {
    type: 'UPDATE_ORDER_FIELD',
    key,
    value
  }
}

export const updateModifiers = (value) => {
  return {
    type: 'UPDATE_MODIFIERS',
    value
  }
}

export const saveOrder = () => {
  return (dispatch, getState) => {
    const order = getState().orderForm
    request
    // dispatch save order
      .post('/orders')
      .send(order)
      .end((err, res) => {
        if (err) {
          // dispatch error
          console.error(err.message)
          return
        }
        dispatch(getOrders())
        dispatch(confirmOrder(res.body.id))
      })
  }
}

export const confirmOrder = (id) => {
  return {
    type: 'CONFIRM_ORDER',
    id
  }
}

export const getOrders = () => {
  return (dispatch) => {
    request
    // dispatch save order
      .get('/orders')
      .end((err, res) => {
        if (err) {
          // dispatch error
          console.error(err.message)
          return
        }
        dispatch(populateOrders(res.body))
      })
  }
}

export const populateOrders = (orders) => {
  return {
    type: 'POPULATE_ORDERS',
    orders
  }
}

export const deleteOrder = (id) => {
  return (dispatch) => {
    request
      .del(`/orders/${id}`)
      .end((err, res) => {
        if (err) {
          // dispatch error
          console.error(err.message)
          return
        }
        dispatch(getOrders())
      })
  }
}

export const editOrder = (id) => {
  return {
    type: 'EDIT_ORDER',
    id
  }
}
