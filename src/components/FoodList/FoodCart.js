import React, { Fragment, useContext } from 'react'
import './FoodCart.css'
import CartContext from '../store/cart-context'
function FoodCart(props) {
    const cartCtx = useContext(CartContext)


    const addToCartHandler = (amount , count) =>{
        cartCtx.addItem({
            id: props.meals[count].id,
            name: props.meals[count].name,
            amount: 1,
            price: props.meals[count].price
        })}

        return <Fragment>
            {props.meals.map((meal) =>{    
                return <div className='food-cart' key={meal.id}>
                <div className='meal-description'>
                    <h1>{meal.name}</h1>
                    <p>{meal.description}</p>
                    <h2>${meal.price}</h2>   
                </div>
                <div className='meal-actios'>
                    <p>Amount <input type='number' min='1' id={meal.id}/></p>
                    <button onClick={e => addToCartHandler(1, parseFloat(meal.id.slice(1)) - 1)}>Add</button>
                </div>
               
            </div>
            })}
        </Fragment> 
}

export default FoodCart
