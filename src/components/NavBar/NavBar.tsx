import React from 'react'

import './NavBar.scss'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='navbar__left'>
            Tung Nguyen Left
        </div>
        <div className='navbar__right'>
            <ul className='navbar__right--list'>
              <li><a href="">Home</a></li>
              <li><a href="">About me</a></li>
              <li><a href="">Tech stack</a></li>
              <li><a href="">My project</a></li>
              <li><a href="">Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar