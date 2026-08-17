import React, { useEffect } from 'react';
import { 
  ArrowRight, CheckCircle2, ShieldCheck, Activity, 
  MapPin, Phone, MessageCircle, AlertCircle
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import GallerySection from '../components/GallerySection';
import BlogSection from '../components/BlogSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';
export default function BackAndNeckPainPage({ setActivePage, onOpenStudioModal }) {
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Best Back & Neck Pain Treatment in Jaipur | Healthstrings Clinic";
  }, []);

  return (
    <div className="back-neck-page">
      
      {/* 1. HERO SECTION */}
      <section style={{
        position: 'relative',
        padding: '100px 0 120px',
        backgroundColor: '#0f172a',
        overflow: 'hidden'
      }}>
        {/* Background Image with Overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'url(/spine_hero_bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to right, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.7) 100%)',
          zIndex: 1
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '800px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(45, 212, 191, 0.15)',
              border: '1px solid rgba(45, 212, 191, 0.3)',
              color: '#2dd4bf',
              padding: '6px 14px',
              borderRadius: '999px',
              fontSize: '0.8rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '24px'
            }}>
              <Activity size={14} /> SPECIALIZED PHYSIOTHERAPY CARE IN JAIPUR
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              color: '#ffffff',
              marginBottom: '24px'
            }}>
              Expert Back &amp; Neck Pain <span style={{ color: '#2dd4bf' }}>Treatment</span>
            </h1>

            <p style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
              color: '#cbd5e1',
              lineHeight: 1.7,
              marginBottom: '40px',
              maxWidth: '680px'
            }}>
              Don't let spinal discomfort restrict your life. At Healthstrings Clinic in C-Scheme, Jaipur, we provide evidence-based, non-surgical relief for sciatica, slipped discs, cervical spondylosis, and postural stiffness.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button 
                onClick={() => setActivePage('contact')}
                style={{
                  backgroundColor: '#2dd4bf',
                  color: '#0f172a',
                  padding: '16px 32px',
                  borderRadius: '999px',
                  fontWeight: 800,
                  fontSize: '1rem',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  boxShadow: '0 8px 25px rgba(45, 212, 191, 0.3)'
                }}
              >
                Book Your Consultation <ArrowRight size={18} />
              </button>
              <a 
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  padding: '16px 32px',
                  borderRadius: '999px',
                  fontWeight: 800,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer'
                }}
              >
                <MessageCircle size={18} /> WhatsApp Direct
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SYMPTOMS & CONDITIONS GRID */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
            <h2 style={{ fontSize: '2.4rem', color: '#0f172a', marginBottom: '16px', fontWeight: 800 }}>
              Are You Experiencing These Symptoms?
            </h2>
            <p className="section-subtitle">
              Back and neck pain can manifest in various ways. Ignoring early warning signs can lead to chronic nerve compression and long-term joint damage.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '24px' 
          }}>
            {[
              {
                title: 'Sciatica & Radiating Pain',
                desc: 'Sharp, shooting pain that travels from your lower back down through your glutes, thighs, or calves, often accompanied by numbness or tingling.',
                icon: <AlertCircle color="#ef4444" size={28} />
              },
              {
                title: 'Cervical Spondylosis',
                desc: 'Severe neck stiffness, especially upon waking. You may feel a grinding sensation when turning your head, or experience frequent tension headaches.',
                icon: <AlertCircle color="#ef4444" size={28} />
              },
              {
                title: 'Slipped or Herniated Disc',
                desc: 'Intense, localized lower back pain that worsens when bending forward, sitting for long periods, or lifting objects.',
                icon: <AlertCircle color="#ef4444" size={28} />
              },
              {
                title: 'Postural Muscle Spasms',
                desc: 'Sudden, severe tightening of the back or neck muscles, usually caused by prolonged desk work, poor ergonomics, or sudden awkward movements.',
                icon: <AlertCircle color="#ef4444" size={28} />
              }
            ].map((symptom, idx) => (
              <div key={idx} style={{
                backgroundColor: '#ffffff',
                padding: '32px',
                borderRadius: '24px',
                boxShadow: '0 10px 30px rgba(15, 23, 42, 0.04)',
                border: '1px solid #e2e8f0'
              }}>
                <div style={{ 
                  width: '56px', height: '56px', 
                  borderRadius: '16px', 
                  backgroundColor: '#fef2f2', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  {symptom.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
                  {symptom.title}
                </h3>
                <p style={{ color: '#475569', lineHeight: 1.7, margin: 0 }}>
                  {symptom.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR 4-STEP PROTOCOL */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', gap: '60px', alignItems: 'center' }}>
            
            {/* Left side text */}
            <div>
              <div className="section-tag" style={{ marginBottom: '16px' }}>OUR METHODOLOGY</div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '24px', lineHeight: 1.2 }}>
                Advanced Non-Surgical Recovery Protocol
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '32px' }}>
                At Healthstrings, we don't just temporarily mask your pain with modalities. We conduct a thorough biomechanical audit to uncover the root cause of your spinal compression, and then apply a targeted, 4-step rehabilitation protocol to heal the disc and strengthen the surrounding core architecture.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { title: "Step 1: Clinical Biomechanical Audit", desc: "Precise orthopedic and neurological testing to pinpoint exactly which vertebrae, disc, or nerve root is causing your symptoms." },
                  { title: "Step 2: Acute Pain Relief Modalities", desc: "Utilizing advanced electrotherapy (IFT/TENS) and ultrasound to rapidly reduce inflammation and muscle spasms." },
                  { title: "Step 3: Manual Joint Decompression", desc: "Hands-on spinal mobilization and traction techniques to gently open joint spaces and release trapped sciatic nerves." },
                  { title: "Step 4: Deep Core Stabilization", desc: "Targeted exercises to activate the multifidus and transverse abdominis—building an 'internal corset' to prevent future relapses." }
                ].map((step, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ 
                      width: '32px', height: '32px', borderRadius: '50%', 
                      backgroundColor: '#0f766e', color: '#ffffff', 
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 800, flexShrink: 0, marginTop: '2px'
                    }}>
                      {idx + 1}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>{step.title}</h4>
                      <p style={{ color: '#475569', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side visual (could be an image or a stylistic block) */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: '-20px', left: '-20px',
                width: '100px', height: '100px',
                backgroundColor: '#ccfbf1',
                borderRadius: '50%',
                zIndex: 0
              }} />
              <div style={{
                backgroundColor: '#0f172a',
                borderRadius: '30px',
                padding: '40px',
                position: 'relative',
                zIndex: 1,
                boxShadow: '0 20px 40px rgba(15, 23, 42, 0.15)',
                color: '#ffffff'
              }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '20px' }}>Why Patients Trust Us in Jaipur</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <ShieldCheck color="#2dd4bf" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>Led by Dr. Meenakshi, a World Rugby Official Medical Educator with global expertise.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <ShieldCheck color="#2dd4bf" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>Over 10,000+ successful non-surgical spine recoveries in Rajasthan.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <ShieldCheck color="#2dd4bf" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>One-on-one dedicated therapy sessions—no crowded, rushed treatments.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <ShieldCheck color="#2dd4bf" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>Prime, accessible location directly opposite SMS Hospital in C-Scheme.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section style={{ backgroundColor: '#f0fdf4', padding: '80px 0', borderTop: '1px solid #dcfce7' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '20px' }}>
            Ready to Live Pain-Free?
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#475569', lineHeight: 1.6, marginBottom: '36px' }}>
            Whether you've just tweaked your back at the gym or have been suffering from chronic sciatica for years, our expert team in Jaipur is ready to help you recover.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => setActivePage('contact')}
              style={{
                backgroundColor: '#0d9488',
                color: '#ffffff',
                padding: '16px 36px',
                borderRadius: '999px',
                fontWeight: 800,
                fontSize: '1.05rem',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                boxShadow: '0 10px 25px rgba(13, 148, 136, 0.3)'
              }}
            >
              Book Consultation <ArrowRight size={20} />
            </button>
            <a 
              href={`tel:${CLINIC_INFO.phone}`}
              style={{
                backgroundColor: '#ffffff',
                color: '#0f172a',
                padding: '16px 36px',
                borderRadius: '999px',
                fontWeight: 800,
                fontSize: '1.05rem',
                border: '2px solid #cbd5e1',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer'
              }}
            >
              <Phone size={20} /> Call {CLINIC_INFO.phone}
            </a>
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
