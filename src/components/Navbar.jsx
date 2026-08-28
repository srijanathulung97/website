import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile drawer when a link is clicked
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="main-navbar">
      <div className="navbar-container">
        {/* LOGO SECTION */}
        <div className="navbar-logo">
          <Link to="/" onClick={closeMobileMenu}>
            <img src="/rbbs_logo.svg" alt="RBB Securities Logo" />
          </Link>
        </div>

        {/* HAMBURGER TOGGLE FOR MOBILE */}
        <button 
          className="hamburger-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>

        {/* NAVIGATION LINKS */}
        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-item" onClick={closeMobileMenu}>Home</Link>

          {/* ABOUT US DROPDOWN */}
          <div className="nav-dropdown">
            <Link to="/about" className="nav-item dropdown-toggle" onClick={closeMobileMenu}>
              About Us <span className="arrow">▾</span>
            </Link>
            <div className="dropdown-content">
              <Link to="/about/introduction" onClick={closeMobileMenu}>Introduction</Link>
              <Link to="/about/bod" onClick={closeMobileMenu}>BOD</Link>
              <Link to="/about/team" onClick={closeMobileMenu}>Our Team</Link>
            </div>
          </div>

          <Link to="/careers" className="nav-item" onClick={closeMobileMenu}>Careers</Link>
          <Link to="/notices" className="nav-item" onClick={closeMobileMenu}>Notices</Link>

          {/* OUR SERVICES DROPDOWN */}
          <div className="nav-dropdown">
            <Link to="/services" className="nav-item dropdown-toggle" onClick={closeMobileMenu}>
              Our Services <span className="arrow">▾</span>
            </Link>
            <div className="dropdown-content">
              <Link to="/services/demat" onClick={closeMobileMenu}>Depository Services</Link>
              <Link to="/services/pms" onClick={closeMobileMenu}>Customer Support</Link>
              <Link to="/services/brokerage" onClick={closeMobileMenu}>Brokerage Services</Link>
            </div>
          </div>

          {/* DOWNLOADS DROPDOWN */}
          <div className="nav-dropdown">
            <Link to="/downloads" className="nav-item dropdown-toggle" onClick={closeMobileMenu}>
              Downloads <span className="arrow">▾</span>
            </Link>
            <div className="dropdown-content">
              <Link to="/downloads/kyc" onClick={closeMobileMenu}>KYC Forms</Link>
              <Link to="/downloads/demat" onClick={closeMobileMenu}>Demat Forms</Link>
            </div>
          </div>

          <Link to="/faq" className="nav-item" onClick={closeMobileMenu}>FAQs</Link>
          <Link to="/contact" className="nav-item" onClick={closeMobileMenu}>Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}