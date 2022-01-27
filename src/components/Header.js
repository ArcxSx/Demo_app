import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom'



function Header() {
  return (
  <div className="header">
      <div className="header__left">
          <img src="https://runo.in/images/Runo-logo.png" alt="logo" />
      </div>

      <div className="header__right">
          <nav className='main__nav'>
          <ul className='nav__list'>
                <li className='nav__item '><NavLink exact activeClassName="active" to='/' >Home</NavLink></li>
                <li className='nav__item '><NavLink activeClassName="active" to='/blog'>Blog</NavLink></li>
                <li className='nav__item '><NavLink activeClassName="active" to='/contact'>Contact Us</NavLink></li>
            </ul>
              
          </nav>
      </div>
  </div>)
}

export default Header;
