import React from 'react'
import './Navigation.css'
import { useContext } from 'react'
import CartContext from '../store/cart-context'

function Navigation(props) {
  const cartCtx = useContext(CartContext)

  return (
    <nav className='main-nav'>
        <ul className='ul-flex'>
            <li className='nav-title'>ReactMeals</li>
            <li className='cart-title' onClick={props.changeCartToVisible}>Your Cart <span className='mealsCounter'>{cartCtx.totalAmount}</span></li>
        </ul>
    </nav>
  )};

export default Navigation;
