import CardContext from './cart-context.js';
import React , {useReducer, useState} from 'react';

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state,action) => {
    switch (action.type){
        case 'ADD':
            const updatedItems = state.items.concat(action.item)
            const updatedTotalAmount = state.totalAmount + 1;
            
            return{
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
            
        case 'ADD_AMOUNT':
            const updatedTotalAmou = state.totalAmount + 1;
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.item.id
            )

            state.items[existingCartItemIndex].amount = state.items[existingCartItemIndex].amount + 1

            return{
                items: state.items,
                totalAmount: updatedTotalAmou
            }

        case 'REMOVE':
            let index = state.items.findIndex(el => el.id === action.id)
            let halo = state.items;

            if(state.items[index].amount === 1){
                halo = state.items.filter(el => el.id !== action.id)
            }else{   
                halo[index].amount = state.items[index].amount - 1;
            }
            return{
                items: halo,
                totalAmount: state.totalAmount - 1
            }
    }

    return defaultCartState
}
const CartProvider = (props) =>{
    const [cartState,dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const [prevClick, setPrevClick] = useState([]);
   

    const addItemToCartHandler = (item, from) =>{
        
        if(!prevClick.includes(item.id)){
            dispatchCartAction({type: 'ADD' , item: item});            
        }
        else if(from === 'shoppingCart'){
            dispatchCartAction({type: 'ADD_AMOUNT', item: item})
        }
        else{       
            dispatchCartAction({type: 'ADD_AMOUNT', item: item})
        }
        setPrevClick(prevState => [...prevState, item.id])
    }

    const removeItemFromCartHandler = (id,item) =>{
        dispatchCartAction({type: 'REMOVE', id: id, item: item})
        // let filteredItems = prevClick.filter(el => el !== id)
        prevClick.pop(id)
    
        console.log(prevClick);

        setPrevClick(prevClick)
        
    }

    const CartContext = {
        item: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CardContext.Provider value={CartContext}>
        {props.children}
    </CardContext.Provider>
}

export default CartProvider;