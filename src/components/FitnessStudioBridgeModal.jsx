import React from 'react';
import { X, Dumbbell, ArrowRight, ShieldCheck, Activity, Flame, CheckCircle2, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function FitnessStudioBridgeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const studio = CLINIC_INFO.sisterStudio;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        style={{ maxWidth: '680px', padding: '36px', position: 'relative' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <span className="geo-trust-badge" style={{ backgroundColor: '#fff7ed', color: '#d97706', borderColor: '#fde68a' }}>
            <Flame size={14} /> SISTER FACILITY • JAIPUR
          </span>
          <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#64748b' }}>
            Functional Conditioning
          </span>
        </div>

        <h2 style={{ fontSize: '1.85rem', fontWeight: 800, marginBottom: '12px', color: '#0f172a' }}>
          {studio.name}
        </h2>

        <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '24px' }}>
          {studio.description}
        </p>

        <div style={{
          backgroundColor: '#f8fafc',
          borderRadius: '16px',
          padding: '20px',
          border: '1px solid #e2e8f0',
          marginBottom: '26px'
        }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Activity size={18} color="#0d9488" /> Why Transition to Healthstrings Fitness Studio?
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {studio.features.map((feat, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: '#334155' }}>
                <CheckCircle2 size={16} color="#0d9488" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          padding: '16px 20px',
          borderRadius: '14px',
          backgroundColor: '#f0fdf4',
          border: '1px solid #bbf7d0',
          marginBottom: '28px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <ShieldCheck size={24} color="#047857" style={{ flexShrink: 0 }} />
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#065f46' }}>
              Seamless Continuity of Care
            </div>
            <div style={{ fontSize: '0.82rem', color: '#047857' }}>
              Graduated from physiotherapy at C Scheme? Our trainers align with your clinical recovery plan to prevent re-injury.
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <a
            href="https://wa.me/919251059302?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20Healthstrings%20Fitness%20Studio%20programs."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: '1 1 240px',
              backgroundColor: '#0f172a',
              color: 'white',
              padding: '13px 22px',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '0.95rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
          >
            Visit Fitness Studio & Enquire <ArrowRight size={18} />
          </a>

          <button
            onClick={onClose}
            style={{
              padding: '13px 22px',
              borderRadius: '12px',
              border: '1px solid #cbd5e1',
              backgroundColor: 'white',
              fontWeight: 600,
              color: '#475569',
              fontSize: '0.9rem'
            }}
          >
            Stay on Clinic Website
          </button>
        </div>
      </div>
    </div>
  );
}
