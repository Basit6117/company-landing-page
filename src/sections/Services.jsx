import React from 'react'
import "../styles/Services.css"
import Title from '../components/Title'
const Services = () => {
  return (
    <section className='services'>
        {/* <h2>Services</h2> <span>something will be there okay</span> */}
        <Title>
            <h2>Services</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, doloremque!</p>
        </Title>
        <div className="card-container">
      <div className="card">
        <div className="title-sec">
            <h3></h3>
            <button>Learn more</button>
        </div>
        <div className="image-sec">
            <img src="../assets/amazon.png" alt="amzon" />
        </div>
      </div>
            <div className="card">
        <div className="title-sec">
            <h3></h3>
            <button>Learn more</button>
        </div>
        <div className="image-sec">
            <img src="../assets/amazon.png" alt="amzon" />
        </div>
      </div>
            <div className="card">
        <div className="title-sec">
            <h3></h3>
            <button>Learn more</button>
        </div>
        <div className="image-sec">
            <img src="../assets/amazon.png" alt="amzon" />
        </div>
      </div>
            <div className="card">
        <div className="title-sec">
            <h3></h3>
            <button>Learn more</button>
        </div>
        <div className="image-sec">
            <img src="../assets/amazon.png" alt="amzon" />
        </div>
      </div>
      </div>
    </section>
  )
}

export default Services
