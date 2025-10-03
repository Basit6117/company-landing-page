import React from 'react'
import Logo from './Logo'
import Navlinks from './Navlinks'
import "../styles/Navbar.css"

const Navbar = ({children, ...props}) => {
  return (
    <nav {...props}>
      {children}
    </nav>
  )
}

export default Navbar
