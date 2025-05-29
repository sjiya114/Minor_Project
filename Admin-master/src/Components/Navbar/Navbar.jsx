import React from 'react'
import './Navbar.css'
import Logo from '../../assets/lo.png'
import Profile from '../../assets/profile_image.png'


const Navbar = () => {
  return (
    <div className='navbar'>
       <img className='logo' src={Logo}   alt="" /> 
     <img className='profile' src={Profile} alt="" />
      
    </div>
  )
}

export default Navbar
