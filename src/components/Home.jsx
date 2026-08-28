import React, { useState, useEffect } from 'react';
import HeroCarousel from './HeroCarousel';
import NoticeModal from './NoticeModal';
import './Home.css';

// Asset imports
import shareStockImg from '../assets/share and stock.jpg';
import dematDpImg from '../assets/demat and dp.jpg';
import marketInsightImg from '../assets/market insight.avif';
import chooseUsImg from '../assets/choose_us.png';

const SERVICES = [
  {
    id: 'brokerage',
    title: 'Brokerage Services',
    image: shareStockImg,
    description:
      'We provide reliable, transparent, and efficient brokerage services through a secure and technology-driven trading platform. We are committed to ensuring seamless trade execution, timely settlement, professional client support, and regulatory compliance.',
  },
  {
    id: 'demat',
    title: 'Demat & DP Services',
    image: dematDpImg,
    description:
      'We offer secure and efficient Depository Participant (DP) and DEMAT services, ensuring the safe electronic holding and management of securities. Our services include DEMAT account opening, dematerialization, pledge support, and transmission.',
  },
  {
    id: 'insights',
    title: 'Market Insights & Support',
    image: marketInsightImg,
    description:
      'We provide comprehensive market insights and dedicated investor support to help clients make informed investment decisions. Our experienced team offers timely guidance, prompt assistance, and responsive customer service.',
  },
];

const FEATURES = [
  'A Name You Can Trust',
  'Easy Trading',
  'Expert Support',
  'Honest & Transparent',
];

export default function Home() {
  const [showModal, setShowModal] = useState(true);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const animatedElements = document.querySelectorAll('.scroll-animate-trigger');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="home-page">
      {/* NOTICE MODAL (Only renders on home page load) */}
      {showModal && <NoticeModal onClose={() => setShowModal(false)} />}

      {/* HERO CAROUSEL */}
      <HeroCarousel />

      {/* WHAT WE DO SECTION */}
      <section className="what-we-do-section scroll-animate-trigger">
        <div className="container-custom">
          <div className="section-header-container scroll-fade-down">
            <h2 className="section-main-title">What we do</h2>
          </div>

          <div className="services-grid scroll-fade-up">
            {SERVICES.map((service) => (
              <div key={service.id} className="service-item-card">
                <div className="card-img-wrapper">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="card-details-pane">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="why-choose-us-section scroll-animate-trigger">
        <div className="choose-us-container">
          <div className="choose-us-grid">
            <div className="choose-us-content scroll-fade-left">
              <h2 className="section-main-title animated-blue-title">Why Choose Us?</h2>

              <div className="text-paragraphs">
                <p className="animated-text-hover">
                  As a government-owned stock broker, R.B.B Securities Company Limited offers unmatched credibility,
                  transparency, and reliability. Backed by a strong institutional foundation, we ensure secure
                  transactions, regulatory compliance, ethical practices, and trusted investment services for every
                  client.
                </p>
                <p className="animated-text-hover">Here is what sets us apart:</p>
              </div>

              <div className="investor-features">
                {FEATURES.map((feature, idx) => (
                  <div key={idx} className="feature-item animated-feature">
                    <span className="checkmark-icon">&#10003;</span>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>

              <p className="peace-text animated-text-hover">
                We don't just help you trade; we help you grow your wealth with peace of mind.
              </p>
            </div>

            <div className="choose-us-image-wrapper scroll-fade-right">
              <div className="image-frame enlarged-frame">
                <img src={chooseUsImg} alt="R.B.B Securities Company Limited" className="enlarged-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}