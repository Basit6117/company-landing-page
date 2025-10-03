import React from 'react'
import "../App.css"
const Title = ({children, ...props}) => {
  return (
    <div className='title-container'>
      {children}
    </div>
  )
}

export default Title
