import React from 'react';
import { NavLink } from 'react-router-dom';
import './AboutLayout.css';

const sidebarTabs = [
  { path: '/services', label: 'Our Services', exact: true },
  { path: '/services/depository', label: 'Depository Services' },
  { path: '/services/brokerage', label: 'Brokerage Services' },
  { path: '/services/support', label: 'Customer Support' },
];

export default function ServicesLayout({ children }) {
  return (
    <div className="about-layout-wrapper">
      {/* Static Hero Banner Title (Will remain "OUR SERVICES" for all sub-tabs) */}
      <section className="hero-banner">
        <div className="container">
          <h1 className="hero-title">OUR SERVICES</h1>
        </div>
      </section>

      {/* Main White Content Card Container */}
      <section className="content-wrapper">
        <div className="container">
          <div className="about-card-container">
            <div className="about-grid-row">
              
              {/* Left Sidebar Menu */}
              <aside className="about-sidebar-pane">
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

              {/* Right Dynamic Content Pane */}
              <main className="about-content-pane">
                <div className="key-animated">
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