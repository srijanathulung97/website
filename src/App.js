import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout Header/Footer Components
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import NoticeTicker from './components/NoticeTicker';
import Footer from './components/Footer';

// Page Views
import Home from './components/Home';
import AboutPage from './components/AboutPage';
import IntroductionPage from './components/IntroductionPage';
import BodPage from './components/BodPage';
import TeamPage from './components/TeamPage';
import CareerPage from './components/CareerPage';

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Navbar />
      <NoticeTicker />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/introduction" element={<IntroductionPage />} />
          <Route path="/about/bod" element={<BodPage />} />
          <Route path="/about/team" element={<TeamPage />} />
          
          {/* ✅ Corrected Career Route Paths */}
          <Route path="/careers" element={<CareerPage />} />
          <Route path="/career" element={<CareerPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}