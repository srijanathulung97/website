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
import ServicesOverviewPage from './components/ServicesOverviewPage';
import DepositoryPage from './components/DepositoryPage';
import BrokeragePage from './components/BrokeragePage';
import SupportPage from './components/SupportPage';
import CareerPage from './components/CareerPage';
import NoticesPage from './components/NoticesPage';
import FaqPage from './components/FaqPage';
import ContactPage from './components/ContactPage';

import AllFormsPage from './components/AllFormsPage';
import KycFormsPage from './components/KycFormsPage';
import DematFormsPage from './components/DematFormsPage';

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
          
          {/* Services Routes */}
          <Route path="/services" element={<ServicesOverviewPage />} />
          <Route path="/services/depository" element={<DepositoryPage />} />
          <Route path="/services/brokerage" element={<BrokeragePage />} />
          <Route path="/services/support" element={<SupportPage />} />

          {/* Download Routes (Fixed: Removed nested <Routes> container) */}
          <Route path="/downloads" element={<AllFormsPage />} />
          <Route path="/downloads/kyc" element={<KycFormsPage />} />
          <Route path="/downloads/demat" element={<DematFormsPage />} />

          <Route path="/careers" element={<CareerPage />} />
          <Route path="/career" element={<CareerPage />} />
          
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/notice" element={<NoticesPage />} />

          <Route path="/faq" element={<FaqPage />} />
          <Route path="/faqs" element={<FaqPage />} />

          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}