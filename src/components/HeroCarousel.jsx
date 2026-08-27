import React, { useState, useEffect, useRef } from 'react';
import './HeroCarousel.css';

const DEFAULT_SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80',
    title: 'DEMAT Account',
    subtitle: 'First step to enter the share market.',
    description: 'We set up your DEMAT account with depository.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1600&q=80',
    title: 'Online Trading',
    subtitle: 'Trade seamlessly anytime, anywhere.',
    description: 'Fast, secure, and reliable market access.',
  },
];

export default function HeroCarousel({ slides = DEFAULT_SLIDES }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeSlides = slides && slides.length > 0 ? slides : DEFAULT_SLIDES;
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Auto-play timer (Changes every 4 seconds)
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % activeSlides.length);
    }, 4000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex, activeSlides.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % activeSlides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + activeSlides.length) % activeSlides.length);
  };

  return (
    <section className="hero-carousel-section" aria-label="Featured Carousel">
      <div className="hero-carousel">
        {/* SLIDE TRACK FOR HORIZONTAL SLIDING ANIMATION */}
        <div 
          className="carousel-track" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {activeSlides.map((slide, index) => (
            <div
              key={slide.id || index}
              className="carousel-slide"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${slide.image})`,
              }}
            >
              <div className="carousel-container">
                <div className="carousel-card">
                  <h2>{slide.title}</h2>
                  <p className="card-subtitle">{slide.subtitle}</p>
                </div>
                <p className="carousel-description">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ARROW CONTROLS */}
        <button className="carousel-arrow prev" onClick={handlePrev} aria-label="Previous Slide">
          &#8592;
        </button>
        <button className="carousel-arrow next" onClick={handleNext} aria-label="Next Slide">
          &#8594;
        </button>

        {/* DOTS */}
        <div className="carousel-dots">
          {activeSlides.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}