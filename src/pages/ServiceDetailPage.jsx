import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, ArrowRight, ArrowLeft, Phone, Calendar, MapPin, 
  Clock, ShieldCheck, Star, Activity, Sparkles, HeartPulse, 
  Stethoscope, Award, ChevronDown, ChevronUp, Dumbbell, FileText,
  UserCheck, Layers, HelpCircle
} from 'lucide-react';
import { CORE_SERVICES, CLINIC_INFO, TESTIMONIALS } from '../data/clinicData';
import { EXACT_CONDITIONS_LIST, EXACT_TREATMENT_PROCESS } from '../data/clinicData';
import GallerySection from '../components/GallerySection';
import BlogSection from '../components/BlogSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';

export default function ServiceDetailPage({ selectedServiceId, setActivePage, onOpenStudioModal }) {
  const [activeFaq, setActiveFaq] = useState(null);

  // Scroll to top whenever selectedServiceId changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedServiceId]);

  const service = CORE_SERVICES.find((s) => s.id === selectedServiceId) || CORE_SERVICES[0];

  // Select appropriate hero image from local folder based on category
  const getServiceBannerImage = () => {
    if (service.id.includes('nutrition') || service.id.includes('diet')) {
      return '/hero_slide_3.jpg';
    }
    if (service.id.includes('sports') || service.id.includes('conditioning')) {
      return '/hero_slide_2.jpg';
    }
    return '/hero_slide_1.jpg';
  };

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const allConditionsTreated = [
    'Back Pain', 'Neck Pain', 'Knee Pain', 'Shoulder Pain',
    'Sciatica', 'Slip Disc', 'Arthritis', 'Sports Injuries',
    'PCOS & PCOD', 'Thyroid Disorders', 'Diabetes Care', 'Obesity & Weight',
    'High Blood Pressure', 'Digestive Disorders', 'Poor Posture', 'Muscle Weakness'
  ];

  const whyChooseUsPillars = [
    'Personalized Treatment Plans Tailored to Your Diagnosis',
    'Experienced Healthcare & Physiotherapy Professionals',
    'Advanced Non-Surgical Physiotherapy & Decompression Techniques',
    'Evidence-Based Nutrition Guidance',
    'Root-Cause Focused Diagnostic Treatment Philosophy',
    'Modern Rehabilitation Programs & Equipment',
    'Dedicated 1-on-1 Individual Patient Attention',
    'Regular Progress Monitoring & Objective Biomarkers',
    '100% Ethical Non-Surgical Pain Management',
    'Seamless Long-Term Wellness Support & Conditioning'
  ];

  const healthcarePrograms = [
    { title: 'Weight Loss Program', desc: 'Sustainable fat reduction through metabolic optimization and balanced nutrition without starvation.' },
    { title: 'Healthy Weight Gain Program', desc: 'Lean muscle development and nutrient assimilation for underweight or recovering patients.' },
    { title: 'PCOS Management Program', desc: 'Hormonal balancing diet, insulin sensitivity correction, and targeted functional movement.' },
    { title: 'Diabetes Nutrition Program', desc: 'Glycemic control, HbA1c lowering strategies, and organ protection dietetics.' },
    { title: 'Thyroid Care Program', desc: 'Metabolic rate enhancement and thyroid hormone synthesis support diets.' },
    { title: 'Pain Relief Program', desc: 'Non-surgical resolution of acute and chronic spine, joint, and nerve pain.' },
    { title: 'Sports Injury Rehabilitation', desc: 'Accelerated athletic return to play for ligament, meniscus, and muscle injuries.' },
    { title: 'Post-Surgery Recovery Program', desc: 'Scar tissue mobilization, joint range restoration, and rapid strength building.' },
    { title: 'Lifestyle Modification Program', desc: 'Comprehensive daily ergonomic, nutritional, and physical optimization.' }
  ];

  return (
    <div className="service-detail-page" style={{ backgroundColor: '#f8fafc', paddingBottom: '90px' }}>
      
      {/* 1. HERO BANNER WITH LOCAL HIGH-RES IMAGE & TRUST TAGLINE */}
      <section style={{
        position: 'relative',
        background: `linear-gradient(115deg, rgba(9, 13, 22, 0.94) 0%, rgba(15, 23, 42, 0.88) 60%, rgba(15, 23, 42, 0.65) 100%), url(${getServiceBannerImage()}) center/cover no-repeat`,
        color: '#ffffff',
        padding: '80px 0 95px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '980px' }}>
            <button
              onClick={() => setActivePage('services')}
              style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.25)',
                color: '#ffffff',
                padding: '8px 18px',
                borderRadius: '999px',
                fontWeight: 700,
                fontSize: '0.9rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                marginBottom: '26px'
              }}
            >
              <ArrowLeft size={16} /> Back to Treatments & Services Directory
            </button>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(45, 212, 191, 0.18)',
              border: '1px solid rgba(45, 212, 191, 0.45)',
              color: '#2dd4bf',
              padding: '6px 16px',
              borderRadius: '999px',
              fontSize: '0.84rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              marginBottom: '18px'
            }}>
              <Sparkles size={14} /> Best Physiotherapy & Nutrition Clinic in Jaipur
            </div>

            <h1 style={{
              fontSize: 'clamp(2.3rem, 4.2vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#ffffff',
              marginBottom: '16px',
              letterSpacing: '-0.8px'
            }}>
              {service.title}
            </h1>

            <div style={{
              fontSize: 'clamp(1.15rem, 1.8vw, 1.4rem)',
              fontWeight: 700,
              color: '#2dd4bf',
              marginBottom: '22px'
            }}>
              Heal Better. Move Better. Live Better.
            </div>

            <p style={{
              fontSize: 'clamp(1rem, 1.25vw, 1.14rem)',
              color: '#e2e8f0',
              lineHeight: 1.76,
              marginBottom: '34px'
            }}>
              HealthStrings Clinic is a trusted Physiotherapy and Nutrition Clinic in Jaipur, providing personalized treatment for pain relief, rehabilitation, lifestyle disorders, and long-term wellness. Our evidence-based approach combines physiotherapy, nutrition, and preventive healthcare to help you recover naturally and live a healthier life.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setActivePage('contact')}
                className="btn-book-primary"
              >
                <span>Book Your Consultation Today</span>
                <ArrowRight size={18} />
              </button>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="btn-phone-secondary"
              >
                <Phone size={18} />
                <span>Call Helpline: {CLINIC_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT HEALTHSTRINGS CLINIC OVERVIEW */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            <div className="section-tag">ABOUT HEALTHSTRINGS CLINIC</div>
            <h2 style={{ fontSize: '2.3rem', color: '#0f172a', marginBottom: '20px' }}>
              Your Trusted Physiotherapy & Nutrition Clinic in Jaipur
            </h2>
            <p style={{ fontSize: '1.06rem', color: '#334155', lineHeight: 1.8, marginBottom: '18px' }}>
              <strong>HealthStrings Clinic</strong> is committed to delivering personalized healthcare through physiotherapy, nutrition, rehabilitation, and lifestyle management. We believe in treating the root cause of health concerns rather than simply managing symptoms.
            </p>
            <p style={{ fontSize: '1.06rem', color: '#334155', lineHeight: 1.8, marginBottom: '28px' }}>
              Whether you are recovering from an injury, managing chronic pain, dealing with hormonal imbalance, or looking to improve your overall health, our expert team creates customized treatment plans tailored to your individual diagnosis across Jaipur, C-Scheme, Raja Park, and Bapu Nagar.
            </p>

            {/* Comprehensive Medical Rationale & Deep Clinical Analysis (1000+ words depth) */}
            <div style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #cbd5e1',
              borderRadius: '24px',
              padding: '36px',
              marginBottom: '32px'
            }}>
              <h3 style={{ fontSize: '1.5rem', color: '#0f172a', marginBottom: '16px' }}>
                Comprehensive Clinical Protocol: {service.title}
              </h3>
              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.78, marginBottom: '16px' }}>
                {service.fullDescription}
              </p>
              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.78, marginBottom: '20px' }}>
                In clinical practice opposite SMS Hospital Medical Precinct, we encounter numerous patients who have undergone repetitive temporary therapies without lasting resolution. At HealthStrings Clinic, our biomechanical assessment evaluates spinal kinematics, neural tension, myofascial trigger points, and systemic metabolic inflammation. By pairing advanced manual therapy with therapeutic nutritional optimization, tissue repair accelerates naturally without drug dependency.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '12px' }}>
                    Clinical Indicators & Diagnostic Assessment
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {service.symptoms.map((sym, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.94rem', color: '#334155', fontWeight: 600 }}>
                        <CheckCircle2 size={16} color="#0d9488" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{sym}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '12px' }}>
                    Evidence-Based Protocol Deliverables
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {(service.procedure || []).map((tr, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.94rem', color: '#334155', fontWeight: 600 }}>
                        <CheckCircle2 size={16} color="#0d9488" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{tr.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPREHENSIVE HEALTHCARE SERVICES (PHYSIOTHERAPY & NUTRITION DUAL PILLARS) */}
      <section className="section-padding" style={{ backgroundColor: '#f1f5f9' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">OUR SERVICES</div>
            <h2 style={{ fontSize: '2.4rem', color: '#0f172a', marginBottom: '14px' }}>
              Comprehensive Healthcare Services at HealthStrings Clinic
            </h2>
            <p className="section-subtitle">
              We provide evidence-based healthcare services that focus on recovery, prevention, and long-term wellness.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '36px' }}>
            
            {/* Pillar A: Physiotherapy Services */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '26px', padding: '38px', border: '1px solid #cbd5e1', boxShadow: '0 12px 30px rgba(15,23,42,0.06)' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#f0fdf4', color: '#0f766e', padding: '6px 14px', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 800, marginBottom: '16px' }}>
                PILLAR 01 • PHYSIOTHERAPY
              </div>
              <h3 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '12px' }}>
                Advanced Physiotherapy Care in Jaipur
              </h3>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.74, marginBottom: '22px' }}>
                At HealthStrings Clinic, we provide expert physiotherapy treatment focused on relieving pain, restoring mobility, and improving overall physical function. Our evidence-based approach targets the root cause of pain, ensuring long-term recovery without surgery.
              </p>

              <h4 style={{ fontSize: '1rem', color: '#0f766e', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '14px' }}>
                Our Physiotherapy Services Include:
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {[
                  'Back & Neck Pain Treatment',
                  'Knee & Shoulder Pain Management',
                  'Disc Herniation & Sciatica Care',
                  'Sports Injury Rehabilitation',
                  'Post-Surgery Rehabilitation',
                  'Posture Correction & Mobility Training',
                  'Chronic Pain Management'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', fontWeight: 700, color: '#1e293b' }}>
                    <CheckCircle2 size={16} color="#0d9488" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pillar B: Nutrition & Lifestyle Management */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '26px', padding: '38px', border: '1px solid #cbd5e1', boxShadow: '0 12px 30px rgba(15,23,42,0.06)' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#fef3c7', color: '#d97706', padding: '6px 14px', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 800, marginBottom: '16px' }}>
                PILLAR 02 • NUTRITION
              </div>
              <h3 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '12px' }}>
                Personalized Nutrition & Lifestyle Care
              </h3>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.74, marginBottom: '22px' }}>
                At HealthStrings Clinic, we believe nutrition is the foundation of good health. Our customized nutrition plans help improve metabolism, balance hormones, support recovery, and achieve sustainable health goals.
              </p>

              <h4 style={{ fontSize: '1rem', color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '14px' }}>
                Our Nutrition Services Include:
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {[
                  'Weight Loss Programs',
                  'Healthy Weight Gain Programs',
                  'PCOS & PCOD Nutrition',
                  'Thyroid Nutrition Management',
                  'Diabetes Nutrition Care',
                  'Heart Healthy Diet Plans',
                  'Gut Health & Digestive Care',
                  'Sports Nutrition Plans',
                  'Personalized Diet Charts',
                  'Immunity Boosting Nutrition'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', fontWeight: 700, color: '#1e293b' }}>
                    <CheckCircle2 size={16} color="#f59e0b" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CONDITIONS WE TREAT COMPLETE GRID */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #cbd5e1' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">CONDITIONS WE TREAT</div>
            <h2 style={{ fontSize: '2.4rem', color: '#0f172a', marginBottom: '14px' }}>
              Comprehensive Care for Pain & Lifestyle Disorders
            </h2>
            <p className="section-subtitle">
              We provide personalized treatment for a wide range of health conditions through physiotherapy and nutrition across Jaipur.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 220px), 1fr))', gap: '16px' }}>
            {allConditionsTreated.map((cond, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  borderRadius: '16px',
                  padding: '18px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontWeight: 800,
                  fontSize: '0.98rem',
                  color: '#0f172a',
                  transition: 'all 0.2s ease'
                }}
              >
                <Activity size={18} color="#0d9488" />
                <span>{cond}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE HEALTHSTRINGS CLINIC */}
      <section className="section-padding" style={{ backgroundColor: '#090d16', color: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag" style={{ backgroundColor: 'rgba(45,212,191,0.18)', color: '#2dd4bf' }}>WHY CHOOSE US</div>
            <h2 style={{ fontSize: '2.4rem', color: '#ffffff', marginBottom: '14px' }}>
              Personalized Care. Evidence-Based Treatment. Lasting Results.
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: '1.08rem' }}>
              HealthStrings Clinic combines modern physiotherapy with nutrition to provide comprehensive healthcare under one roof.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '20px' }}>
            {whyChooseUsPillars.map((pillar, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '18px',
                  padding: '22px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px'
                }}
              >
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: 'rgba(45,212,191,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2dd4bf', flexShrink: 0 }}>
                  <ShieldCheck size={22} />
                </div>
                <span style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff' }}>{pillar}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MEET OUR SPECIALIST — DR. MEENAKSHI KANWAR SISODIA (LOCAL GRAPHIC) */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <img
                src="/dr_meenakshi_profile.png"
                alt="Dr. Meenakshi Kanwar Sisodia - Nutritionist & Physiotherapy Expert Jaipur"
                style={{ width: '100%', height: '420px', objectFit: 'cover', objectPosition: 'top', borderRadius: '28px', boxShadow: '0 20px 45px rgba(15,23,42,0.15)', border: '1px solid #cbd5e1', backgroundColor: '#ffffff' }}
              />
            </div>

            <div>
              <div className="section-tag">MEET OUR SPECIALIST</div>
              <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '8px' }}>
                Dr. Meenakshi Kanwar Sisodia
              </h2>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f766e', marginBottom: '22px' }}>
                Nutritionist | Physiotherapy & Recovery Expert
              </div>
              <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.78, marginBottom: '20px' }}>
                Dr. Meenakshi Kanwar Sisodia is dedicated to helping patients achieve better health through personalized nutrition, physiotherapy, rehabilitation, and preventive care. Her treatment philosophy focuses on identifying and treating the root cause of health concerns while promoting sustainable lifestyle changes.
              </p>
              <p style={{ fontSize: '1.02rem', color: '#475569', lineHeight: 1.78, marginBottom: '28px' }}>
                With over a decade of verified clinical success across Jaipur, C-Scheme, Opposite SMS Hospital, Raja Park, and Bapu Nagar, Dr. Sisodia empowers patients to break free from chronic discomfort, reverse hormonal imbalances, and build resilient physical vitality.
              </p>

              <button
                onClick={() => setActivePage('contact')}
                className="btn-book-primary"
              >
                <span>Consult Dr. Meenakshi Kanwar Sisodia</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TREATMENT PROCESS — YOUR 5-STEP RECOVERY JOURNEY */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #cbd5e1' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">TREATMENT PROCESS</div>
            <h2 style={{ fontSize: '2.4rem', color: '#0f172a', marginBottom: '14px' }}>
              Your Recovery Journey
            </h2>
            <p className="section-subtitle">
              A transparent, structured 5-step clinical pathway designed for complete recovery and sustainable wellness.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '24px' }}>
            {[
              { step: 'STEP 1', title: 'Book Your Consultation', desc: 'Schedule your comprehensive appointment at our C-Scheme Jaipur clinic opposite SMS Hospital.' },
              { step: 'STEP 2', title: 'Detailed Health Assessment', desc: 'Full biomechanical, postural, spinal, and metabolic/nutritional diagnostic evaluation.' },
              { step: 'STEP 3', title: 'Personalized Treatment Plan', desc: 'Custom non-surgical therapy and targeted dietary chart tailored to your exact diagnosis.' },
              { step: 'STEP 4', title: 'Treatment & Progress Monitoring', desc: 'Hands-on clinical sessions with objective progress tracking at every milestone.' },
              { step: 'STEP 5', title: 'Long-Term Recovery & Wellness', desc: 'Customized ergonomic training and sustainable metabolic wellness to prevent recurrence.' }
            ].map((st, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '22px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0d9488', backgroundColor: '#f0fdf4', padding: '5px 12px', borderRadius: '8px', display: 'inline-block', alignSelf: 'flex-start', marginBottom: '14px' }}>
                  {st.step}
                </div>
                <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '10px' }}>
                  {st.title}
                </h3>
                <p style={{ fontSize: '0.94rem', color: '#64748b', lineHeight: 1.68 }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PERSONALIZED HEALTHCARE PROGRAMS */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">HEALTH PROGRAMS</div>
            <h2 style={{ fontSize: '2.4rem', color: '#0f172a', marginBottom: '14px' }}>
              Personalized Healthcare Programs
            </h2>
            <p className="section-subtitle">
              Specialized clinical packages crafted for specific medical, metabolic, and orthopedic goals.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '24px' }}>
            {healthcarePrograms.map((prog, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  borderRadius: '22px',
                  padding: '28px'
                }}
              >
                <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '10px' }}>
                  {prog.title}
                </h3>
                <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.68 }}>
                  {prog.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. GALLERY — INSIDE HEALTHSTRINGS CLINIC (LOCAL SVG ARTWORK) */}
      <section className="section-padding" style={{ backgroundColor: '#0f172a', color: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag" style={{ backgroundColor: 'rgba(45,212,191,0.18)', color: '#2dd4bf' }}>CLINIC GALLERY</div>
            <h2 style={{ fontSize: '2.4rem', color: '#ffffff', marginBottom: '14px' }}>
              Inside HealthStrings Clinic
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: '1.08rem' }}>
              Explore our clinic facilities, consultation rooms, physiotherapy treatment areas, rehabilitation equipment, and patient care environment.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '32px' }}>
            <div style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.2)' }}>
              <img src="/clinic-gallery-1.svg" alt="Healthstrings Clinic Physiotherapy Suite Jaipur" style={{ width: '100%', display: 'block' }} />
            </div>
            <div style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.2)' }}>
              <img src="/clinic-gallery-2.svg" alt="Healthstrings Clinic, Nutrition Diagnostic Suite" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 10. PATIENT TESTIMONIALS */}
      <section className="section-padding" style={{ backgroundColor: '#f1f5f9' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">PATIENT STORIES</div>
            <h2 style={{ fontSize: '2.4rem', color: '#0f172a', marginBottom: '14px' }}>
              What Our Patients Say
            </h2>
            <p className="section-subtitle">
              Read real experiences from patients who have improved their health, recovered from pain, and transformed their lifestyle through expert care at HealthStrings Clinic.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '28px' }}>
            {TESTIMONIALS.slice(0, 3).map((test, index) => (
              <div key={index} className="review-card" style={{ backgroundColor: '#ffffff' }}>
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p className="review-quote">"{test.quote}"</p>
                <div>
                  <div className="author-name">{test.name}</div>
                  <div className="author-loc">{test.location} • Verified Patient</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. HEALTH BLOG & EXPERT ARTICLES BANNER */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #cbd5e1',
            borderRadius: '26px',
            padding: '42px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            <div style={{ maxWidth: '640px' }}>
              <div className="section-tag">HEALTH BLOG</div>
              <h3 style={{ fontSize: '1.9rem', color: '#0f172a', marginBottom: '12px' }}>
                Expert Health Tips & Wellness Articles
              </h3>
              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.7 }}>
                Stay informed with expert advice on physiotherapy, nutrition, weight management, PCOS, thyroid care, diabetes, pain relief, rehabilitation, and preventive healthcare.
              </p>
            </div>
            <button
              onClick={() => setActivePage('contact')}
              className="btn-book-primary"
            >
              <span>Subscribe & Get Wellness Guides</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 12. FREQUENTLY ASKED QUESTIONS */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">FAQ</div>
            <h2 style={{ fontSize: '2.4rem', color: '#0f172a', marginBottom: '14px' }}>
              Frequently Asked Questions
            </h2>
            <p className="section-subtitle">
              Find answers to common questions about physiotherapy, nutrition consultations, treatment plans, appointments, rehabilitation, and healthcare services.
            </p>
          </div>

          <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {service.faqs ? service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="faq-item"
                onClick={() => toggleFaq(idx)}
                style={{ backgroundColor: '#ffffff' }}
              >
                <div className="faq-question">
                  <span>{faq.q}</span>
                  {activeFaq === idx ? <ChevronUp size={20} color="#0d9488" /> : <ChevronDown size={20} color="#64748b" />}
                </div>
                {activeFaq === idx && (
                  <div className="faq-answer">
                    {faq.a}
                  </div>
                )}
              </div>
            )) : (
              <div className="faq-item" style={{ backgroundColor: '#ffffff' }}>
                <div className="faq-question">
                  <span>How quickly can I book a consultation with Dr. Meenakshi Kanwar Sisodia?</span>
                </div>
                <div className="faq-answer">
                  You can schedule an appointment immediately by calling +91 92510 59302 or visiting our clinic opposite SMS Hospital, C-Scheme Jaipur.
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 13. FINAL BOOK CONSULTATION & LOCATION DIRECTORY */}
      <section className="section-padding" style={{
        background: 'linear-gradient(135deg, #0f766e 0%, #0d9488 100%)',
        color: '#ffffff'
      }}>
        <div className="container">
          <div style={{
            maxWidth: '860px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '2.6rem', color: '#ffffff', marginBottom: '16px' }}>
              Start Your Journey Towards Better Health
            </h2>
            <p style={{ fontSize: '1.14rem', color: '#f0fdf4', marginBottom: '32px' }}>
              Don't let pain or lifestyle disorders affect your daily life. Book your consultation with HealthStrings Clinic and receive personalized care from experienced healthcare professionals.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '46px' }}>
              <button
                onClick={() => setActivePage('contact')}
                style={{
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  padding: '16px 32px',
                  borderRadius: '999px',
                  fontWeight: 800,
                  fontSize: '1.05rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                }}
              >
                Book Your Consultation Today
              </button>
              <a
                href="tel:+919251059302"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.18)',
                  border: '1px solid rgba(255,255,255,0.4)',
                  color: '#ffffff',
                  padding: '16px 28px',
                  borderRadius: '999px',
                  fontWeight: 800,
                  fontSize: '1.05rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <Phone size={20} /> Call: +91 92510 59302
              </a>
            </div>

            {/* Official Contact & Location Card */}
            <div style={{
              backgroundColor: 'rgba(15, 23, 42, 0.45)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              borderRadius: '26px',
              padding: '36px',
              textAlign: 'left',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
              gap: '24px'
            }}>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#2dd4bf', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                  CLINIC ADDRESS
                </div>
                <div style={{ fontSize: '0.98rem', fontWeight: 700, lineHeight: 1.6 }}>
                  Chamber – 101, First Floor<br />
                  Surya Hospital Building<br />
                  Opp. SMS Hospital<br />
                  C-Scheme, Ashok Nagar<br />
                  Jaipur, Rajasthan
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#2dd4bf', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                  DIRECT PHONE
                </div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>
                  +91 92510 59302
                </div>
                <div style={{ fontSize: '0.88rem', color: '#e2e8f0', marginTop: '4px' }}>
                  Available Mon - Sat (8:00 AM - 8:30 PM)
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#2dd4bf', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                  OFFICIAL WEBSITE
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>
                  www.healthstrings.in
                </div>
                <div style={{ fontSize: '0.88rem', color: '#2dd4bf', marginTop: '6px' }}>
                  Your Partner in Better Health
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <GallerySection />
      <BlogSection />
      <FAQSection />
      <CTASection setActivePage={setActivePage} />
      <ContactSection />
    </div>
  );
}
