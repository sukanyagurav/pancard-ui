import React from 'react'
import logo from '../../assets/Group 27581.png';
const Header = () => {
  return (
   <header>
        <img src={logo} alt="secure icon" />

        <h1>PAN Verification</h1>
        <p>As per regulations, it is mandatory to verify your PAN details.</p>
  
   </header>
  )
}

export default Header
