function order (state = {}, action) {
  switch (action.type) {
    case 'CONFIRM_ORDER':
      return {
        ...state
      }
    default:
      return state
  }
}

export default order
