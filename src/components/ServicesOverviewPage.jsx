import React from 'react';
import ServicesLayout from './ServicesLayout';

export default function ServicesOverviewPage() {
  return (
    <ServicesLayout>
      <div className="about-card-container key-animated">
        <h2 className="title-navy">Our Services</h2>
        <p className="subtitle-gray">Services Overview</p>
        <hr className="divider-line" />
        
        <p className="body-text">
          Welcome to R.B.B Securities Company Ltd. portal. We offer full-fledged brokerage, depository participant, and customer support capabilities to support your investments across the Nepal Stock Exchange. Select a service category from the left menu to view detailed operational features and fee structures.
        </p>
      </div>
    </ServicesLayout>
  );
}