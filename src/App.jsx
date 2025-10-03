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

function App() {

  return (
<>
<Navbar className='navbar'>
  <Logo>
      <img className='logo-icon' src={LogoIcon} alt="logo" />
      <img className='company-name' src={CompanyName} alt="company name" />
  </Logo>
    <Navlinks>
       <Button>Request a qoute</Button>
    </Navlinks>
</Navbar>
<Hero />
<TrustedBy />
<Services />
<Testimonials />
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
</Footer>
</>
  )
}

export default App
