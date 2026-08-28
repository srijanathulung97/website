import React from 'react';

export default function ProfileModal({ member, onClose }) {
  if (!member) return null;
  return (
    <div className="modal-backdrop show" onClick={onClose} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1050 }}>
      <div className="modal-dialog-custom bg-white rounded overflow-hidden p-4" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '500px', width: '90%' }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="m-0" style={{ color: '#0c1b40' }}>{member.name}</h4>
          <button className="btn-close" onClick={onClose} aria-label="Close"></button>
        </div>
        <p className="text-danger fw-semibold mb-1">{member.role}</p>
        <p className="text-muted small mb-3">{member.edu}</p>
        <hr />
        <p className="text-secondary" style={{ fontSize: '14px', lineHeight: '1.6' }}>
          {member.bio || 'No detailed biography available.'}
        </p>
      </div>
    </div>
  );
}