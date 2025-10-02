import React from "react"
import classnames from "classnames"
import "../styles/Button.css"

export default function Button({ children, className, size, variant, ...rest }) {
    let sizeClass = size && `button-${size}`
    let variantClass = variant && `button-${variant}`
    const allClasses = classnames(sizeClass, variantClass, className)

    return (
        <button className={`btn ${allClasses}`} {...rest}>
            {children}
        </button>
    )
}