import React from 'react';
import { Phone, MapPin, Globe, Share2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function ContactSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">CONTACT US</div>
          <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '12px' }}>
            HealthStrings Clinic
          </h2>
          <p className="section-subtitle">
            Visit our state-of-the-art clinic directly opposite SMS Hospital in C-Scheme, Jaipur.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '28px', maxWidth: '1040px', margin: '0 auto' }}>
          {/* Address Card */}
          <div style={{
            backgroundColor: '#ffffff',
            border: '1px solid #cbd5e1',
            borderRadius: '24px',
            padding: '34px',
            boxShadow: '0 10px 28px rgba(15,23,42,0.05)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
              <MapPin size={24} color="#0d9488" />
              <h3 style={{ fontSize: '1.35rem', color: '#0f172a', margin: 0 }}>Address</h3>
            </div>
            <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.8, margin: 0 }}>
              Chamber – 101, First Floor<br />
              Surya Hospital Building<br />
              Opposite SMS Hospital<br />
              C-Scheme, Ashok Nagar<br />
              Jaipur, Rajasthan
            </p>
          </div>

          {/* Phone & Follow Us Card */}
          <div style={{
            backgroundColor: '#ffffff',
            border: '1px solid #cbd5e1',
            borderRadius: '24px',
            padding: '34px',
            boxShadow: '0 10px 28px rgba(15,23,42,0.05)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                <Phone size={24} color="#0d9488" />
                <h3 style={{ fontSize: '1.35rem', color: '#0f172a', margin: 0 }}>Phone</h3>
              </div>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f766e', textDecoration: 'none', display: 'block', marginBottom: '28px' }}
              >
                +91 92510 59302
              </a>
            </div>

            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '12px' }}>
                Follow Us
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#0f172a', fontWeight: 700, textDecoration: 'none' }}>
                  <Share2 size={18} color="#0d9488" />
                  <span>Instagram: @healthstrings</span>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#0f172a', fontWeight: 700, textDecoration: 'none' }}>
                  <Globe size={18} color="#0d9488" />
                  <span>Facebook: @healthstrings</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div style={{ marginTop: '30px', borderRadius: '24px', overflow: 'hidden', border: '1px solid #cbd5e1', boxShadow: '0 10px 28px rgba(15,23,42,0.05)', maxWidth: '1040px', margin: '30px auto 0' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.956288907462!2d75.80964158955474!3d26.904882316450482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db70a2c6885cb%3A0x9ecc114cff32ae9f!2sHealthstrings%20Physiotherapy%20%26%20Sports%20Rehab%20Clinic!5e0!3m2!1sen!2sin!4v1786380387494!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0, display: 'block' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
