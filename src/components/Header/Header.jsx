import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
const Header = () => {
  return (
    <div className='header'>
      <img src={Logo} alt='' className='logo'/>
      <ul className='header-menu'>
      <li>HOME</li>
      <li>DISORDERS</li>
      <li>ABOUT US</li>
      <li>ASSESSMENT TESTS</li>
      <li>TESTIMONIALS</li>
      </ul>
    </div>
  )
}

export default Header
