import React from 'react'
import "../styles/Services.css"
import Title from '../components/Title'
import Card1Img from "../assets/card1.png"
import Card2Img from "../assets/card2.png"
import Card3Img from "../assets/card3.png"
import Card4Img from "../assets/card4.png"
import Card5Img from "../assets/card5.png"
import Card6Img from "../assets/card6.png"
import ArrowBtn from '../components/ArrowBtn'
import { FiArrowUpRight } from "react-icons/fi";

const services = [
  {
    title: "Search Engine Optimization",
    titleBgColor: "#b9ff66",
    cardBg: "#F3F3F3",
    img: Card1Img

  },
    {
    title: "Pay-Per-Click advertising",
    titleBgColor: "#F3F3F3",
    cardBg: "#b9ff66",
    img: Card2Img

  },
    {
    title: "Social Media Marketing",
    titleBgColor: "white",
    cardBg: "black",
    img: Card3Img

  },
    {
    title: "Email Marketing",
    titleBgColor: "#b9ff66",
    cardBg: "#F3F3F3",
    img: Card4Img

  },
    {
    title: "Content Creation",
    titleBgColor: "#F3F3F3",
    cardBg: "#b9ff66",
    img: Card5Img

  },
    {
    title: "Analytics and tracking",
    titleBgColor: "#b9ff66",
    cardBg: "black",
    img: Card6Img

  }
]
const Services = () => {
  return (
    <>
    <section className='services'>
        <Title>
            <h2>Services</h2>
            <p>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
        </Title>
        <div className="card-container">
     {
      services.map((service) =>{
        return(
             <div className="card" style={{backgroundColor: service.cardBg}}>
        <div className="title-sec">
           <span style={{backgroundColor: service.titleBgColor}}>{service.title}</span>
            <ArrowBtn bgColor={service.cardBg}>{<FiArrowUpRight className={service.cardBg==="black" ? "white-bg" :  "black-bg"} />} Learn more</ArrowBtn>
        </div>
        <div className="image-sec">
            <img src={service.img} alt="amzon" width="200px" />
        </div>
      </div>
  

        )
      })
     }
      </div>
    </section>
    </>
  )
}

export default Services
