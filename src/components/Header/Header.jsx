import React, { useState } from 'react'
import './Header.css'
import Bars from '../../assets/bars.png'
import Logo from '../../assets/logo.png'
import { Link } from 'react-scroll' 
const Header = () => {
  const mobile=window.innerWidth<=768 ? true:false;
  const [menuOpened, setMenuOpened]= useState(false)
  return (
    <div className='header'>
      <img src={Logo} alt='' className='logo'/>
      {(menuOpened===false && mobile===true)?(
        <div style={{backgroundColor:'var(--appcolor)', padding:'0.5rem', borderRadius:'5px'}}
        onClick={()=> setMenuOpened(true)}
        >
        <img src={Bars} alt='' style={{width:'1.5rem', height:'1.5rem'}}/></div>
      ):( <ul className='header-menu'>
      <li><Link onClick={()=>setMenuOpened(false)} to='Home' span={true} smooth={true}>HOME</Link></li>
      <li><Link onClick={()=>setMenuOpened(false)} to='programs' span={true} smooth={true}>DISORDERS</Link></li>
      <li><Link onClick={()=>setMenuOpened(false)} to='reasons' span={true} smooth={true}>ABOUT US</Link></li>
      <li><Link onClick={()=>setMenuOpened(false)} to='plans' span={true} smooth={true}>THERAPIES</Link></li>
      <li><Link onClick={()=>setMenuOpened(false)} to='Testimonials' span={true} smooth={true}>TESTIMONIALS</Link></li>
      </ul>)}
      
    </div>
  )
}

export default Header
