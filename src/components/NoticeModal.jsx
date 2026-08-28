import React, { useState } from 'react';
import './NoticeModal.css';

import noticeImg from '../assets/notices.jpg';
// import noticePdf from '../assets/notice.pdf'; // <-- Uncomment if using static PDF import

const DEFAULT_MEDIA = [
  { src: noticeImg, label: 'Important notice' },
];

export default function NoticeModal({ items = DEFAULT_MEDIA, onClose }) {
  const [mediaList, setMediaList] = useState(items);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!mediaList || mediaList.length === 0 || !mediaList[currentIndex]) {
    return null;
  }

  const currentMedia = mediaList[currentIndex];

  const handleNavigate = (direction) => {
    const total = mediaList.length;
    setCurrentIndex((prevIndex) => (prevIndex + direction + total) % total);
  };

  const handleCloseOne = () => {
    const updatedMedia = mediaList.filter((_, idx) => idx !== currentIndex);
    setMediaList(updatedMedia);

    if (updatedMedia.length === 0) {
      if (onClose) onClose();
    } else {
      setCurrentIndex((prevIndex) => (prevIndex >= updatedMedia.length ? 0 : prevIndex));
    }
  };

  return (
    <div className="modal-overlay is-active" id="global-pdf-modal">
      <div className="modal-box">
        {/* Header Bar */}
        <div className="modal-header-bar">
          <div className="header-actions-left">
            <button className="header-btn" onClick={onClose}>
              Close All
            </button>
          </div>

          <div className="header-actions-center">
            <button className="header-btn" onClick={() => handleNavigate(-1)}>
              ◀ Prev
            </button>
            <div className="divider" />
            <span className="modal-counter">
              {currentIndex + 1} / {mediaList.length}
            </span>
            <div className="divider" />
            <button className="header-btn" onClick={() => handleNavigate(1)}>
              Next ▶
            </button>
          </div>

          <button className="close-one-btn" onClick={handleCloseOne}>
            &times;
          </button>
        </div>

        {/* Media Container */}
        <div className="modal-body">
          {/* ========================================================= */}
          {/* OPTION 1: PHOTO MODE (CURRENTLY ACTIVE)                    */}
          {/* ========================================================= */}
          <img
            src={currentMedia.src}
            alt={currentMedia.label || 'Notice Image'}
            className="modal-media-img"
          />

          {/* ========================================================= */}
          {/* OPTION 2: PDF MODE (COMMENTED OUT)                        */}
          {/* (To use PDF, comment out the <img> above and uncomment this iframe) */}
          {/* ========================================================= */}
          {/* 
          <iframe
            src={currentMedia.src}
            title={currentMedia.label || 'PDF Document'}
            className="modal-media-iframe"
          /> 
          */}
        </div>

        {/* Footer Bar */}
        <div className="modal-footer-bar">
          <a
            href={currentMedia.src}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="view-details-btn"
          >
            {/* Toggle button label along with mode */}
            Download Image
            {/* View Details / Download PDF */}
          </a>
        </div>
      </div>
    </div>
  );
}