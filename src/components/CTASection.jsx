import React from 'react';
import { Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function CTASection({ setActivePage }) {
  return (
    <section className="section-padding" style={{
      background: 'linear-gradient(135deg, #0f766e 0%, #0d9488 100%)',
      color: '#ffffff',
      textAlign: 'center'
    }}>
      <div className="container">
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#99f6e4', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
            BOOK YOUR CONSULTATION
          </div>

          <h2 style={{ fontSize: '2.8rem', color: '#ffffff', marginBottom: '16px' }}>
            Start Your Recovery Journey Today
          </h2>

          <p style={{ fontSize: '1.15rem', color: '#f0fdf4', marginBottom: '12px' }}>
            Don't let pain or lifestyle disorders limit your life.
          </p>

          <p style={{ fontSize: '1.15rem', color: '#f0fdf4', marginBottom: '34px', lineHeight: 1.7 }}>
            Schedule your consultation with HealthStrings Clinic and take the first step toward better health, improved mobility, and long-term wellness.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '18px', flexWrap: 'wrap' }}>
            <button
              onClick={() => {
                if (setActivePage) {
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              style={{
                backgroundColor: '#ffffff',
                color: '#0f172a',
                padding: '16px 36px',
                borderRadius: '999px',
                fontWeight: 800,
                fontSize: '1.08rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 12px 30px rgba(0,0,0,0.22)'
              }}
            >
              Schedule Consultation Now
            </button>

            <a
              href={`tel:${CLINIC_INFO.phone}`}
              style={{
                backgroundColor: '#0f172a',
                color: '#ffffff',
                padding: '16px 32px',
                borderRadius: '999px',
                fontWeight: 800,
                fontSize: '1.08rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none'
              }}
            >
              <Phone size={20} color="#2dd4bf" /> Call: {CLINIC_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
