import React from "react";
import AboutLayout from "../layouts/AboutLayout";
import { aboutContent } from "../data/aboutData";

export default function AboutUsPage() {
  const data = aboutContent.aboutUs;

  return (
    <AboutLayout>
      <div className="about-content-pane">
        <h2 className="title-navy">{data.title}</h2>
        <p className="subtitle-gray">{data.subtitle}</p>
        <hr className="divider-line" />
        <p className="body-text">{data.description}</p>
      </div>
    </AboutLayout>
  );
}