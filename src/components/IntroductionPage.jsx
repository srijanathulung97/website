import React from 'react';
import AboutLayout from './AboutLayout';
import './AboutPage.css'; // Reusing the exact same CSS file

export default function IntroductionPage() {
  return (
    <AboutLayout>
      <div className="about-card-container key-animated">
        <h2 className="title-navy">Welcome to R.B.B. Securities Company Limited</h2>
        <p className="subtitle-gray">Introduction</p>
        
        {/* Simple Gray Horizontal Divider Line */}
        <hr className="divider-line" />
        
        {/* Justified Body Text */}
        <p className="body-text">
          Welcome to R.B.B Securities Company Limited, one of Nepal’s emerging stockbrokers providing top-tier brokerage services to investors across the country. As a wholly owned subsidiary of Rastriya Banijya Bank Limited (R.B.B), we bring a unique level of trust, security, and financial strength to the market.

<br/><br/>We make investing in the stock market safe, simple, and reliable. Licensed by the Securities Board of Nepal (SEBON), a member of the Nepal Stock Exchange (NEPSE), and Depository Participant (DP), we operate under the highest standards of regulatory compliance.
        </p>
        
       
      </div>
    </AboutLayout>
  );
}