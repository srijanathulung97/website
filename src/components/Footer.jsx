import React, { useEffect, useRef } from 'react';
import './Footer.css';

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const footerElement = footerRef.current;
    if (!footerElement) return;

    const observerOptions = {
      root: null,
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    observer.observe(footerElement);

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  return (
    <footer ref={footerRef} className="rbb-footer animate-footer">
      <div className="footer-top-accent"></div>

      <div className="footer-inner-container">
        <div className="footer-main-grid">
          
          {/* Column 1: Identity & Brand Contacts */}
          <div className="footer-brand-pane">
            <div className="footer-logo-box">
              <img src="/rbbs_logo.svg" alt="R.B.B Securities Company Limited Logo" />
              <div className="brand-text-container">
                <h3 className="brand-title-text">R.B.B Securities</h3>
                <span className="brand-subtitle">Company Limited</span>
              </div>
            </div>

            <div className="footer-contact-details">
              <p className="badge-item">
                <span className="badge-icon">📜</span> Licenced by Securities Board of Nepal (SEBON)
              </p>
              <p className="badge-item">
                <span className="badge-icon">🏷️</span> Stock Broker No. <strong>97</strong>
              </p>
              <div className="contact-list">
                <p><strong>Phone:</strong> +977 985-1364896</p>
                <p><strong>Email:</strong> info@rbbsecurities.com.np</p>
                <p><strong>For KYC:</strong> securitiesrbb@gmail.com</p>
                <p><strong>Head Office:</strong> Durbarmarg-01, Kathmandu (RBB Building)</p>
              </div>
            </div>

            {/* Minimalist Logo-Only Social Icons */}
            <div className="footer-social-section">
              <h4 className="footer-sub-heading">Connect With Us</h4>
              <div className="social-icons-row">
                
                {/* Facebook Icon */}
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook"
                  className="social-logo-btn facebook"
                >
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram Icon */}
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                  className="social-logo-btn instagram"
                >
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Twitter / X Icon */}
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Twitter / X"
                  className="social-logo-btn twitter"
                >
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

              </div>
            </div>
          </div>

          {/* Column 2: Useful Links & Quick Access */}
          <div className="footer-links-column">
            <h4 className="footer-column-heading">Useful Links</h4>
            <ul className="footer-links-list">
              <li><a href="https://www.sebon.gov.np/" target="_blank" rel="noopener noreferrer">Securities Board of Nepal</a></li>
              <li><a href="https://www.nepalstock.com/" target="_blank" rel="noopener noreferrer">Nepal Stock Exchange</a></li>
              <li><a href="https://cdsc.com.np/" target="_blank" rel="noopener noreferrer">CDS and Clearing Limited</a></li>
              <li><a href="https://merolagani.com/" target="_blank" rel="noopener noreferrer">Merolagani</a></li>
              <li><a href="https://main.un.org/securitycouncil/en/content/un-sc-consolidated-list" target="_blank" rel="noopener noreferrer">UN Consolidated Sanction List</a></li>
              <li><a href="https://moha.gov.np/page/targeted-sanction-list" target="_blank" rel="noopener noreferrer">MOHA Sanction List</a></li>
              <li><a href="https://www.fatf-gafi.org/en/countries/black-and-grey-lists.html" target="_blank" rel="noopener noreferrer">FATF Black & Grey List</a></li>
            </ul>

            <h4 className="footer-column-heading" style={{ marginTop: '30px' }}>Quick Access</h4>
            <ul className="footer-links-list">
              <li><a href="https://tms97.nepsetms.com.np/login" target="_blank" rel="noopener noreferrer">TMS97 Portal</a></li>
              <li><a href="https://meroshare.cdsc.com.np/#/login" target="_blank" rel="noopener noreferrer">Mero Share</a></li>
              <li><a href="https://www.rbb.com.np/" target="_blank" rel="noopener noreferrer">Rastriya Banijya Bank</a></li>
              <li><a href="downloads.html" target="_blank" rel="noopener noreferrer">Downloads Center</a></li>
            </ul>
          </div>

          {/* Column 3: Grievance Officer Profile */}
          <div className="footer-grievance-column">
            <h4 className="footer-column-heading">Grievance Officer</h4>
            <div className="grievance-card-modern">
              <div className="card-header-badge">Support & Help Desk</div>
              <div className="grievance-body">
                <div className="grievance-photo-wrapper">
                  <img 
                    src="/grievance_officer.jpg" 
                    alt="Grievance Officer" 
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = 'https://via.placeholder.com/120x120?text=Officer';
                    }}
                  />
                  <span className="online-status" title="Active Officer"></span>
                </div>
                <div className="grievance-details">
                  <h5 className="officer-name">Mr. Officer Name</h5>
                  <span className="officer-tag">Information & Grievance Officer</span>
                  
                  <div className="officer-contacts-group">
                    <a href="tel:+9779851364896" className="contact-chip">
                      <span className="chip-icon">📞</span> +977 985-1364896
                    </a>
                    <a href="tel:014000000" className="contact-chip">
                      <span className="chip-icon">☎️</span> 01-4XXXXXX
                    </a>
                    <a href="mailto:grievance@rbbsecurities.com.np" className="contact-chip email-chip">
                      <span className="chip-icon">✉️</span> grievance@rbbsecurities.com.np
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} R.B.B. Securities Company Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}