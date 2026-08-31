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
      {/* 1. Page Title Banner (Animates first from top) */}
      <section className="hero-banner">
        <div className="container">
          <h1 className="hero-title">{getHeaderTitle()}</h1>
        </div>
      </section>

      {/* Main Content Card Outer Container */}
      <section className="content-wrapper">
        <div className="container">
          <div className="about-card-container">
            <div className="about-grid-row">
              
              {/* 2. Left Sidebar Pane (Animates second from bottom) */}
              <aside className="about-sidebar-pane animate-left-pane">
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

              {/* 3. Right Content Pane (Animates third on entry & re-animates on tab clicks) */}
              <main className="about-content-pane animate-right-pane">
                <div key={location.pathname} className="key-animated">
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