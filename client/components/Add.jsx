import React from 'react'

const Add = React.createClass({
  getInitialState () {
    return {
      order: {
        name: '',
        type: '',
        size: '',
        modifiers: [],
        sugars: 0,
        comments: '',
        ...this.props.currentOrder
      }
    }
  },
  render () {
    console.log(this.props)
    return (
      <div className='add'>
        <h3>Add your order</h3>
        <div className='addForm'>
          <h4>Name</h4>
          <input type='text' name='name'
            onChange={this.updateName}
            value={this.state.order.name} />
          <h4>Type</h4>
          <select name='type' onChange={this.updateType} defaultValue={this.state.order.type}>
            <option value='No Drink Selected'>Select drink</option>
            <option value='Mocha'>Mocha</option>
            <option value='Flat White'>Flat White</option>
            <option value='Short Black'>Short Black</option>
            <option value='Long Black'>Long Black</option>
            <option value='Cappuccino'>Cappuccino</option>
            <option value='Latte'>Latte</option>
            <option value='Hot Chocolate'>Hot Chocolate</option>
            <option value='Americano'>Americano</option>
            <option value='Green Tea'>Green Tea</option>
            <option value='Earl Grey'>Earl Grey</option>
            <option value='Rooibos'>Roobios</option>
            <option value='Iced Chocolate'>Iced Chocolate</option>
            <option value='Iced Coffee'>Iced Coffee</option>
          </select>
          <h4>Size or Keep Cup</h4>
          <div className='sizeSelect'>
            <input onChange={this.updateSize} type='radio' name='size' value='Small' checked={this.state.order.size === 'Small'} />Small
            <input onChange={this.updateSize} type='radio' name='size' value='Large' checked={this.state.order.size === 'Large'} />Large
            <input onChange={this.updateSize} type='radio' name='size' value='Keep Cup' checked={this.state.order.size === 'Keep Cup'} />Keep Cup
          </div>
          <h4>Modifiers</h4>
          <input onChange={this.updateModifiers} type='checkbox' name='modifiers' value='Soy' checked={this.state.order.modifiers.includes('Soy')} />Soy Milk
          <input onChange={this.updateModifiers} type='checkbox' name='modifiers' value='Almond' checked={this.state.order.modifiers.includes('Almond')} />Almond Milk
          <input onChange={this.updateModifiers} type='checkbox' name='modifiers' value='Cinnamon' checked={this.state.order.modifiers.includes('Cinnamon')} />Cinnamon Sprinkles
          <input onChange={this.updateModifiers} type='checkbox' name='modifiers' value='Chocolate' checked={this.state.order.modifiers.includes('Chocolate')} />Chocolate Sprinkles
          <h4>Sugars</h4>
          <input onChange={this.updateSugars} type='number' name='sugars' value={this.state.order.sugars} min='0' max='4' />
          <h4>Additional Comments</h4>
          <input type='text' name='comments'
            onChange={this.updateComments}
            value={this.state.order.comments} />
        </div>
        <button onClick={this.handleClick}>Add your Order!</button>
      </div>
    )
  },
  handleClick () {
    this.props.addOrder(this.state.order)
    this.props.history.push('/')
  },
  updateFormState (field, newValue) {
    const newState = {
      order: {
        ...this.state.order,
        [field]: newValue
      }
    }
    this.setState(newState)
  },
  updateName (evt) {
    const value = evt.target.value
    const name = evt.target.name
    this.updateFormState(name, value)
  },
  updateType (evt) {
    const value = evt.target.value
    const type = evt.target.name
    this.updateFormState(type, value)
  },
  updateSize (evt) {
    const value = evt.target.value
    const size = evt.target.name
    this.updateFormState(size, value)
  },
  updateModifiers (evt) {
    let modifiers = this.state.order.modifiers
    if (evt.target.checked) {
      modifiers.push(evt.target.value)
    } else {
      modifiers = modifiers.filter(modifier => (modifier !== evt.target.value))
    }
    console.log(modifiers)
    let field = evt.target.name
    this.updateFormState(field, modifiers)
  },
  updateSugars (evt) {
    const value = evt.target.value
    const field = evt.target.name
    this.updateFormState(field, value)
  },
  updateComments (evt) {
    const value = evt.target.value
    const comment = evt.target.name
    this.updateFormState(comment, value)
  }
})

export default Add
