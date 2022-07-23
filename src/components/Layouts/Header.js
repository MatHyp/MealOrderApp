import React from 'react'
import mealsImg from '../../assets/header.jpg'
import './Header.css'
import HeaderBox from './HeaderBox.js'

function Header(props) {
  return (
    <header className='header' style={{opacity: props.cart ? '0.1' : '0.9',}}>
      <div className='header-img-container'>
        <img src={mealsImg} alt='Dish fool of meats ...'/>
      </div>
      <HeaderBox />

    </header>
  )
}

export default Header
