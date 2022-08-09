import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";
export default function Navbar() {

  const {user} = useContext(AuthContext)

  return (
    <nav className="navbar">
      <div className="nav_container">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Booking.com</span>
        </Link>
        {user ? user?.email : <div className="nav_items">
          <button className="nav_button">Register</button>
          <button className="nav_button">Login</button>
        </div>}
      </div>
    </nav>
  );
}
