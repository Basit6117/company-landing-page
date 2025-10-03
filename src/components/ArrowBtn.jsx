import React from 'react'
import "../App.css"
const ArrowBtn = ({children,bgColor}) => {
  return (
    <div className={`arrow-btn ${bgColor === "black" ? "dark-bg" : ""} `}>
        {children}
    </div>
  )

}

export default ArrowBtn
