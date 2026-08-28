import React, { useState } from 'react';
import AboutLayout from './AboutLayout';
import { teamMembers } from './aboutData'; // Named import matching aboutData.js

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <AboutLayout heroTitle="Our Team">
      <div className="row justify-content-center g-4">
        {teamMembers && teamMembers.map((member) => (
          <div key={member.id || member.name} className="col-12 col-sm-6 col-md-4">
            <MemberCard data={member} onSelect={setSelectedMember} />
          </div>
        ))}
      </div>

      {/* Profile Modal */}
      {selectedMember && (
        <ProfileModal member={selectedMember} onClose={() => setSelectedMember(null)} />
      )}
    </AboutLayout>
  );
}

// Inline Sub-component: MemberCard
function MemberCard({ data, onSelect }) {
  if (!data) return null;
  return (
    <div 
      className="team-card text-center p-3 border rounded shadow-sm h-100" 
      onClick={() => onSelect(data)} 
      style={{ cursor: 'pointer' }}
    >
      <div 
        className="avatar-frame mx-auto mb-3" 
        style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden' }}
      >
        <img 
          src={data.img} 
          alt={data.name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>
      <h5 className="fw-bold mb-1" style={{ fontSize: '16px', color: '#0c1b40' }}>{data.name}</h5>
      <p className="text-danger small fw-semibold mb-1">{data.role}</p>
      <span className="text-muted small">{data.dept}</span>
    </div>
  );
}

// Inline Sub-component: ProfileModal
function ProfileModal({ member, onClose }) {
  if (!member) return null;
  return (
    <div 
      className="modal-backdrop show" 
      onClick={onClose} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        background: 'rgba(0,0,0,0.5)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        zIndex: 1050 
      }}
    >
      <div 
        className="modal-dialog-custom bg-white rounded overflow-hidden p-4" 
        onClick={(e) => e.stopPropagation()} 
        style={{ maxWidth: '500px', width: '90%' }}
      >
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="m-0" style={{ color: '#0c1b40' }}>{member.name}</h4>
          <button className="btn-close" onClick={onClose} aria-label="Close"></button>
        </div>
        <p className="text-danger fw-semibold mb-1">{member.role}</p>
        <p className="text-muted small mb-3">{member.dept}</p>
        <hr />
        <p className="text-secondary" style={{ fontSize: '14px', lineHeight: '1.6' }}>
          {member.bio || 'No detailed biography available.'}
        </p>
      </div>
    </div>
  );
}