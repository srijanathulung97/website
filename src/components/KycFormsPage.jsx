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

export default function KycFormsPage() {
  return (
    <DownloadLayout>
      <div className="key-animated">
        <h2 className="title-navy">KYC Documents</h2>
        <p className="subtitle-gray">Client Registration & Order Forms</p>
        <hr className="divider-line" />

        <ul className="download-list-wrapper">
          {kycFiles.map((file, idx) => (
            <li key={idx} className="download-list-item">
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