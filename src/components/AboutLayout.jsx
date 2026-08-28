import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './AboutLayout.css';

const sidebarTabs = [
  { path: '/about', label: 'About Us', exact: true },
  { path: '/about/introduction', label: 'Introduction' },
  { path: '/about/bod', label: 'BOD' },
  { path: '/about/team', label: 'Our Team' },
];

export default function AboutLayout({ children }) {
  const location = useLocation();

  const getHeaderTitle = () => {
    switch (location.pathname) {
      case '/about/introduction':
        return 'INTRODUCTION';
      case '/about/bod':
        return 'BOARD OF DIRECTORS';
      case '/about/team':
        return 'OUR TEAM';
      default:
        return 'ABOUT US';
    }
  };

  return (
    <div className="about-layout-wrapper">
      {/* Dynamic Animated Hero Banner */}
      <section className="hero-banner">
        <div className="container">
          <h1 className="hero-title">{getHeaderTitle()}</h1>
        </div>
      </section>

      {/* Main White Content Card Container */}
      <section className="content-wrapper">
        <div className="container">
          <div className="about-card-container">
            {/* Flex Grid Row to place Sidebar and Content Side-by-Side */}
            <div className="about-grid-row">
              
              {/* Left Sidebar Pane */}
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

              {/* Right Content Pane */}
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