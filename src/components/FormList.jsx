import React from 'react';

export default function FormList({ items }) {
  return (
    <ul className="download-list-wrapper">
      {items.map((file) => (
        <li key={file.id} className="download-list-item">
          <a 
            href={file.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="file-link-title"
          >
            <span className="pdf-icon-symbol">📄</span>
            <span>{file.title}</span>
          </a>

          {file.sampleUrl && (
            <a 
              href={file.sampleUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="sample-badge-btn"
            >
              <span>📥</span> Sample Form
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}