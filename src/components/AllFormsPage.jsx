import React from 'react';
import DownloadLayout from './DownloadLayout';
import FormList from './FormList';
import { kycFiles, dematFiles } from '../components/downloadsData';

export default function AllFormsPage() {
  return (
    <DownloadLayout>
      <div className="key-animated">
        <h2 className="title-navy">Forms Download</h2>
        <p className="subtitle-gray">All Client Forms & Documents</p>
        <hr className="divider-line" />

        <p className="body-text" style={{ color: '#4a5568', lineHeight: '1.65', marginBottom: '25px' }}>
          Welcome to the R.B.B. Securities download center. Download, print, and fill out the required client registration forms, agreement documents, trading orders, or depository forms below to complete your account setup and services.
        </p>

        <h3 className="title-navy" style={{ fontSize: '18px', marginTop: '20px' }}>KYC Forms</h3>
        <FormList items={kycFiles} />

        <h3 className="title-navy" style={{ fontSize: '18px', marginTop: '25px' }}>Demat Forms</h3>
        <FormList items={dematFiles} />
      </div>
    </DownloadLayout>
  );
}