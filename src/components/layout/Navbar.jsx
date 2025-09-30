import React from 'react'
import {navLinks} from "../../data/navLinks"
import "./Layout.css"

const Navbar = () => {
  return (
    <div className='header'>
      <div className="logo">
        Logo
      </div>
       <div className="links">
       {
        navLinks.map((link)=>{
         return<a href={link.href}>{link.name}</a>  
        })
       }
          </div>
      
    </div>
  )
}

export default Navbar
