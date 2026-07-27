import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, ShieldCheck, Dumbbell, ArrowRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function Footer({ setActivePage, onOpenStudioModal }) {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand Logo & Jaipur Roots */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
              <img 
                src="/logo.png" 
                alt="Healthstrings Official Logo" 
                style={{ height: '58px', width: 'auto', objectFit: 'contain' }} 
              />
            </div>
            <div style={{ fontSize: '0.98rem', fontWeight: 800, color: '#2dd4bf', marginBottom: '10px' }}>
              Healing Beyond Symptoms. Building Health for Life.
            </div>
            <p style={{ fontSize: '0.92rem', lineHeight: '1.7', color: '#94a3b8', marginBottom: '20px' }}>
              HealthStrings Clinic is committed to delivering trusted physiotherapy, clinical nutrition, rehabilitation, and wellness solutions through personalized care, evidence-based treatments, and a patient-first approach to help you move better, live healthier, and achieve long-term well-being.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', fontSize: '0.85rem' }}>
              <ShieldCheck size={18} color="#2dd4bf" />
              <span>Chamber – 101, Surya Hospital Building, C-Scheme Jaipur</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.05rem', marginBottom: '18px' }}>Clinic Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.92rem' }}>
              <li>
                <span onClick={() => setActivePage('home')} style={{ cursor: 'pointer' }}>
                  Home Page
                </span>
              </li>
              <li>
                <span onClick={() => setActivePage('about')} style={{ cursor: 'pointer' }}>
                  About Our C Scheme Clinic
                </span>
              </li>
              <li>
                <span onClick={() => setActivePage('services')} style={{ cursor: 'pointer' }}>
                  All Treatments & Services
                </span>
              </li>
              <li>
                <span onClick={() => setActivePage('contact')} style={{ cursor: 'pointer' }}>
                  Contact & Directions (SMS Hospital)
                </span>
              </li>
            </ul>
          </div>

          {/* Col 3: Clinical Specialties */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.05rem', marginBottom: '18px' }}>Clinical Specialties</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.92rem', color: '#cbd5e1' }}>
              <li>• Back & Neck Pain Treatment</li>
              <li>• Knee & Shoulder Rehabilitation</li>
              <li>• Disc Herniation & Sciatica Care</li>
              <li>• Clinical Nutrition & Diet Plans</li>
              <li>• PCOS, Thyroid & Gut Healing</li>
            </ul>
          </div>

          {/* Col 4: Contact & Jaipur Location */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.05rem', marginBottom: '18px' }}>Visit Jaipur Clinic</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={18} color="#2dd4bf" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{CLINIC_INFO.address}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Phone size={18} color="#2dd4bf" style={{ flexShrink: 0 }} />
                <span>Call / Booking: {CLINIC_INFO.phone}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Clock size={18} color="#2dd4bf" style={{ flexShrink: 0 }} />
                <span>{CLINIC_INFO.hours}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Healthstrings Physiotherapy & Sports Rehab Clinic, C Scheme, Jaipur. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>SEO Keywords: Jaipur, C Scheme, Raja Park, Bapu Nagar, SMS Hospital</span>
            <span onClick={() => setActivePage('contact')} style={{ cursor: 'pointer', color: '#2dd4bf' }}>
              Book Consultation
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
