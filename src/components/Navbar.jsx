import React from 'react'
import Logo from './Logo'
import Navlinks from './Navlinks'
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Logo />
      <Navlinks />
    </nav>
  )
}

export default Navbar
