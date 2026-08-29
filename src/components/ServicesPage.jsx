import React from 'react';
import ServicesLayout from './ServicesLayout';
import './AboutPage.css'; // Reusing your existing AboutPage.css for exact typography and tables

export default function ServicesPage() {
  return (
    <ServicesLayout>
      <div className="about-card-container key-animated">
        <h2 className="title-navy">Depositary Services at R.B.B Securities Company Limited</h2>
        <p className="subtitle-gray">Comprehensive Depository Solutions</p>
        
        <hr className="divider-line" />
        
        <p className="body-text">
          R.B.B Securities Company Limited is a registered Depository Participant of CDS and Clearing Limited, offering comprehensive depository services to its valued clients. These services encompass the electronic maintenance and transfer of ownership records for a wide range of financial instruments, including stocks, bonds, debentures, and mutual funds.
        </p>

        <p className="body-text" style={{ marginTop: '14px' }}>
          Our depository services are facilitated through DEMAT accounts and include dematerialization, re-materialization, pledging, and share transfers. With a robust infrastructure and dedicated support team, R.B.B Securities ensures efficient and seamless execution of all depository-related activities.
        </p>

        {/* List of Features */}
        <ol className="body-text" style={{ paddingLeft: '20px', marginTop: '16px', lineHeight: '2' }}>
          <li>Opening of DEMAT and Meroshare Accounts</li>
          <li>Dematerialization of Physical Share Certificates</li>
          <li>Re-materialization of Electronic Securities</li>
          <li>Stock Pledging and Release</li>
          <li>Family Transfers and Transfers upon Death</li>
          <li>Settlement of Trades through Share Transfer or Receipt</li>
        </ol>

        {/* Rates Table matching your styling */}
        <div style={{ overflowX: 'auto', marginTop: '24px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ backgroundColor: '#f8f9fa', color: '#0c1b40', textAlign: 'left' }}>
                <th style={{ padding: '12px', border: '1px solid #e3e6ea', width: '10%' }}>S.N.</th>
                <th style={{ padding: '12px', border: '1px solid #e3e6ea', width: '60%' }}>Transaction Type</th>
                <th style={{ padding: '12px', border: '1px solid #e3e6ea', width: '30%' }}>Amount</th>
              </tr>
            </thead>
            <tbody style={{ color: '#4a5568' }}>
              <tr>
                <td style={{ padding: '10px 12px', border: '1px solid #e3e6ea' }}>1</td>
                <td style={{ padding: '10px 12px', border: '1px solid #e3e6ea' }}>Demat Account Opening Charges</td>
                <td style={{ padding: '10px 12px', border: '1px solid #e3e6ea' }}>Rs. 50</td>
              </tr>
              <tr style={{ backgroundColor: '#cfe5f1' }}>
                <td style={{ padding: '10px 12px', border: '1px solid #e3e6ea' }}>2</td>
                <td style={{ padding: '10px 12px', border: '1px solid #e3e6ea' }}>Annual Account Maintenance Charges</td>
                <td style={{ padding: '10px 12px', border: '1px solid #e3e6ea' }}>Rs. 100 per Annum</td>
              </tr>
              <tr>
                <td style={{ padding: '10px 12px', border: '1px solid #e3e6ea' }}>3</td>
                <td style={{ padding: '10px 12px', border: '1px solid #e3e6ea' }}>Mero Share Charges</td>
                <td style={{ padding: '10px 12px', border: '1px solid #e3e6ea' }}>Rs. 50 per Annum</td>
              </tr>
              <tr style={{ backgroundColor: '#cfe5f1' }}>
                <td style={{ padding: '10px 12px', border: '1px solid #e3e6ea' }}>4</td>
                <td style={{ padding: '10px 12px', border: '1px solid #e3e6ea' }}>Share Transfer Charges</td>
                <td style={{ padding: '10px 12px', border: '1px solid #e3e6ea' }}>Rs. 25 per Script</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ServicesLayout>
  );
}