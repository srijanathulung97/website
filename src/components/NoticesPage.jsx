import React, { useState, useEffect } from 'react';
import './NoticesPage.css';

// Import your PDF asset
import applicationFormPdf from '../assets/Downloads/Application-form-RBB-Securities.pdf';

export default function NoticesPage() {
  // Active Tab State: 'all' | 'notice-1' | 'notice-2'
  const [activeTab, setActiveTab] = useState('notice-1');
  
  // Track viewed documents to toggle eye icons (fa-eye vs fa-eye-slash)
  const [viewedDocs, setViewedDocs] = useState({});

  // Reset eye icons when returning focus to the window
  useEffect(() => {
    const handleFocus = () => {
      setViewedDocs({});
    };

    window.addEventListener('focus', handleFocus);
    return () => {
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  const handleDocClick = (docId) => {
    setViewedDocs((prev) => ({
      ...prev,
      [docId]: true,
    }));
  };

  return (
    <div className="notices-page-wrapper">
      {/* Header Title Banner */}
      <section className="page-title-banner">
        <div className="notices-banner-container">
          <h1>Notices</h1>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="notices-main-container">
        <div className="content-card">
          <div className="notices-grid-row">
            
            {/* LEFT SIDEBAR TAB SELECTIONS */}
            <div className="sidebar-column">
              <div className="sidebar-menu">
                {/* Main Notices Block Header */}
                <div
                  className={`sidebar-item header-label ${activeTab === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveTab('all')}
                >
                  <span>Notices</span>
                </div>

                {/* Sub Tab Options */}
                <div
                  className={`sidebar-item ${activeTab === 'notice-1' ? 'active' : ''}`}
                  onClick={() => setActiveTab('notice-1')}
                >
                  <span>Notice</span>
                  <i className="fa-solid fa-arrow-right arrow-icon"></i>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT DISPLAY AREA */}
            <div className="content-column">
              <div className="document-pane">
                
                {/* Context Description when Main Notices Header is clicked */}
                {activeTab === 'all' && (
                  <div className="pane-instruction mb-4 font-italic text-muted active-pane-text">
                    Welcome to the R.B.B Securities Notice Board. Below you will find active corporate notices, regulatory announcements, and official publications.
                  </div>
                )}

                {/* Tab 1 Panel: Notice 1 */}
                {(activeTab === 'notice-1' || activeTab === 'all') && (
                  <div className="content-pane active-pane">
                    <h2 className="pane-title">Notice</h2>
                    <p className="pane-instruction">
                      Stay updated with our latest general announcements, press releases, and corporate updates.
                    </p>
                    <ul className="download-list">
                      <li className="download-file-item">
                        {/* OPENS DIRECTLY IN NEW TAB */}
                        <a
                          href={applicationFormPdf}
                          className="download-file-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => handleDocClick('notice1-doc1')}
                        >
                          <span>Application form R.B.B Securities</span>
                          <i
                            className={`fa-regular ${
                              viewedDocs['notice1-doc1'] ? 'fa-eye' : 'fa-eye-slash'
                            } file-icon-custom`}
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}