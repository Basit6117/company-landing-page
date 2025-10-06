import React from 'react'
import {navLinks} from "../data/navLinks"
import "../styles/Navbar.css"
const Navlinks = ({footerNav, children}) => {
  return (
    <ul className={`navlinksContainer ${footerNav}`}>
      {
        navLinks.map((link)=>{
            return(
                <li key={link.name}>
            <a  href={link.href}>{link.name}</a>
            </li>
            )
        })
      }
      <div className="nav-btn">
      {children}
      </div>
    </ul>
  )
}

export default Navlinks
