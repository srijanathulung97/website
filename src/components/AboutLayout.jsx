import React from 'react';
import { NavLink } from 'react-router-dom';
import './AboutLayout.css';

const sidebarTabs = [
  { path: '/about', label: 'About Us', exact: true },
  { path: '/about/introduction', label: 'Introduction' },
  { path: '/about/bod', label: 'BOD' },
  { path: '/about/team', label: 'Our Team' },
];

export default function AboutLayout({ children }) {
  return (
    <div className="about-layout-wrapper">
      {/* 1. Page Title Banner (Fixed Title, animates only once on first load) */}
      <section className="hero-banner">
        <div className="container">
          <h1 className="hero-title">ABOUT US</h1>
        </div>
      </section>

      {/* Main Content Card Outer Container */}
      <section className="content-wrapper">
        <div className="container">
          <div className="about-card-container">
            <div className="about-grid-row">
              
              {/* 2. Left Sidebar Pane (Animates only on initial page load) */}
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

              {/* 3. Right Content Pane (No key prop = No animation on tab switches) */}
              <main className="about-content-pane animate-right-pane">
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