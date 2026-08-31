import React from 'react';
import DownloadLayout from './DownloadLayout';

const dematFiles = [
  { title: "Demat Form Complete Individual.pdf", url: "/assets/Downloads/1. Demat Form Complete Individual.pdf", sampleUrl: "/assets/Downloads/Demat Sample form and required document.pdf" },
  { title: "DP corporate Form 2000.pdf", url: "/assets/Downloads/DP corporate Form 2000.pdf", sampleUrl: "/assets/Downloads/Dp Corporate form Sample.pdf" },
  { title: "Demat Agreement", url: "/assets/Downloads/Demat Agreement.pdf" },
  { title: "Demat Minor to Major Form", url: "/assets/Downloads/DEMAT Minor to Major.pdf" },
  { title: "WACC Manual Entry Form", url: "/assets/Downloads/WACC Manual entry form.pdf" },
  { title: "DRN Form", url: "/assets/Downloads/4. DRN Form.pdf" },
  { title: "Debit Instruction Slip", url: "/assets/Downloads/9. Debit Instruction Slip.pdf" }
];

export default function DematFormsPage() {
  return (
    <DownloadLayout>
      <div className="key-animated">
        <h2 className="title-navy">Demat Forms</h2>
        <p className="subtitle-gray">Depository & Maintenance Forms</p>
        <hr className="divider-line" />

        <ul className="download-list-wrapper">
          {dematFiles.map((file, idx) => (
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