import React from 'react'
import './ShoppingCart.css'
import CartContext from '../store/cart-context'
import { useContext } from 'react'


function ShoppingCart(props) {
    const cartCtx = useContext(CartContext)

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
                <button>+</button>
            </div>
            })
        }

        <div className='prices'>
            <h1>Total Amount</h1>
            <p>$29.99</p>
        </div>
        <div className='action-buttons'>
            <button onClick={props.hideCart}>Close</button>
            <button>Order</button>
        </div>
    </div>
    
  )
}

export default ShoppingCart


