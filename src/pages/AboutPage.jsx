import React from 'react';
import { 
  ShieldCheck, MapPin, Award, HeartPulse, Dumbbell, ArrowRight, 
  CheckCircle2, Star, Sparkles, Activity, Apple, Stethoscope, 
  Target, Compass, Users, Clock, Phone, CheckCircle
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function AboutPage({ setActivePage }) {
  const WHAT_WE_DO_PILLARS = [
    {
      title: 'Physiotherapy',
      icon: <Activity size={24} color="#0d9488" />,
      color: '#0d9488',
      bg: '#f0fdf4',
      items: [
        'Back & Neck Pain Treatment',
        'Knee & Shoulder Pain Rehabilitation',
        'Sports Injury Rehabilitation',
        'Post-Surgery Rehabilitation',
        'Chronic Pain Management',
        'Posture Correction',
        'Mobility Training'
      ]
    },
    {
      title: 'Nutrition',
      icon: <Apple size={24} color="#059669" />,
      color: '#059669',
      bg: '#ecfdf5',
      items: [
        'Weight Loss Programs',
        'Healthy Weight Gain Programs',
        'PCOS & PCOD Nutrition',
        'Thyroid Diet Management',
        'Diabetes Nutrition Care',
        'Heart Healthy Nutrition',
        'Gut Health & Digestive Care',
        'Personalized Diet Planning'
      ]
    },
    {
      title: 'Strength & Conditioning',
      icon: <Dumbbell size={24} color="#0284c7" />,
      color: '#0284c7',
      bg: '#f0f9ff',
      items: [
        'Functional Movement Training',
        'Injury Prevention Programs',
        'Strength & Muscle Building',
        'Sports Performance Enhancement',
        'Mobility & Flexibility Training',
        'Rehabilitation-Based Strength Programs'
      ]
    }
  ];

  const OUR_APPROACH_STEPS = [
    {
      step: '01',
      title: 'Comprehensive Assessment',
      description: 'We begin by understanding your medical history, lifestyle, movement patterns, nutritional status, and health goals.'
    },
    {
      step: '02',
      title: 'Personalized Treatment Plan',
      description: 'Based on your assessment, we develop an individualized physiotherapy and nutrition program tailored to your specific condition.'
    },
    {
      step: '03',
      title: 'Evidence-Based Care',
      description: 'Our treatments are based on scientifically proven techniques and modern rehabilitation practices to ensure safe and effective recovery.'
    },
    {
      step: '04',
      title: 'Continuous Monitoring',
      description: 'We regularly evaluate your progress, modify your treatment plan when needed, and provide ongoing guidance to help you achieve lasting results.'
    }
  ];

  const WHY_CHOOSE_US_ADVANTAGES = [
    'Personalized Patient Care',
    'Experienced Healthcare Professionals',
    'Advanced Physiotherapy Techniques',
    'Nutrition Expertise',
    'Root Cause Focused Treatment',
    'Non-Surgical Pain Management',
    'Modern Rehabilitation Programs',
    'Evidence-Based Treatment Protocols',
    'One-to-One Consultation',
    'Long-Term Health & Wellness Support'
  ];

  const CORE_VALUES = [
    {
      title: 'Compassion',
      description: 'Every patient is treated with empathy, respect, and genuine care.'
    },
    {
      title: 'Excellence',
      description: 'We are committed to delivering the highest standards of healthcare through continuous learning and evidence-based practice.'
    },
    {
      title: 'Integrity',
      description: 'We believe in honest communication, ethical treatment, and complete transparency.'
    },
    {
      title: 'Patient-Centered Care',
      description: 'Your health goals guide every treatment plan we create.'
    },
    {
      title: 'Continuous Improvement',
      description: 'We constantly update our knowledge and treatment techniques to provide the best possible care.'
    }
  ];

  const OUR_PROMISE_ITEMS = [
    'Relieve Pain Naturally',
    'Restore Strength & Mobility',
    'Improve Overall Health',
    'Build Sustainable Healthy Habits',
    'Prevent Future Injuries',
    'Achieve Long-Term Wellness'
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>
      {/* 1. HERO & INTRO NARRATIVE SECTION */}
      <section style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0d9488 100%)',
        color: '#ffffff',
        padding: '84px 0 96px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '999px',
                backgroundColor: 'rgba(45, 212, 191, 0.15)',
                border: '1px solid rgba(45, 212, 191, 0.35)',
                color: '#2dd4bf',
                fontWeight: 700,
                fontSize: '0.82rem',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                marginBottom: '18px'
              }}>
                <Sparkles size={14} /> About HealthStrings Clinic
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: 800, lineHeight: 1.18, marginBottom: '24px', color: '#ffffff' }}>
                Best Physiotherapy &amp; Nutrition Clinic in Jaipur
              </h1>

              <p style={{ fontSize: '1.08rem', lineHeight: 1.78, color: '#f1f5f9', marginBottom: '20px' }}>
                At HealthStrings Clinic, we believe that true healing goes beyond treating symptoms—it begins by understanding the root cause of your health concerns. Our mission is to provide personalized, evidence-based healthcare that helps every individual recover naturally, improve mobility, and enjoy a healthier, more active life.
              </p>

              <p style={{ fontSize: '1.03rem', lineHeight: 1.76, color: '#cbd5e1', marginBottom: '32px' }}>
                Located in C-Scheme, Jaipur, HealthStrings Clinic offers a comprehensive range of services, including Physiotherapy, Nutrition, Rehabilitation, Strength &amp; Conditioning, and Lifestyle Management. Whether you are recovering from an injury, managing chronic pain, balancing hormonal health, or working towards better overall wellness, our experienced team creates customized treatment plans designed specifically for your needs.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => {
                    if (setActivePage) setActivePage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
                    color: '#ffffff',
                    padding: '16px 32px',
                    borderRadius: '999px',
                    fontWeight: 800,
                    fontSize: '1rem',
                    border: '1px solid rgba(153, 246, 228, 0.35)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    cursor: 'pointer',
                    boxShadow: '0 10px 25px rgba(13, 148, 136, 0.4)'
                  }}
                >
                  <span>Book Your Consultation</span>
                  <ArrowRight size={18} />
                </button>

                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    padding: '15px 28px',
                    borderRadius: '999px',
                    fontWeight: 700,
                    fontSize: '0.96rem',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    textDecoration: 'none'
                  }}
                >
                  <Phone size={18} color="#2dd4bf" />
                  <span>Call: {CLINIC_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Visual Showcase Stack */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px rgba(0,0,0,0.45)',
                border: '1px solid rgba(255,255,255,0.18)'
              }}>
                <img
                  src="/hero_slide_1.jpg"
                  alt="HealthStrings Clinic Physiotherapy & Rehabilitation Jaipur"
                  style={{ width: '100%', height: '340px', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Floating Glass Verification Card */}
              <div style={{
                position: 'absolute',
                bottom: '-28px',
                left: '24px',
                right: '24px',
                background: 'rgba(15, 23, 42, 0.92)',
                backdropFilter: 'blur(16px)',
                padding: '18px 22px',
                borderRadius: '18px',
                border: '1px solid rgba(45, 212, 191, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 16px 36px rgba(0,0,0,0.4)'
              }}>
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#2dd4bf', textTransform: 'uppercase' }}>
                    Jaipur Healthcare Landmark
                  </div>
                  <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.96rem', marginTop: '2px' }}>
                    Chamber 101, Surya Hospital Bldg • C-Scheme
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#f59e0b', fontWeight: 800 }}>
                  <Star size={18} fill="#f59e0b" /> 5.0 ★
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR VISION & OUR MISSION SECTION */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            {/* Our Vision Card */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              padding: '38px 36px',
              border: '1px solid #cbd5e1',
              boxShadow: '0 10px 30px rgba(15,23,42,0.04)',
              position: 'relative'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                backgroundColor: '#f0fdf4',
                color: '#0d9488',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '22px'
              }}>
                <Target size={28} />
              </div>
              <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0d9488', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                GUIDING ASPIRATION
              </div>
              <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
                Our Vision
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.76 }}>
                To become one of Jaipur&apos;s most trusted healthcare clinics by delivering high-quality physiotherapy, nutrition, and rehabilitation services that empower people to live healthier, stronger, and pain-free lives.
              </p>
            </div>

            {/* Our Mission Card */}
            <div style={{
              backgroundColor: '#0f172a',
              color: '#ffffff',
              borderRadius: '24px',
              padding: '38px 36px',
              border: '1px solid #334155',
              boxShadow: '0 20px 40px rgba(15,23,42,0.18)',
              position: 'relative'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                backgroundColor: 'rgba(45, 212, 191, 0.15)',
                color: '#2dd4bf',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '22px'
              }}>
                <HeartPulse size={28} />
              </div>
              <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#2dd4bf', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                PATIENT COMMITMENT
              </div>
              <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
                Our Mission
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: 1.76 }}>
                Our mission is to improve the quality of life of every patient through compassionate care, scientific treatment methods, and personalized healthcare solutions. We strive to educate, rehabilitate, and support our patients throughout their recovery journey while promoting long-term health and wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO (INTEGRATED HEALTHCARE EXPERTISE) */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">WHAT WE DO</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '14px' }}>
              Integrated Healthcare &amp; Clinical Rehabilitation
            </h2>
            <p className="section-subtitle">
              HealthStrings Clinic provides integrated healthcare services that combine modern physiotherapy techniques with nutrition and rehabilitation programs.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '28px' }}>
            {WHAT_WE_DO_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '24px',
                  padding: '34px 30px',
                  boxShadow: '0 8px 24px rgba(15,23,42,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '16px',
                    backgroundColor: pillar.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '22px'
                  }}>
                    {pillar.icon}
                  </div>

                  <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0f172a', marginBottom: '20px' }}>
                    {pillar.title}
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '13px' }}>
                    {pillar.items.map((item, itemIdx) => (
                      <div key={itemIdx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.96rem', fontWeight: 600, color: '#1e293b' }}>
                        <CheckCircle2 size={18} color={pillar.color} style={{ flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR APPROACH (4-STEP CLINICAL PROCESS) */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">OUR APPROACH</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '14px' }}>
              Every Patient Is Unique, And So Is Every Treatment Plan
            </h2>
            <p className="section-subtitle">
              Our healthcare approach follows a structured, evidence-based process designed for sustained healing.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '24px' }}>
            {OUR_APPROACH_STEPS.map((stepItem, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '22px',
                  padding: '30px 24px',
                  boxShadow: '0 6px 18px rgba(15,23,42,0.03)',
                  position: 'relative'
                }}
              >
                <div style={{
                  fontSize: '2.4rem',
                  fontWeight: 900,
                  color: '#0d9488',
                  opacity: 0.85,
                  lineHeight: 1,
                  marginBottom: '16px'
                }}>
                  {stepItem.step}
                </div>
                <h3 style={{ fontSize: '1.28rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px', lineHeight: 1.35 }}>
                  {stepItem.title}
                </h3>
                <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.7 }}>
                  {stepItem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE HEALTHSTRINGS CLINIC? */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">WHY CHOOSE HEALTHSTRINGS CLINIC?</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '14px' }}>
              Choosing The Right Healthcare Provider Is Essential
            </h2>
            <p className="section-subtitle">
              At HealthStrings Clinic, you benefit from a truly integrated, ethical, and personalized clinical experience.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '18px' }}>
            {WHY_CHOOSE_US_ADVANTAGES.map((advantage, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  borderRadius: '16px',
                  padding: '18px 22px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  fontWeight: 700,
                  fontSize: '0.98rem',
                  color: '#0f172a'
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '10px',
                  backgroundColor: '#f0fdf4',
                  color: '#0d9488',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <CheckCircle size={18} />
                </div>
                <span>{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MEET OUR EXPERT (DR. MEENAKSHI KANWAR SISODIA) */}
      <section className="section-padding" style={{ backgroundColor: '#0f172a', color: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span style={{ color: '#2dd4bf', fontWeight: 800, fontSize: '0.86rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              MEET OUR EXPERT
            </span>
            <h2 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#ffffff', marginTop: '8px', marginBottom: '14px' }}>
              Dr. Meenakshi Kanwar Sisodia
            </h2>
            <div style={{ fontSize: '1.12rem', color: '#2dd4bf', fontWeight: 700 }}>
              Nutritionist | Physiotherapy &amp; Recovery Expert
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: '54px', alignItems: 'center' }}>
            {/* Portrait Image Card */}
            <div style={{
              backgroundColor: '#1e293b',
              borderRadius: '28px',
              padding: '24px',
              border: '1px solid #334155',
              boxShadow: '0 25px 50px rgba(0,0,0,0.35)',
              textAlign: 'center'
            }}>
              <img
                src="/dr_meenakshi_profile.png"
                alt="Dr. Meenakshi Kanwar Sisodia - Founder HealthStrings Clinic Jaipur"
                style={{ width: '100%', height: '380px', objectFit: 'cover', objectPosition: 'top', borderRadius: '18px', marginBottom: '20px', backgroundColor: '#ffffff' }}
              />
              <div style={{ fontSize: '1.18rem', fontWeight: 800, color: '#ffffff' }}>
                Dr. Meenakshi Kanwar Sisodia
              </div>
              <div style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '4px' }}>
                Founder &amp; Specialist Lead • HealthStrings Clinic
              </div>
            </div>

            {/* Founder Narrative */}
            <div>
              <p style={{ fontSize: '1.08rem', color: '#f1f5f9', lineHeight: 1.84, marginBottom: '24px' }}>
                Dr. Meenakshi Kanwar Sisodia is the founder of HealthStrings Clinic and is passionate about helping people improve their health through personalized physiotherapy, nutrition, and rehabilitation. Her patient-centered approach focuses on identifying the root cause of pain and lifestyle disorders while promoting sustainable recovery through movement, nutrition, and education.
              </p>

              <p style={{ fontSize: '1.06rem', color: '#cbd5e1', lineHeight: 1.82, marginBottom: '32px' }}>
                With extensive experience in rehabilitation and preventive healthcare, she has helped numerous individuals recover from injuries, manage chronic conditions, improve physical performance, and achieve healthier lifestyles.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
                <div style={{ backgroundColor: '#1e293b', padding: '18px 20px', borderRadius: '14px', border: '1px solid #334155' }}>
                  <div style={{ color: '#2dd4bf', fontWeight: 800, fontSize: '1.1rem' }}>Root Cause Focus</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.86rem', marginTop: '4px' }}>Structural &amp; metabolic healing</div>
                </div>
                <div style={{ backgroundColor: '#1e293b', padding: '18px 20px', borderRadius: '14px', border: '1px solid #334155' }}>
                  <div style={{ color: '#2dd4bf', fontWeight: 800, fontSize: '1.1rem' }}>1-on-1 Consultation</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.86rem', marginTop: '4px' }}>Personalized care protocols</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OUR CORE VALUES */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">OUR CORE VALUES</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '14px' }}>
              The Ethical Pillars That Drive Our Care
            </h2>
            <p className="section-subtitle">
              At HealthStrings Clinic, our work is guided by five foundational commitments.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px' }}>
            {CORE_VALUES.map((valueItem, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '22px',
                  padding: '30px 26px',
                  boxShadow: '0 6px 18px rgba(15,23,42,0.03)'
                }}
              >
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  backgroundColor: '#f0fdf4',
                  color: '#0d9488',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  marginBottom: '18px'
                }}>
                  0{idx + 1}
                </div>
                <h3 style={{ fontSize: '1.32rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
                  {valueItem.title}
                </h3>
                <p style={{ fontSize: '0.96rem', color: '#475569', lineHeight: 1.72 }}>
                  {valueItem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. OUR PROMISE & CLOSING CTA */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            borderRadius: '32px',
            padding: '56px 48px',
            color: '#ffffff',
            border: '1px solid #334155',
            boxShadow: '0 25px 50px rgba(15,23,42,0.18)'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
              <div>
                <div style={{ color: '#2dd4bf', fontWeight: 800, fontSize: '0.84rem', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '10px' }}>
                  OUR PROMISE TO YOU
                </div>
                <h2 style={{ fontSize: '2.3rem', fontWeight: 800, color: '#ffffff', marginBottom: '18px', lineHeight: 1.25 }}>
                  At HealthStrings Clinic, We Are Committed To Helping You:
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '28px' }}>
                  {OUR_PROMISE_ITEMS.map((promiseText, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.96rem', fontWeight: 600, color: '#e2e8f0' }}>
                      <CheckCircle2 size={18} color="#2dd4bf" style={{ flexShrink: 0 }} />
                      <span>{promiseText}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                borderRadius: '24px',
                padding: '36px 32px',
                border: '1px solid rgba(255,255,255,0.12)'
              }}>
                <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>
                  Begin Your Journey Towards Better Health
                </h3>
                <p style={{ fontSize: '0.98rem', color: '#cbd5e1', lineHeight: 1.74, marginBottom: '26px' }}>
                  Whether you&apos;re dealing with pain, recovering from an injury, managing a health condition, or simply looking to improve your quality of life, HealthStrings Clinic is here to support you with expert guidance, personalized care, and evidence-based treatment.
                </p>
                <button
                  onClick={() => {
                    if (setActivePage) setActivePage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
                    color: '#ffffff',
                    padding: '16px 32px',
                    borderRadius: '999px',
                    fontWeight: 800,
                    fontSize: '1rem',
                    border: '1px solid rgba(153, 246, 228, 0.4)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    cursor: 'pointer',
                    boxShadow: '0 12px 28px rgba(13, 148, 136, 0.4)',
                    width: '100%',
                    justifyContent: 'center'
                  }}
                >
                  <span>Book Your Consultation Today</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
