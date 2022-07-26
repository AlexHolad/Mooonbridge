import React from 'react'

import './NavMobile.css'

function NavMobile({menuToggler}) {
  return (
    <header className='header-mobile-container'>
      <ul className='header-mobile-list'>
        <li className='header-mobile-logo-container'><img src='./img/logosample.png' alt='logo'/></li>
        <li><h1>Moonbridge</h1></li>
        <li><button className='menu-button' onClick={menuToggler}>Меню</button></li>
      </ul>
    </header>
  )
}

export default NavMobile