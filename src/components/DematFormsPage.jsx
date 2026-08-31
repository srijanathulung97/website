import React from 'react';
import DownloadLayout from './DownloadLayout';
import FormList from './FormList';
import { dematFiles } from '../components/downloadsData';

export default function DematFormsPage() {
  return (
    <DownloadLayout>
      <div className="key-animated">
        <h2 className="title-navy">Demat Forms</h2>
        <p className="subtitle-gray">Depository & Maintenance Forms</p>
        <hr className="divider-line" />
        <FormList items={dematFiles} />
      </div>
    </DownloadLayout>
  );
}