import React from 'react'
import './navbar.css'
export default function Navbar() {

  return (
    <div className='navbar'>
        <div className="nav_container">
            <span className='logo'>Booking.com</span>
            <div className='nav_items'>
                <button className = "nav_button">Register</button>
                <button className = "nav_button">Login</button>
            </div>
        </div>
    </div>
  )
}
