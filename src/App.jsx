import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import TrustedBy from './sections/TrustedBy'
import Services from './sections/Services'
import Testimonials from './sections/Testimonials'
import Footer from './sections/Footer'
import Logo from './components/Logo'
import LogoIcon from "./assets/logo.png"
import FooterIcon from "./assets/white-logo.png"
import FooterName from "./assets/whiteName.png"
import CompanyName from "./assets/name.png"
import Navlinks from './components/Navlinks'
import Button from './components/Button'
import SocialsIcons from './components/SocialsIcons'
import Title from './components/Title'
import Contact from './sections/Contact'
import { navLinks } from './data/navLinks'
import {useState} from "react"
function App() {
  const [toogle, setToggle] = useState(false)
  console.log(toogle)
  return (
<div className='App'>
<Navbar className='navbar'>
  <Logo>
      <img className='logo-icon' src={LogoIcon} alt="logo" />
      <img className='company-name' src={CompanyName} alt="company name" />
  </Logo>
    <Navlinks>
       <Button className="hide-btn">Request a qoute</Button>
        <p onClick={()=>setToggle(!toogle)}>☰</p>
        {
          toogle && 
        <div className="menu-dropdown">
            {navLinks.map(
                item => (
                    <div
                        className="menu-item"
                        key={item.name}
                    >
                        {item.name}
                    </div>
                )
            )}
        </div>
        }
    </Navlinks>
</Navbar>
<Hero />
<TrustedBy />
        <Title>
            <h2>Services</h2>
            <p>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
        </Title>
<Services />
<Testimonials />
      <Title>
        <h2>Contact us</h2>
        <p>Contact with us: Let's Discuss Your Digital Marketing Needs</p>
      </Title>
<Contact />
<Footer>
  <Navbar className="footer-nav">
    <Logo>
      <img className='logo-icon' src={FooterIcon} alt="logo" />
      <img className='company-name' src={FooterName} alt="company name" />
  </Logo>
    <Navlinks footerNav="footerNav">
    <SocialsIcons />
    </Navlinks>
</Navbar>
<div className="contact-sec">
  <h3>Contact us:</h3>
  <p>Email: info@positivus.com</p>
  <p>Phone: 555-567-8901</p>
  <p>Address: 1234 Moonstone City, Stardust State 12345</p>
</div>
<hr />
<br />
<span>&copy; 2025 Positivus. All right Reserved.</span> <span>Privicy Policy</span>
</Footer>
</div>
  )
}

export default App
