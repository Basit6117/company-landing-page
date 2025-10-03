import React from 'react'
import {navLinks} from "../data/navLinks"
const Navlinks = ({footerNav, children}) => {
  return (
    <ul className={`navlinksContainer ${footerNav}`}>
      {
        navLinks.map((link)=>{
            return(
                <li key={link.href}>
            <a  href={link.href}>{link.name}</a>
            </li>
            )
        })
      }
      {children}
    </ul>
  )
}

export default Navlinks
