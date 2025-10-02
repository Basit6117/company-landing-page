import React from 'react'
import "../styles/Hero.css"
import HeroImg from "../assets/hero.png"
import Button from '../components/Button'
const Hero = () => {
  return (
    <section className='hero'>
      <div className="left">
        <h1>Navigating the digital landscape for success</h1>
        <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
        <Button variant="filled">Book a Consultation</Button>
      </div>
      <div className="right">
        <img src={HeroImg} alt={HeroImg} />
      </div>
    </section>
  )
}

export default Hero
