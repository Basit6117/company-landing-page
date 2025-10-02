import React from 'react'
import Button from './Button'
import {navLinks} from "../data/navLinks"
const Navlinks = () => {
  return (
    <ul className='navlinks-container'>
      {
        navLinks.map((link)=>{
            return(
                <li key={link.href}>
            <a  href={link.href}>{link.name}</a>
            </li>
            )
        })
      }
    <Button variant="success">Request a qoute</Button>
    </ul>
  )
}

export default Navlinks
