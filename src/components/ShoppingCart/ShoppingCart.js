import React from 'react'
import './ShoppingCart.css'
import CartContext from '../store/cart-context'
import FoodOrderForm from './FoodOrderForm'

import { useContext, useState } from 'react'


function ShoppingCart(props) {
    const cartCtx = useContext(CartContext)
    const [toogleForm,setToggleForm] = useState(false)

    const orderFormHandler = () =>{
        setToggleForm(!toogleForm)
        console.log(toogleForm);
    }
    
    return (
    <div className='cart-container'>    
        {
            cartCtx.item.map(it => {
                return <div className='shopping-cart-box'>
                <div className='left'>
                    <h1>{it.name}</h1>
                    <p>${it.price}</p>
                </div>
                <p className='count'>x {it.amount}</p>
                <button onClick={e => {cartCtx.removeItem(it.id)}}>-</button>
                <button onClick={e => {cartCtx.addItem(it, 'shoppingCart')}}>+</button>
            </div>
            })
        }
        <div className='prices'>
            <h1>Total Amount</h1>
            <p>$29.99</p>
        </div>
        {toogleForm ? <FoodOrderForm cart={cartCtx}/> : <div className='action-buttons'>
            <button onClick={props.hideCart}>Close</button>
            <button onClick={orderFormHandler}>Order</button>
        </div>}
    

    </div>
    
  )
}

export default ShoppingCart


