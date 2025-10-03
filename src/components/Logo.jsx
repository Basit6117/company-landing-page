import React from 'react'
import "../styles/Navbar.css"
const Logo = ({children}) => {
  return (
    <div className='logo'>
      {children}
    </div>
  )
}

export default Logo
