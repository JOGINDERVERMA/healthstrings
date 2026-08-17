import React, { useEffect } from 'react';
import { ArrowRight, ShieldCheck, Activity, MapPin, Phone, MessageCircle, AlertCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import GallerySection from '../components/GallerySection';
import BlogSection from '../components/BlogSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';
export default function PostureCorrectionPage({ setActivePage }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Posture Correction & Ergonomics Jaipur | Healthstrings Clinic";
  }, []);

  return (
    <div className="specialty-page">
      <section style={{ position: 'relative', padding: '100px 0 120px', backgroundColor: '#0f172a', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url(/posture_correction_bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.35, zIndex: 0 }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to right, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.7) 100%)', zIndex: 1 }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '800px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(45, 212, 191, 0.15)', border: '1px solid rgba(45, 212, 191, 0.3)', color: '#2dd4bf', padding: '6px 14px', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px' }}>
              <Activity size={14} /> BIOMECHANICAL ALIGNMENT
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, color: '#ffffff', marginBottom: '24px' }}>
              Posture Correction &amp; <span style={{ color: '#2dd4bf' }}>Mobility</span>
            </h1>
            <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '40px', maxWidth: '680px' }}>
              Reverse years of desk-job damage. We treat 'Tech Neck', rounded shoulders, and anterior pelvic tilt through targeted muscle re-education and advanced mobility training.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button onClick={() => setActivePage('contact')} style={{ backgroundColor: '#2dd4bf', color: '#0f172a', padding: '16px 32px', borderRadius: '999px', fontWeight: 800, fontSize: '1rem', border: 'none', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', boxShadow: '0 8px 25px rgba(45, 212, 191, 0.3)' }}>
                Book Posture Audit <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
            <h2 style={{ fontSize: '2.4rem', color: '#0f172a', marginBottom: '16px', fontWeight: 800 }}>The Hidden Dangers of Poor Posture</h2>
            <p className="section-subtitle">Slouching doesn't just look bad—it causes unequal joint wear, restricts breathing, and creates chronic tension headaches.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Tech Neck & Headaches', desc: 'Forward head posture puts up to 60 lbs of pressure on the cervical spine, causing migraines and stiff traps.' },
              { title: 'Upper Crossed Syndrome', desc: 'Rounded shoulders and a hunched thoracic spine caused by weak upper back muscles and excessively tight chest muscles.' },
              { title: 'Anterior Pelvic Tilt', desc: 'Lower back sway and protruding abdomen caused by excessive sitting and tight hip flexors.' },
              { title: 'Scoliosis Management', desc: 'Custom bracing and Schroth-based breathing exercises to halt the progression of spinal curvature.' }
            ].map((s, idx) => (
              <div key={idx} style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(15, 23, 42, 0.04)', border: '1px solid #e2e8f0' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: '#fef2f2', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}><AlertCircle color="#ef4444" size={28} /></div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>{s.title}</h3>
                <p style={{ color: '#475569', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', gap: '60px', alignItems: 'center' }}>
            <div>
              <div className="section-tag" style={{ marginBottom: '16px' }}>CLINICAL PATHWAY</div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '24px', lineHeight: 1.2 }}>The Alignment & Ergonomics Protocol</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { title: "Step 1: Plumb Line Assessment", desc: "Digital postural analysis to measure exact degrees of deviation in your cervical and lumbar curves." },
                  { title: "Step 2: Fascial Release", desc: "Breaking down the hardened fascia in overactive muscles (like the pecs and hip flexors) that are pulling your skeleton out of alignment." },
                  { title: "Step 3: Neuromuscular Re-education", desc: "Targeted activation of dormant postural muscles (rhomboids, deep cervical flexors) using biofeedback." },
                  { title: "Step 4: Workplace Blueprint", desc: "A customized ergonomic setup for your specific desk, chair, and screen height to ensure permanent change." }
                ].map((step, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#0f766e', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0, marginTop: '2px' }}>{idx + 1}</div>
                    <div>
                      <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>{step.title}</h4>
                      <p style={{ color: '#475569', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ backgroundColor: '#0f172a', borderRadius: '30px', padding: '40px', position: 'relative', zIndex: 1, color: '#ffffff' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '20px' }}>More Than Just 'Standing Up Straight'</h3>
                <p style={{ color: '#cbd5e1', lineHeight: 1.7, marginBottom: '20px' }}>You cannot consciously hold good posture if your muscles are fundamentally unbalanced. True posture correction requires clinically breaking down tight tissues and mechanically strengthening weak ones.</p>
                <button onClick={() => setActivePage('contact')} style={{ width: '100%', padding: '16px', borderRadius: '12px', backgroundColor: '#2dd4bf', color: '#0f172a', fontWeight: 800, border: 'none', cursor: 'pointer' }}>Start Posture Training</button>
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
