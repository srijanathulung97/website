import React, { useState } from 'react';
import './CareerPage.css';

export default function CareerPage() {
  // Active Tab State: 'all' | 'vacancies'
  const [activeTab, setActiveTab] = useState('vacancies');

  const handleHeaderClick = () => {
    setActiveTab('all');
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="career-page-wrapper">
      {/* Standalone Header Title Banner */}
      <section className="page-title-banner">
        <div className="career-banner-container">
          <h1>Careers</h1>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="career-main-container">
        <div className="content-card">
          <div className="career-grid-row">
            
            {/* LEFT SIDEBAR TAB SELECTIONS */}
            <div className="sidebar-column">
              <div className="sidebar-menu">
                {/* Clickable Career Openings Header */}
                <div
                  className={`sidebar-item header-label ${activeTab === 'all' ? 'active' : ''}`}
                  onClick={handleHeaderClick}
                >
                  <span>Career Openings</span>
                </div>

                {/* Sub-tab Option */}
                <div
                  className={`sidebar-item ${activeTab === 'vacancies' ? 'active' : ''}`}
                  onClick={() => handleTabClick('vacancies')}
                >
                  <span>Current Vacancies</span>
                  <i className="fa-solid fa-arrow-right arrow-icon"></i>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT DISPLAY AREA */}
            <div className="content-column">
              <div className="document-pane">
                
                {/* Dynamic Context Description */}
                {activeTab === 'all' && (
                  <div className="pane-instruction mb-4 font-italic text-muted active-pane-text">
                    Welcome to the R.B.B Securities Career Portal. Browse our current job openings, stay updated on official recruitment announcements to find the right opportunity for your career growth.
                  </div>
                )}

                {/* Current Vacancies Panel */}
                {(activeTab === 'vacancies' || activeTab === 'all') && (
                  <div className="content-pane active-pane">
                    <h2 className="pane-title">Current Vacancies</h2>
                    <p className="pane-instruction">
                      We currently have no active job openings.
                    </p>
                    <div className="current_vacancy mt-4">
                      <p className="fw-bold text-muted">Open Position</p>
                      <div className="alert-info-box">
                        <span>No any Vacancy!</span>
                      </div>
                    </div>
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