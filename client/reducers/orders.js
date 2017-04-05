function orders (state = [], action) {
  switch (action.type) {
    case 'POPULATE_ORDERS':
      return action.orders
    default:
      return state
  }
}

export default orders
