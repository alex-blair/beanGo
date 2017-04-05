import React from 'react'
import { connect } from 'react-redux'
import { updateOrderField, updateModifiers, saveOrder } from '../actions'

const Add = React.createClass({
  render () {
    return (
      <div className='add'>
        <h3>Add your order</h3>
        <div className='addForm'>
          <h4>Name</h4>
          <input type='text' name='name'
            onChange={this.updateOrderField}
         />
          <h4>Type</h4>
          <select name='type' onChange={this.updateOrderField} defaultValue='No Drink Selected'>
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
            <input onChange={this.updateOrderField} type='radio' name='size' value='Small' checked={this.props.size === 'Small'} />Small
            <input onChange={this.updateOrderField} type='radio' name='size' value='Large' checked={this.props.size === 'Large'} />Large
            <input onChange={this.updateOrderField} type='radio' name='size' value='Keep Cup' checked={this.props.size === 'Keep Cup'} />Keep Cup
          </div>
          <h4>Modifiers</h4>
          <input onChange={this.updateModifiers} type='checkbox' name='modifiers' value='Soy' checked={this.props.modifiers.includes('Soy')} />Soy Milk
          <input onChange={this.updateModifiers} type='checkbox' name='modifiers' value='Almond' checked={this.props.modifiers.includes('Almond')} />Almond Milk
          <input onChange={this.updateModifiers} type='checkbox' name='modifiers' value='Cinnamon' checked={this.props.modifiers.includes('Cinnamon')} />Cinnamon Sprinkles
          <input onChange={this.updateModifiers} type='checkbox' name='modifiers' value='Chocolate' checked={this.props.modifiers.includes('Chocolate')} />Chocolate Sprinkles
          <h4>Sugars</h4>
          <input onChange={this.updateOrderField} type='number' name='sugars' min='0' max='4' />
          <h4>Additional Comments</h4>
          <input type='text' name='comments'
            onChange={this.updateOrderField}
          />
        </div>
        <button onClick={this.handleClick}>Add your Order!</button>
      </div>
    )
  },
  handleClick () {
    this.props.saveOrder()
  },
  updateModifiers (evt) {
    this.props.updateModifiers(evt.target.value)
  },
  updateOrderField (e) {
    this.props.updateOrderField(e.target.name, e.target.value)
  }
})

const mapDispatchToProps = (dispatch) => {
  return {
    updateOrderField: (key, value) => {
      dispatch(updateOrderField(key, value))
    },
    updateModifiers: (value) => {
      dispatch(updateModifiers(value))
    },
    saveOrder: (order) => {
      dispatch(saveOrder(order))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    modifiers: state.orderForm.modifiers,
    size: state.orderForm.size
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)
