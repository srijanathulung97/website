import React from "react";
import AboutLayout from "../layouts/AboutLayout";
import { aboutContent } from "../data/aboutData";

export default function AboutUsPage() {
  const data = aboutContent.aboutUs;
  return (
    <AboutLayout>
      <h2 className="title-navy">{data.title}</h2>
      <p className="subtitle-gray">{data.subtitle}</p>
      <p className="body-text">{data.description}</p>
    </AboutLayout>
  );
}