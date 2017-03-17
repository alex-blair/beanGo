import React from 'react'

const Add = React.createClass({
  getInitialState () {
    return {
      order: {
        id: 0,
        name: '',
        type: '',
        size: '',
        modifiers: [],
        sugars: 0,
        comments: ''
      }
    }
  },
  render () {
    return (
      <div className='add'>
        <h3>Add your order</h3>
        <div className='addForm'>

                //------FIGURE OUT ID

          <h4>Name</h4>
          <input type='text' name='name'
            onChange={this.updateName}
            value={this.state.order.name} />
          <h4>Type</h4>
          <select name='type' onChange={this.updateType}>
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
            <input onChange={this.updateSize} type='radio' name='size' value='Small' checked={false} />Small
            <input onChange={this.updateSize} type='radio' name='size' value='Large' />Large
            <input onChange={this.updateSize} type='radio' name='size' value='Keep Cup' />Keep Cup
          </div>
          <h4>Modifiers</h4>
          <input onChange={this.updateModifiers} type='checkbox' name='modifier' value='Soy' />Soy Milk
          <input onChange={this.updateModifiers} type='checkbox' name='modifier' value='Almond' />Almond Milk
          <input onChange={this.updateModifiers} type='checkbox' name='modifier' value='Cinnamon' />Cinnamon Sprinkles
          <input onChange={this.updateModifiers} type='checkbox' name='modifier' value='Chocolate' />Chocolate Sprinkles
          <h4>Sugars</h4>
          <input onChange={this.updateSugars} type='number' name='sugars' value={this.state.order.sugars} min='0' max='4' />
          <h4>Additional Comments</h4>
          <input type='text' name='comments'
            onChange={this.updateComments}
            value={this.state.order.comments} />
          <input type='button' onClick={this.props.addOrder} value='Add Order' />
        </div>
      </div>
    )
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
    console.log(evt)
    console.log(evt.target.checked)
    let modifiers = this.state.order.modifiers
    if (evt.target.checked) {
      modifiers.push(evt.target.value)
    } else {
      modifiers = modifiers.filter(modifier => (modifier !== evt.target.value))
    }
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
