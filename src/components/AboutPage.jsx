import React from 'react';
import AboutLayout from './AboutLayout';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <AboutLayout>
      <div className="about-card-container key-animated">
        <h2 className="title-navy">About R.B.B. Securities Company Limited</h2>
        <p className="subtitle-gray">Company Overview</p>
        
        {/* Simple Horizontal Divider Line */}
        <hr className="divider-line" />
        
        {/* Justified Body Content */}
        <p className="body-text">
          As a wholly owned subsidiary of Rastriya Banijya Bank Limited (RBB), 
          R.B.B. Securities Company Limited is a trusted stockbroker licensed 
          by SEBON, NEPSE, and DP. Built on financial strength and reliability, 
          we are committed to empowering investors with seamless trading and top-tier services.
        </p>

        {/* Credibility Badges */}
        
      </div>
    </AboutLayout>
  );
}