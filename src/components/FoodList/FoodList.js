import React from 'react'
import './FoodList.css'
import FoodCart from './FoodCart'
import { useState, useEffect } from 'react';

function FoodList(props) {
  const [meals, setMeals] = useState([])

  useEffect(() =>{

    const fetchData = async () =>{
      const response = await fetch('https://meal-e71bf-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
      const responseData = await response.json() 
    
      const data_arr = []
      for(const key in responseData){
        data_arr.push(
          {
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price,
          }
        )
      }

      setMeals(data_arr);
    }
    fetchData();
  },[])  
  return (
    <div className='food-list' style={{opacity: props.cart ? '0.1' : '0.9',}}>
        <FoodCart meals={meals}/>
    </div>
  )
}

export default FoodList
