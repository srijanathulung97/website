import React from 'react';
import DownloadLayout from './DownloadLayout';

const kycFiles = [
  { title: "Individual Client Registration Form.pdf", url: "/assets/Downloads/KYC Complete Form.pdf", sampleUrl: "/assets/Downloads/KYC Sample(Individual) and Required form.pdf" },
  { title: "Corporate Client Registration Form.pdf", url: "/assets/Downloads/Corporate Client Registration Form.pdf", sampleUrl: "/assets/Downloads/TMS Corporate Sample Form.pdf" },
  { title: "Buy Sell Order", url: "/assets/Downloads/Buy Sell Order.pdf" },
  { title: "TMS Closing Form", url: "/assets/Downloads/TMS Closing Form.pdf" },
  { title: "TMS Minor to Major Form", url: "/assets/Downloads/TMS Minor to Major.pdf" },
  { title: "TMS Update Form", url: "/assets/Downloads/TMS Update Form.pdf" },
  { title: "Agreement Form", url: "/assets/Downloads/TMS Agreement.pdf" }
];

const dematFiles = [
  { title: "Demat Form Complete Individual.pdf", url: "/assets/Downloads/1. Demat Form Complete Individual.pdf", sampleUrl: "/assets/Downloads/Demat Sample form and required document.pdf" },
  { title: "DP corporate Form 2000.pdf", url: "/assets/Downloads/DP corporate Form 2000.pdf", sampleUrl: "/assets/Downloads/Dp Corporate form Sample.pdf" },
  { title: "Demat Agreement", url: "/assets/Downloads/Demat Agreement.pdf" },
  { title: "Demat Minor to Major Form", url: "/assets/Downloads/DEMAT Minor to Major.pdf" },
  { title: "WACC Manual Entry Form", url: "/assets/Downloads/WACC Manual entry form.pdf" },
  { title: "DRN Form", url: "/assets/Downloads/4. DRN Form.pdf" },
  { title: "Debit Instruction Slip", url: "/assets/Downloads/9. Debit Instruction Slip.pdf" }
];

export default function AllFormsPage() {
  return (
    <DownloadLayout>
      <div className="key-animated">
        <h2 className="title-navy">Forms Download</h2>
        <p className="subtitle-gray">All Client Forms & Documents</p>
        <hr className="divider-line" />

        <p className="body-text" style={{ color: '#4a5568', lineHeight: '1.65', marginBottom: '25px' }}>
          Welcome to the R.B.B. Securities download center. Download, print, and fill out the required client registration forms, agreement documents, trading orders, or depository forms below to complete your account setup and services.
        </p>

        {/* KYC Forms Section */}
        <h3 className="title-navy" style={{ fontSize: '18px', marginTop: '20px' }}>KYC Forms</h3>
        <ul className="download-list-wrapper" style={{ marginBottom: '30px' }}>
          {kycFiles.map((file, idx) => (
            <li key={`kyc-${idx}`} className="download-list-item">
              <a href={file.url} target="_blank" rel="noopener noreferrer" className="file-link-title">
                <span className="pdf-icon-symbol">📄</span>
                <span>{file.title}</span>
              </a>

              {file.sampleUrl && (
                <a href={file.sampleUrl} target="_blank" rel="noopener noreferrer" className="sample-badge-btn">
                  <span>📥</span> Sample Form
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Demat Forms Section */}
        <h3 className="title-navy" style={{ fontSize: '18px' }}>Demat Forms</h3>
        <ul className="download-list-wrapper">
          {dematFiles.map((file, idx) => (
            <li key={`demat-${idx}`} className="download-list-item">
              <a href={file.url} target="_blank" rel="noopener noreferrer" className="file-link-title">
                <span className="pdf-icon-symbol">📄</span>
                <span>{file.title}</span>
              </a>

              {file.sampleUrl && (
                <a href={file.sampleUrl} target="_blank" rel="noopener noreferrer" className="sample-badge-btn">
                  <span>📥</span> Sample Form
                </a>
              )}
            </li>
          ))}
        </ul>

      </div>
    </DownloadLayout>
  );
}