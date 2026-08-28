import React from 'react';
import AboutLayout from './AboutLayout';
import { aboutContent } from './aboutData';

export default function IntroductionPage() {
  const data = aboutContent.introduction;

  return (
    <AboutLayout>
      <h2 className="title-navy">{data.title}</h2>
      <p className="subtitle-gray">{data.subtitle}</p>
      <p className="body-text">{data.description}</p>
    </AboutLayout>
  );
}