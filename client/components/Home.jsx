import React from 'react'
import {Link} from 'react-router-dom'

import OrderList from './OrderList'

const Home = props => {
  return (
    <div>
      <OrderList orders={props.orders} />
      <div className='buttons'>
        <Link to='/add'><button className='addOrderButton'>+</button></Link>

      </div>
    </div>
  )
}

export default Home
