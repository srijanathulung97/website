import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <div className="contact-page">
      {/* Top Page Banner Section */}
      <section className="contact-banner">
        <div className="banner-content">
          <h1>Contact</h1>
        </div>
      </section>

      {/* Keep In Touch Section */}
      <section className="keep-in-touch-section">
        <h2 className="section-title">Keep In Touch</h2>

        <div className="info-grid">
          {/* Location Card */}
          <div className="info-card">
            <div className="icon-wrapper">
              <MapPin size={22} />
            </div>
            <p>
              First Floor, R.B.B Securities Company Limited,
              <br />
              Durbarmarg, Kathmandu,
              <br />
              Nepal
            </p>
          </div>

          {/* Phone Card */}
          <div className="info-card">
            <div className="icon-wrapper">
              <Phone size={22} />
            </div>
            <p>
              Landline : 01-5921896/95,
              <br />
              NTC : 9851364896
            </p>
          </div>

          {/* Email Card */}
          <div className="info-card">
            <div className="icon-wrapper">
              <Mail size={22} />
            </div>
            <p>
              <a href="mailto:securitiesrbb@gmail.com">securitiesrbb@gmail.com</a>
              <br />
              <a href="mailto:info@rbbsecurities.com.np">info@rbbsecurities.com.np</a>
            </p>
          </div>
        </div>
      </section>

      {/* Find Us Here Section */}
      <section className="find-us-section">
        <h2 className="section-title">Find Us Here</h2>

        <div className="map-container">
          <iframe
            title="RBB Securities Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1729613846314!2d85.3155051744726!3d27.711945525290453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1900319dc3f9%3A0x8617f90520883e4!2sRBB%20Securities%20Company%20Ltd!5e0!3m2!1sen!2snp!4v1783415528072!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </section>
    </div>
  );
}