import { combineReducers } from 'redux'

import orderForm from './orderForm'
import order from './order'
import orders from './orders'

export default combineReducers(
  {
    orderForm,
    order,
    orders
  }
)
