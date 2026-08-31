import React from 'react';
import DownloadLayout from './DownloadLayout';
import FormList from './FormList';
import { kycFiles } from '../components/downloadsData';

export default function KycFormsPage() {
  return (
    <DownloadLayout>
      <div className="key-animated">
        <h2 className="title-navy">KYC Documents</h2>
        <p className="subtitle-gray">Client Registration & Order Forms</p>
        <hr className="divider-line" />
        <FormList items={kycFiles} />
      </div>
    </DownloadLayout>
  );
}