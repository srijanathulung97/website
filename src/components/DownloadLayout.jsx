import React from 'react';
import { NavLink } from 'react-router-dom';
import './DownloadLayout.css';

const sidebarTabs = [
  { path: '/downloads', label: 'Forms Download', exact: true },
  { path: '/downloads/kyc', label: 'KYC Forms' },
  { path: '/downloads/demat', label: 'Demat Forms' },
];

export default function DownloadLayout({ children }) {
  return (
    <div className="download-layout-wrapper">
      {/* 1. Page Title Banner */}
      <section className="hero-banner">
        <div className="container">
          <h1 className="hero-title">DOWNLOADS</h1>
        </div>
      </section>

      {/* Main Content Outer Container */}
      <section className="content-wrapper">
        <div className="container">
          <div className="download-card-container">
            <div className="download-grid-row">
              
              {/* 2. Left Sidebar Pane */}
              <aside className="download-sidebar-pane animate-left-pane">
                <nav className="sidebar-menu">
                  {sidebarTabs.map((tab) => (
                    <NavLink
                      key={tab.path}
                      to={tab.path}
                      end={tab.exact}
                      className={({ isActive }) =>
                        `sidebar-btn ${isActive ? 'active' : ''}`
                      }
                    >
                      <span>{tab.label}</span>
                      <span className="arrow">→</span>
                    </NavLink>
                  ))}
                </nav>
              </aside>

              {/* 3. Right Content Pane */}
              <main className="download-content-pane animate-right-pane">
                <div className="content-body">
                  {children}
                </div>
              </main>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}