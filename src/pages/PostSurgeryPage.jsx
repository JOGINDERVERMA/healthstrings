import React, { useEffect } from 'react';
import { ArrowRight, ShieldCheck, Activity, MapPin, Phone, MessageCircle, AlertCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function PostSurgeryPage({ setActivePage }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Post-Surgery Rehabilitation in Jaipur | Healthstrings Clinic";
  }, []);

  return (
    <div className="specialty-page">
      <section style={{ position: 'relative', padding: '100px 0 120px', backgroundColor: '#0f172a', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url(/post_surgery_bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.35, zIndex: 0 }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to right, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.7) 100%)', zIndex: 1 }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '800px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(45, 212, 191, 0.15)', border: '1px solid rgba(45, 212, 191, 0.3)', color: '#2dd4bf', padding: '6px 14px', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px' }}>
              <Activity size={14} /> POST-OPERATIVE CARE
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, color: '#ffffff', marginBottom: '24px' }}>
              Post-Surgery <span style={{ color: '#2dd4bf' }}>Rehabilitation</span>
            </h1>
            <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '40px', maxWidth: '680px' }}>
              A successful surgery is only 50% of your recovery. Our clinical post-op protocols in Jaipur prevent scar tissue formation, restore joint mobility, and rebuild muscular strength safely.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button onClick={() => setActivePage('contact')} style={{ backgroundColor: '#2dd4bf', color: '#0f172a', padding: '16px 32px', borderRadius: '999px', fontWeight: 800, fontSize: '1rem', border: 'none', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', boxShadow: '0 8px 25px rgba(45, 212, 191, 0.3)' }}>
                Start Your Recovery <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
            <h2 style={{ fontSize: '2.4rem', color: '#0f172a', marginBottom: '16px', fontWeight: 800 }}>Surgeries We Rehabilitate</h2>
            <p className="section-subtitle">We work closely with leading orthopedic surgeons across Jaipur (including SMS Hospital) to ensure your transition from surgery to active life is seamless.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Total Knee Replacement (TKR)', desc: 'Crucial early-stage protocols to achieve 90-120 degree knee flexion and independent, pain-free walking.' },
              { title: 'Spinal Fusions & Discectomies', desc: 'Careful core stabilization to protect the surgical hardware and prevent adjacent segment degeneration.' },
              { title: 'Shoulder Arthroscopy', desc: 'Restoring overhead reach and scapular mechanics after rotator cuff repair or labrum surgery.' },
              { title: 'Fracture & Trauma Fixation', desc: 'Safe load-bearing strategies for plates and screws, preventing muscle atrophy during immobilization.' }
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
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '24px', lineHeight: 1.2 }}>Phased Post-Op Recovery Protocol</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { title: "Phase 1: Protection & Healing (Weeks 1-3)", desc: "Strict adherence to surgeon guidelines. Focusing on pain management, swelling reduction, and gentle passive range of motion." },
                  { title: "Phase 2: Scar Tissue Management (Weeks 3-6)", desc: "Aggressive cross-friction massage and fascial release to prevent surgical adhesions from permanently restricting joint movement." },
                  { title: "Phase 3: Active Strength (Weeks 6-12)", desc: "Rebuilding the muscle mass that was lost during immobilization using progressive resistance." },
                  { title: "Phase 4: Functional Independence", desc: "Balance training, stair climbing, and dynamic gait analysis to return you to 100% normal daily function." }
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
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '20px' }}>Why the First 30 Days Matter</h3>
                <p style={{ color: '#cbd5e1', lineHeight: 1.7, marginBottom: '20px' }}>Failing to start physiotherapy within the first few weeks of a joint replacement or repair can lead to permanent joint stiffness (arthrofibrosis). We offer gentle, sterile care to ensure your new joint functions perfectly.</p>
                <button onClick={() => setActivePage('contact')} style={{ width: '100%', padding: '16px', borderRadius: '12px', backgroundColor: '#2dd4bf', color: '#0f172a', fontWeight: 800, border: 'none', cursor: 'pointer' }}>Schedule Evaluation</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
