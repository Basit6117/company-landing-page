import React from 'react'
import "../styles/Contact.css"
import Button from "../components/Button"
import ContactImage from "../assets/contact-bg.png"
const Contact = () => {

  //   const handleForm = (formData) =>{
  //     const formInputData = Object.fromEntries(formData.entries());
  //     console.log(formInputData);

  //   }
  return (
    <section className='section-contact'>
      <div className="contact">
          <form >
            <input
              type="text"
              name="username"
              // autoComplete='off'
              placeholder='Enter your Name'
              // className='form-control'
              // required
              id="" />
            <input
              type="email"
              name="email"
              // autoComplete='off'
              placeholder='Enter your Email'
              // className='form-control'
              // required
              id="" />
            <textarea
              rows={5}
              name="message"
              // autoComplete='off'
              placeholder='Enter your Message'
              // className='form-control'
              // required
              id="" ></textarea>
            <Button variant="filled">Submit</Button>
          </form>
      </div>
        <img src={ContactImage} alt="Contact illustration" className="contact-image" />
    </section>
  )
}

export default Contact
