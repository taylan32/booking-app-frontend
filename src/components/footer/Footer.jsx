import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <footer className='footer'>
        <div className='footer_lists'>
            <ul className='footer_list'>
                <li className='footer_list_item'>Countries</li>
                <li className='footer_list_item'>Regions</li>
                <li className='footer_list_item'>Cities</li>
                <li className='footer_list_item'>Districts</li>
                <li className='footer_list_item'>Airports</li>
                <li className='footer_list_item'>Hotels</li>
            </ul>

            <ul className='footer_list'>
                <li className='footer_list_item'>Homes</li>
                <li className='footer_list_item'>Apartments</li>
                <li className='footer_list_item'>Resorts</li>
                <li className='footer_list_item'>Villas</li>
                <li className='footer_list_item'>Hostels</li>
                <li className='footer_list_item'>Guest houses</li>
            </ul>

            <ul className='footer_list'>
                <li className='footer_list_item'>Unique places to stay</li>
                <li className='footer_list_item'>Discover monthly stays</li>
                <li className='footer_list_item'>All destinations</li>
                <li className='footer_list_item'>Discover</li>
                <li className='footer_list_item'>Unpacked: Travel articles</li>
                <li className='footer_list_item'>Travel communities</li>
            </ul>

            <ul className='footer_list'>
                <li className='footer_list_item'>Car rental</li>
                <li className='footer_list_item'>Flight finder</li>
                <li className='footer_list_item'>Restaurant reservations</li>
                <li className='footer_list_item'>Booking.com for Travel Agents</li>
            </ul>

            <ul className='footer_list'>
                <li className='footer_list_item'>About Booking.com</li>
                <li className='footer_list_item'>Customer Service Help</li>
                <li className='footer_list_item'>Careers</li>
                <li className='footer_list_item'>Sustainability</li>
                <li className='footer_list_item'>Press center</li>
                <li className='footer_list_item'>Safety Resource Center</li>
            </ul>
        </div>
        <div className='footer_text'>Copright @copy 2022 booking copy</div>
    </footer>
  )
}
