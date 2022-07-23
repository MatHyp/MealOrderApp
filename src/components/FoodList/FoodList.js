import React from 'react'
import './FoodList.css'
import FoodCart from './FoodCart'

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];


function FoodList(props) {
  return (
    <div className='food-list' style={{opacity: props.cart ? '0.1' : '0.9',}}>
        <FoodCart meals={DUMMY_MEALS}/>
    </div>
  )
}

export default FoodList
