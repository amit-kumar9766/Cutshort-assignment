import React from 'react'
import companyLogo from '../assets/company-logo.png'
import "./title.css"

export const Title = () => {
  return (
    <div className="title-class">
      <img src={companyLogo} alt="company-logo" />
      <h3>Eden</h3>
    </div>
  )
}
