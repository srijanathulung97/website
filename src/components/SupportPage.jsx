import React from 'react';
import ServicesLayout from './ServicesLayout';

export default function SupportPage() {
  return (
    <ServicesLayout>
      <div className="about-card-container key-animated">
        <h2 className="title-navy">Customer Support</h2>
        <p className="subtitle-gray">Help & Assistance</p>
        <hr className="divider-line" />
        
        <p className="body-text">
          At R.B.B Securities, your investment journey is backed by our dedicated support team. Whether you need assistance with your Trade Management System (TMS) login, Demat account, or have general inquiries, we are here to help.
        </p>

        <div style={{ backgroundColor: '#f0f4f8', padding: '20px', borderRadius: '6px', marginTop: '20px' }}>
          <h4 style={{ color: '#0c1b40', marginBottom: '8px', fontSize: '16px' }}>Contact Information</h4>
          <p style={{ margin: '4px 0', fontSize: '14.5px', color: '#4a5568' }}>📞 <strong>Phone:</strong> 01-5921896 / 95</p>
          <p style={{ margin: '4px 0', fontSize: '14.5px', color: '#4a5568' }}>✉️ <strong>Email:</strong> securitiesrbb@gmail.com</p>
        </div>
      </div>
    </ServicesLayout>
  );
}