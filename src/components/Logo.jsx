import React from 'react'
import "../styles/Navbar.css"
import LogoIcon from "../assets/logo.png"
import CompanyName from "../assets/name.png"
const Logo = () => {
  return (
    <div className='logo'>
      <img className='logo-icon' src={LogoIcon} alt="logo" />
       <img className='company-name' src={CompanyName} alt="company name" />
    </div>
  )
}

export default Logo
