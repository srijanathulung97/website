import React, { useState } from 'react';
import AboutLayout from './AboutLayout';
import './TeamPage.css';

// Safe wrapper to prevent "Element type is invalid" errors if AboutLayout has import/export mismatches
const LayoutWrapper = (props) => {
  if (typeof AboutLayout === 'function' || (typeof AboutLayout === 'object' && AboutLayout?.$$typeof)) {
    return <AboutLayout {...props} />;
  }
  return <div className="team-layout-fallback">{props.children}</div>;
};

const teamMembers = [
  {
    id: 1,
    name: "Ms. Executive Leader",
    role: "Chief Executive Officer",
    department: "Executive Management",
    qualification: "MBA / CA",
    image: "/images/team/ceo.jpg",
    bio: "Leads daily business operations, company growth strategy, and corporate governance compliance across all key departments.",
    isFeatured: true, // Appears centered at the top
  },
  {
    id: 2,
    name: "Ms. Susmita Bhattarai",
    role: "Junior Assistant",
    department: "CSD Department",
    qualification: "MBS",
    image: "/images/team/susmita.jpg",
    bio: "Susmita Bhattarai holds a Master's in Business Studies and brings strong expertise in client management and administration. Since joining R.B.B Securities Company Limited in 2025, she has served in the CSD Department, managing depository services, assisting investors with securities accounts, and ensuring compliant, accurate transaction processing to deliver transparent, reliable services.",
    isFeatured: false,
  },
  {
    id: 3,
    name: "Mr. Bikash Siwakoti",
    role: "Officer",
    department: "Operations & Compliance",
    qualification: "BBA / MBS",
    image: "/images/team/bikash.jpg",
    bio: "Manages trade execution, floor operations, and settlement compliance to deliver smooth transaction processing.",
    isFeatured: false,
  },
  {
    id: 4,
    name: "Mr. Tarka Raj Regmi",
    role: "Assistant Manager",
    department: "Finance & Accounts",
    qualification: "MBS",
    image: "/images/team/tarka.jpg",
    bio: "Oversees financial audits, internal control systems, and regulatory reporting for company operations.",
    isFeatured: false,
  },
  {
    id: 4,
    name: "Mr. Tarka Raj Regmi",
    role: "Assistant Manager",
    department: "Finance & Accounts",
    qualification: "MBS",
    image: "/images/team/tarka.jpg",
    bio: "Oversees financial audits, internal control systems, and regulatory reporting for company operations.",
    isFeatured: false,
  },
  {
    id: 4,
    name: "Mr. Tarka Raj Regmi",
    role: "Assistant Manager",
    department: "Finance & Accounts",
    qualification: "MBS",
    image: "/images/team/tarka.jpg",
    bio: "Oversees financial audits, internal control systems, and regulatory reporting for company operations.",
    isFeatured: false,
  },
  {
    id: 4,
    name: "Mr. Tarka Raj Regmi",
    role: "Assistant Manager",
    department: "Finance & Accounts",
    qualification: "MBS",
    image: "/images/team/tarka.jpg",
    bio: "Oversees financial audits, internal control systems, and regulatory reporting for company operations.",
    isFeatured: false,
  },
];

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState(null);

  const topLeader = teamMembers.find((member) => member.isFeatured);
  const otherMembers = teamMembers.filter((member) => !member.isFeatured);

  return (
    <LayoutWrapper>
      <div className="team-container key-animated">
        {/* Header Title */}
        <h2 className="title-navy">Our Team</h2>
        <p className="subtitle-gray">Key Personnel & Management</p>
        <hr className="divider-line" />

        {/* Top Leader Section */}
        {topLeader && (
          <div className="leader-section">
            <div
              className="team-card leader-card"
              onClick={() => setSelectedMember(topLeader)}
            >
              <div className="avatar-circle">
                <img
                  src={topLeader.image}
                  alt={topLeader.name}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <h3 className="member-name red-highlight">{topLeader.name}</h3>
              <p className="member-role red-text">{topLeader.role}</p>
              <p className="member-dept">{topLeader.department}</p>
            </div>
          </div>
        )}

        {/* Team 3-Column Grid */}
        <div className="team-grid">
          {otherMembers.map((member) => (
            <div
              key={member.id}
              className="team-card"
              onClick={() => setSelectedMember(member)}
            >
              <div className="avatar-circle">
                <img
                  src={member.image}
                  alt={member.name}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role red-text">{member.role}</p>
              <p className="member-dept">{member.department}</p>
            </div>
          ))}
        </div>

        {/* Bio Popup Modal */}
        {selectedMember && (
          <div className="modal-backdrop" onClick={() => setSelectedMember(null)}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
              <div className="modal-navy-header">
                <button
                  className="modal-close-btn"
                  onClick={() => setSelectedMember(null)}
                >
                  ✕
                </button>
                <div className="modal-header-content">
                  <div className="modal-avatar">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                  <div className="modal-header-text">
                    <h2>{selectedMember.name}</h2>
                    <p className="modal-role">{selectedMember.role}</p>
                    {selectedMember.qualification && (
                      <p className="modal-qualification">{selectedMember.qualification}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="modal-body">
                <p>{selectedMember.bio}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </LayoutWrapper>
  );
}