import React, { useState } from 'react';
import AboutLayout from './AboutLayout';
import './BodPage.css';

const bodMembers = [
  {
    id: 1,
    name: "Ms. / Mr.",
    role: "Chairman",
    department: "Board of Directors",
    qualification: "MBS / MBA",
    image: "/images/bod/chairman.jpg",
    bio: " es as the Chairman of the Board of Directors, overseeing Serves as the Chairman of the Board of Directors, overseeing governance and strategy.",
    isFeatured: true,
  },
  {
    id: 2,
    name: "Ms. Rajya Laxmi Khadgi",
    role: "Director",
    department: "Board of Directors",
    qualification: "Master's Degree",
    image: "/images/bod/rajya.jpg",
     bio: " es as the Chairman of the Board of Directors, overseeing Serves as the Chairman of the Board of Directors, overseeing governance and strategy.",
   isFeatured: false,
  },
  {
    id: 3,
    name: "Mr. Krishna Shah",
    role: "Director",
    department: "Board of Directors",
    qualification: "Master's Degree",
    image: "/images/bod/krishna.jpg",
    bio: "Specializes in financial policy formulation and business growth direction.",
    isFeatured: false,
  },
  {
    id: 4,
    name: "Ms. Gayatri Shrestha",
    role: "Director",
    department: "Board of Directors",
    qualification: "Master's Degree",
    image: "/images/bod/gayatri.jpg",
    bio: "Expertise in compliance, capital markets, and corporate risk management.",
    isFeatured: false,
  },

];

export default function BodPage() {
  const [selectedMember, setSelectedMember] = useState(null);

  const chairman = bodMembers.find((member) => member.isFeatured);
  const directors = bodMembers.filter((member) => !member.isFeatured);

  return (
    <AboutLayout>
      <div className="bod-container key-animated">
        {/* Header Title */}
        <h2 className="title-navy">Board of Directors</h2>
        <p className="subtitle-gray">Leadership & Governance</p>
        <hr className="divider-line" />

        {/* Chairman Top Section */}
        {chairman && (
          <div className="chairman-section">
            <div
              className="bod-card chairman-card"
              onClick={() => setSelectedMember(chairman)}
            >
              <div className="avatar-circle">
                <img
                  src={chairman.image}
                  alt={chairman.name}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <h3 className="member-name red-highlight">{chairman.name}</h3>
              <p className="member-role red-text">{chairman.role}</p>
              <p className="member-dept">{chairman.department}</p>
            </div>
          </div>
        )}

        {/* Directors 3-Column Grid */}
        <div className="directors-grid">
          {directors.map((member) => (
            <div
              key={member.id}
              className="bod-card"
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
              {/* Navy Blue Top Section */}
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

              {/* Light Gray Bio Section */}
              <div className="modal-body">
                <p>{selectedMember.bio}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </AboutLayout>
  );
}