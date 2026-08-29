import React from 'react';
import ServicesLayout from './ServicesLayout';

export default function BrokeragePage() {
  return (
    <ServicesLayout>
      <div className="about-card-container key-animated">
        <h2 className="title-navy">Brokerage Services</h2>
        <p className="subtitle-gray">Online Trading Via TMS</p>
        <hr className="divider-line" />
        
        <p className="body-text">
          R.B.B Securities Company Limited provides seamless Online Trading services through the Trade Management System (TMS). This platform enables clients to conveniently place buy and sell orders, manage collateral, and perform various trading functions.
        </p>

        <p className="fw-bold mt-4" style={{ color: '#0c1b40' }}>
          Brokerage Commission For Equity & Preference Shares
        </p>

        <div style={{ overflowX: 'auto', marginTop: '16px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ backgroundColor: '#f8f9fa', color: '#0c1b40', textAlign: 'left' }}>
                <th style={{ padding: '12px', border: '1px solid #e3e6ea', width: '10%' }}>S.N.</th>
                <th style={{ padding: '12px', border: '1px solid #e3e6ea', width: '60%' }}>Transaction Volume</th>
                <th style={{ padding: '12px', border: '1px solid #e3e6ea', width: '30%' }}>Service Charge</th>
              </tr>
            </thead>
            <tbody style={{ color: '#4a5568' }}>
              <tr>
                <td style={{ padding: '10px 12px', border: '1px solid #e3e6ea' }}>1</td>
                <td style={{ padding: '10px 12px', border: '1px solid #e3e6ea' }}>Up to Rs. 2,500</td>
                <td style={{ padding: '10px 12px', border: '1px solid #e3e6ea' }}>Flat Rs 10</td>
              </tr>
              <tr style={{ backgroundColor: '#cfe5f1' }}>
                <td style={{ padding: '10px 12px', border: '1px solid #e3e6ea' }}>2</td>
                <td style={{ padding: '10px 12px', border: '1px solid #e3e6ea' }}>From Rs. 2,501 to Rs. 50,000</td>
                <td style={{ padding: '10px 12px', border: '1px solid #e3e6ea' }}>0.36 percent</td>
              </tr>
              <tr>
                <td style={{ padding: '10px 12px', border: '1px solid #e3e6ea' }}>3</td>
                <td style={{ padding: '10px 12px', border: '1px solid #e3e6ea' }}>From Rs 50,001 to Rs. 5,00,000</td>
                <td style={{ padding: '10px 12px', border: '1px solid #e3e6ea' }}>0.33 percent</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ServicesLayout>
  );
}