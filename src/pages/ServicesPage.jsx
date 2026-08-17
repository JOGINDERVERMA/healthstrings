import React from 'react';
import { 
  Activity, ArrowRight, HeartPulse, ShieldCheck, Dumbbell, MapPin, 
  CheckCircle2, Sparkles, Apple 
} from 'lucide-react';
import { CORE_SERVICES, PART_WISE_SERVICES } from '../data/clinicData';

export default function ServicesPage({ setSelectedServiceId, setActivePage, onOpenStudioModal }) {
  const handleServiceClick = (id) => {
    if (setSelectedServiceId) {
      setSelectedServiceId(id);
    }

    const dedicatedRoutes = {
      'orthopedic': 'back-and-neck-pain-treatment',
      'knee-shoulder': 'knee-shoulder',
      'disc-sciatica': 'disc-sciatica',
      'sports-injury': 'sports-injury',
      'post-surgery': 'post-surgery',
      'posture-correction': 'posture-correction',
      'chronic-pain': 'chronic-pain'
    };

    if (dedicatedRoutes[id]) {
      setActivePage(dedicatedRoutes[id]);
    } else {
      setActivePage('service-detail');
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="section-padding">
      <div className="container">
        {/* Page SEO & Header */}
        <div className="section-header">
          <span className="section-tag"><HeartPulse size={14} /> JAIPUR CLINICAL DIRECTORY</span>
          <h1 className="section-title">Complete Healthcare & Rehab Directory in Jaipur</h1>
          <p className="section-subtitle">
            Ethical, non-surgical pain relief opposite SMS Hospital in C Scheme. Select any clinical department below to read full diagnostic protocols, Jaipur patient roadmaps, and dietary intervention plans.
          </p>
        </div>

        {/* Top Local SEO Keyword Authority Box for Top Ranking */}
        <div style={{
          backgroundColor: '#0f172a',
          color: 'white',
          borderRadius: '20px',
          padding: '24px 32px',
          marginBottom: '54px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Sparkles size={24} color="#2dd4bf" />
            <div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'white' }}>
                RANKED #1 ETHICAL PHYSIOTHERAPY, CLINICAL NUTRITION & SPORTS REHAB IN JAIPUR
              </div>
              <div style={{ fontSize: '0.84rem', color: '#94a3b8' }}>
                Primary service zones: C Scheme, Raja Park, Bapu Nagar, Civil Lines & SMS Hospital Medical Corridor
              </div>
            </div>
          </div>

          <span style={{ fontSize: '0.78rem', fontWeight: 700, backgroundColor: 'rgba(45,212,191,0.15)', color: '#2dd4bf', padding: '6px 14px', borderRadius: '999px', border: '1px solid rgba(45,212,191,0.3)' }}>
            100% EVIDENCE-BASED INDIAN CLINICAL PROTOCOLS
          </span>
        </div>

        {/* SECTION 1: THE 3 CORE PILLARS OVERVIEW CARDS */}
        <div style={{ marginBottom: '64px' }}>
          <h3 style={{ fontSize: '1.45rem', marginBottom: '24px', color: '#0f172a' }}>
            Explore By Core Department Pillar
          </h3>
          <div className="grid-3">
            {PART_WISE_SERVICES.map((part) => (
              <div 
                key={part.id} 
                className="partwise-card"
                style={{ borderColor: part.borderColor, backgroundColor: '#ffffff', cursor: 'pointer' }}
                onClick={() => {
                  if (part.isFitnessStudioLink) {
                    onOpenStudioModal();
                  } else {
                    handleServiceClick(part.id);
                  }
                }}
              >
                <div className="partwise-top-banner" style={{ backgroundColor: part.bgTint }}>
                  <span className="partwise-badge" style={{ backgroundColor: part.badgeColor, color: '#ffffff' }}>
                    {part.partNumber}
                  </span>
                  <span className="partwise-subtitle" style={{ color: part.badgeColor }}>
                    {part.subtitle}
                  </span>
                </div>

                <div className="partwise-body">
                  <h3 className="partwise-title">{part.title}</h3>
                  <p className="partwise-desc">{part.description}</p>
                  <div className="partwise-list-heading">INCLUDED DEPARTMENTS:</div>
                  <ul className="partwise-list">
                    {part.items.slice(0, 4).map((item, i) => (
                      <li key={i} className="partwise-list-item">
                        <CheckCircle2 size={15} color={part.badgeColor} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="partwise-footer">
                  <button
                    className="partwise-cta-btn"
                    style={{ backgroundColor: part.badgeColor, color: '#ffffff' }}
                  >
                    <span>View Complete Pillar Protocol →</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: COMPLETE SERVICE LISTING DIRECTORY CARDS */}
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ fontSize: '1.45rem', marginBottom: '24px', color: '#0f172a' }}>
            Comprehensive Specialized Medical & Clinical Protocols
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '28px', marginBottom: '70px' }}>
          {CORE_SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="service-card"
              onClick={() => handleServiceClick(service.id)}
            >
              <div>
                {/* Category & Jaipur Tag */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span className="service-category">
                    {service.category}
                  </span>
                  <span className="service-geo">
                    <MapPin size={13} style={{ display: 'inline', marginRight: '4px' }} /> C Scheme Jaipur
                  </span>
                </div>

                <h3 className="service-title">
                  {service.title}
                </h3>
                <p className="service-desc">
                  {service.shortDesc}
                </p>

                {/* Symptoms Highlight */}
                <div className="service-symptom-box">
                  <div className="symptom-title">INDICATIONS & SYMPTOMS TREATED:</div>
                  {service.symptoms && service.symptoms.slice(0, 2).map((sym, idx) => (
                    <div key={idx} className="symptom-item">
                      <CheckCircle2 size={14} color="#0d9488" />
                      <span>{sym}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="service-card-footer">
                <span className="learn-more-link">
                  View Detailed 4-Stage Protocol <ArrowRight size={16} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking & Sister Studio Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #090d16 0%, #1e293b 100%)',
          borderRadius: '28px',
          padding: '48px',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#2dd4bf', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
              NEED PERSONALIZED ASSISTANCE?
            </span>
            <h3 style={{ fontSize: '1.9rem', color: 'white', marginTop: '8px', marginBottom: '12px' }}>
              Book Your Diagnostic Assessment at SMS Hospital C Scheme
            </h3>
            <p style={{ color: '#cbd5e1', maxWidth: '600px' }}>
              Our senior physiotherapists and clinical nutritionists will perform a full 45-minute evaluation of your symptoms, posture, or metabolic health.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={() => {
                setActivePage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-book-primary"
            >
              <span>Book Appointment Now</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
