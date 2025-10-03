import React from 'react'
import "../styles/Footer.css"
import Navbar from '../components/Navbar'
import "../styles/Navbar.css"
const Footer = ({children}) => {
  return (
    <footer>
     {children}
    </footer>
  )
}

export default Footer
