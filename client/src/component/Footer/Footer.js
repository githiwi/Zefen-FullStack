import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
    <p>&copy; 2023 ዘፈን Zefen All rights reserved.</p>
    <nav className="footer-nav">
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/privacy">Privacy Policy</Link>
    </nav>
  </footer>
  )
}
