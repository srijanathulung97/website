import React from 'react';
import './NoticeTicker.css';

export default function NoticeTicker() {
  return (
    <div className="notice-ticker-wrapper">
      <div className="notice-ticker-container">
        {/* TICKER BADGE */}
        {/* <div className="ticker-badge">
          <span className="badge-pulse"></span>
          WELCOME
        </div> */}

        {/* SCROLLING WELCOME MESSAGE AREA */}
        <div className="ticker-track-container">
          <div className="ticker-track">
            {/* Repeated twice to create an infinite, seamless loop */}
            {[1, 2].map((_, index) => (
              <div key={index} className="ticker-content-group">
                <span className="ticker-text highlight">
                  Welcome to RBB Securities Limited
                </span>
                <span className="ticker-separator">•</span>
                <span className="ticker-text">
                  Your Trusted Partner for Stock Brokerage, Depository Services & Financial Growth
                </span>
                <span className="ticker-separator">•</span>
                <span className="ticker-text accent">
                  Trade Smart, Invest Safe with R.B.B. Security Limited Company
                </span>
                <span className="ticker-separator">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* QUICK LINK BUTTON */}
        {/* <a href="contact.html" className="ticker-btn">
          Get Started ➔
        </a> */}
      </div>
    </div>
  );
}