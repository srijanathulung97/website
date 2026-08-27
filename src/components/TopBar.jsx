import React, { useState, useEffect, useRef } from 'react';
import './TopBar.css';

export default function TopBar() {
  const [dateTime, setDateTime] = useState(new Date());
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Live timer tick
  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Close dropdown when user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formattedTime = dateTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  const formattedDate = dateTime.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="topbar">
      <div className="container topbar-inner">
        {/* LEFT SIDE INFO */}
        <ul className="nav-list">
          <li>Office Hours: 9:00 AM – 5:00 PM (Monday – Friday)</li>
          <li><span className="separator">|</span> Contact: 01-5921896 / 95</li>
          <li><span className="separator">|</span> Today: <span id="today-date">{formattedDate}</span></li>
          <li><span className="separator">|</span> Time: <span id="live-time">{formattedTime}</span></li>
        </ul>

        {/* RIGHT ACTION BUTTONS */}
        <div className="right-menu">
          <div className="dropdown-wrapper">
            <a 
              href="https://nepalstock.com.np/" 
              target="_blank" 
              rel="noreferrer" 
              className="topbar-btn"
            >
              Live data
            </a>
          </div>

          <div 
            className="dropdown-wrapper" 
            ref={dropdownRef}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button 
              type="button" 
              className={`topbar-btn login-btn ${isDropdownOpen ? 'active' : ''}`}
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              Login
            </button>

            {isDropdownOpen && (
              <div className="dropdown-menu">
                <a 
                  href="https://tms97.nepsetms.com.np/" 
                  target="_blank" 
                  rel="noreferrer"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  TMS Login
                </a>
                <a 
                  href="https://meroshare.cdsc.com.np/#/login" 
                  target="_blank" 
                  rel="noreferrer"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  MeroShare
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}