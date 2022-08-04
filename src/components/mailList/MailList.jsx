import React from 'react'
import './mailList.css'
export default function MailList() {
  return (
    <div className='mail'>
        <h1 className='mail_title'>Save time, save money!</h1>
        <span className='mail_description'>Sign up and we'll sebd the best deals to you</span>
        <div className='mail_input_container'>
            <input 
                type="text"
                placeholder = "Your email"
            />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
