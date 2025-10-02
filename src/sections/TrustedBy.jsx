import React from 'react'
import "../styles/Hero.css"
import amazon from "../assets/amazon.png"
import dribble from "../assets/dribble.png"
import hubspot from "../assets/hubspot-logo.png"
import notion from "../assets/notion-logo.png"
import netflix from "../assets/netflix-logo.png"
import zoom from "../assets/zoom-logo.png"
const trustedCompanies = [amazon, dribble, hubspot, notion, netflix, zoom]
const TrustedBy = () => {
  return (
    <section className='trusted-by'>
      {
        trustedCompanies.map((company)=>{
            return <img src={company} alt={company} width="100px"/>
        })
      }
    </section>
  )
}

export default TrustedBy
