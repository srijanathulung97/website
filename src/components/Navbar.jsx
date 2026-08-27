import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="main-navbar">
      <div className="navbar-container">
        {/* LOGO SECTION */}
        <div className="navbar-logo">
          <a href="/">
<img src="/rbbs_logo.svg" alt="RBB Securities Logo" />          </a>
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
          <a href="home.html" className="nav-item">Home</a>

          {/* ABOUT US DROPDOWN */}
          <div className="nav-dropdown">
            <a href="about.html#about-us" className="nav-item dropdown-toggle">
              About Us <span className="arrow">▾</span>
            </a>
            <div className="dropdown-content">
              <a href="about.html#introduction">Introduction</a>
              <a href="about.html#BOD">BOD</a>
              <a href="about.html#team">Our Team</a>
            </div>
          </div>

          <a href="careers.html" className="nav-item">Careers</a>
          <a href="notices.html" className="nav-item">Notices</a>

          {/* OUR SERVICES DROPDOWN */}
          <div className="nav-dropdown">
            <a href="services.html" className="nav-item dropdown-toggle">
              Our Services <span className="arrow">▾</span>
            </a>
            <div className="dropdown-content">
              <a href="services.html#demat">Depository Services</a>
              <a href="services.html#pms">Customer Support</a>
              <a href="services.html#brokerage">Brokerage Services</a>
            </div>
          </div>

          {/* DOWNLOADS DROPDOWN */}
          <div className="nav-dropdown">
            <a href="downloads.html" className="nav-item dropdown-toggle">
              Downloads <span className="arrow">▾</span>
            </a>
            <div className="dropdown-content">
              <a href="downloads.html#kyc">KYC Forms</a>
              <a href="downloads.html#demat">Demat Forms</a>
            </div>
          </div>

          <a href="faq.html" className="nav-item">FAQs</a>
          <a href="contact.html" className="nav-item">Contact Us</a>
        </div>
      </div>
    </nav>
  );
}