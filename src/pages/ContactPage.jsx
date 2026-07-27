import React, { useState } from 'react';
import { 
  Phone, MapPin, Clock, MessageCircle, Globe, Sparkles, ShieldCheck, Lock, 
  CheckCircle2, Activity, Send, ArrowRight, Loader2, Calendar, User, FileText, CheckCircle
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

// ============================================================================
// GOOGLE SHEETS APPS SCRIPT WEB APP URL
// Once you deploy your Google Apps Script (instructions below), paste your URL right here:
// ============================================================================
const GOOGLE_SHEETS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxajcFWWVJ5zeXz0eyFQNEVVzXSTvc_l8ylyKq5dCzfOPF9ahxlQ0svuC3xKAx65Nby0A/exec';

export default function ContactPage({ onOpenStudioModal }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Physiotherapy Services',
    condition: 'Back & Neck Pain Treatment',
    neighborhood: 'C Scheme (Near SMS Hospital)',
    timeSlot: 'Morning (8:00 AM – 1:00 PM)',
    notes: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Prepare payload for Google Sheets
    const payload = {
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      name: formData.name,
      phone: formData.phone,
      service: formData.service,
      condition: formData.condition,
      neighborhood: formData.neighborhood,
      timeSlot: formData.timeSlot,
      notes: formData.notes || 'None'
    };

    try {
      if (GOOGLE_SHEETS_SCRIPT_URL && GOOGLE_SHEETS_SCRIPT_URL !== 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE') {
        // Send live request to Google Apps Script Web App
        // We use mode: 'no-cors' so browsers never block the POST request across domains
        await fetch(GOOGLE_SHEETS_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        });
        setStatus('success');
      } else {
        // If URL is not yet pasted by user, simulate realistic network delay for preview/testing
        setTimeout(() => {
          setStatus('success');
        }, 1200);
      }
    } catch (err) {
      console.error('Submission error:', err);
      // Even if network fails, we offer WhatsApp instant fallback
      setStatus('error');
      setErrorMessage('Could not connect to the sheet server right now. Please use the WhatsApp button below for instant booking.');
    }
  };

  const handleWhatsAppInstantBooking = () => {
    const text = `Hello Healthstrings Clinic Jaipur,%0A%0AI would like to book a consultation:%0A*Patient Name:* ${formData.name || 'Not filled yet'}%0A*Mobile:* ${formData.phone || '+91'}%0A*Area in Jaipur:* ${formData.neighborhood}%0A*Healthcare Category:* ${formData.service}%0A*Condition/Goal:* ${formData.condition}%0A*Preferred Slot:* ${formData.timeSlot}%0A*Additional Notes:* ${formData.notes || 'None'}`;
    window.open(`https://wa.me/919251059302?text=${text}`, '_blank');
  };

  return (
    <div className="contact-page-wrapper" style={{ backgroundColor: '#f8fafc', paddingBottom: '60px' }}>
      
      {/* 1. COMPACT HERO BANNER */}
      <section style={{
        background: 'linear-gradient(135deg, #090d16 0%, #1e293b 60%, #0f172a 100%)',
        color: '#ffffff',
        padding: '48px 0 54px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(45, 212, 191, 0.18)',
              border: '1px solid rgba(45, 212, 191, 0.45)',
              color: '#2dd4bf',
              padding: '5px 14px',
              borderRadius: '999px',
              fontSize: '0.8rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              marginBottom: '14px'
            }}>
              <MapPin size={13} /> SURYA HOSPITAL BUILDING • C-SCHEME JAIPUR
            </div>

            <h1 style={{
              fontSize: 'clamp(2.1rem, 3.8vw, 3.1rem)',
              fontWeight: 800,
              lineHeight: 1.16,
              color: '#ffffff',
              marginBottom: '14px'
            }}>
              Start Your Journey Towards Better Health
            </h1>

            <p style={{
              fontSize: 'clamp(0.98rem, 1.2vw, 1.1rem)',
              color: '#cbd5e1',
              lineHeight: 1.68,
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Don&apos;t let pain or lifestyle disorders affect your daily life. Book your consultation with HealthStrings Clinic and receive personalized care from experienced healthcare professionals opposite SMS Hospital.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PERFECTLY BALANCED NATIVE REACT FORM & DIRECTORY SECTION */}
      <section style={{ padding: '36px 0 60px' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', 
            gap: '28px', 
            alignItems: 'flex-start' 
          }}>
            
            {/* LEFT COLUMN: NATIVE LUXURY REACT INTAKE FORM (AUTOMATIC GOOGLE SHEETS SYNC) */}
            <div className="google-form-embed-wrapper">
              
              {/* Dark Luxury Header Box */}
              <div style={{
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                padding: '26px 26px 22px',
                color: '#ffffff',
                borderBottom: '3px solid #0d9488',
                position: 'relative'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.74rem',
                    fontWeight: 800,
                    color: '#2dd4bf',
                    textTransform: 'uppercase',
                    letterSpacing: '0.8px',
                    backgroundColor: 'rgba(45, 212, 191, 0.15)',
                    border: '1px solid rgba(45, 212, 191, 0.35)',
                    padding: '4px 12px',
                    borderRadius: '999px'
                  }}>
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#2dd4bf', display: 'inline-block', boxShadow: '0 0 8px #2dd4bf' }} />
                    LIVE ONLINE INTAKE DESK
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.78rem', color: '#94a3b8', fontWeight: 600 }}>
                    <Lock size={13} color="#2dd4bf" />
                    <span>Auto-Syncs to Clinical Google Sheet</span>
                  </div>
                </div>

                <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px', lineHeight: 1.2 }}>
                  Patient Consultation Form
                </h2>
                <p style={{ fontSize: '0.94rem', color: '#cbd5e1', lineHeight: 1.6, margin: 0 }}>
                  Please fill out your details below. Once submitted, your inquiry is instantly logged into our real-time clinical database opposite SMS Hospital.
                </p>

                {/* Trust Badges Bar */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  flexWrap: 'wrap',
                  marginTop: '16px',
                  paddingTop: '14px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: '#e2e8f0'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={15} color="#2dd4bf" /> Direct Medical Review
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <ShieldCheck size={15} color="#2dd4bf" /> Confidential Data Protection
                  </div>
                </div>
              </div>

              {/* Form Content Area */}
              <div style={{ padding: '32px 28px', backgroundColor: '#ffffff', flexGrow: 1 }}>
                
                {status === 'success' ? (
                  /* SUCCESS CONFIRMATION STATE */
                  <div style={{ textAlign: 'center', padding: '24px 12px 16px' }}>
                    <div style={{
                      width: '84px',
                      height: '84px',
                      borderRadius: '50%',
                      backgroundColor: '#f0fdf4',
                      color: '#0d9488',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                      boxShadow: '0 12px 28px rgba(13, 148, 136, 0.2)'
                    }}>
                      <CheckCircle2 size={48} />
                    </div>
                    
                    <h3 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
                      Consultation Request Confirmed!
                    </h3>
                    
                    <p style={{ fontSize: '1.02rem', color: '#475569', lineHeight: 1.74, marginBottom: '24px' }}>
                      Thank you, <strong style={{ color: '#0f172a' }}>{formData.name}</strong>. Your inquiry has been securely logged into our clinical database for <strong style={{ color: '#0d9488' }}>{formData.service}</strong> ({formData.condition}). Our coordination desk opposite SMS Hospital will reach out to <strong style={{ color: '#0f172a' }}>{formData.phone}</strong> shortly to confirm your <strong style={{ color: '#0f172a' }}>{formData.timeSlot}</strong> slot.
                    </p>

                    <div style={{
                      backgroundColor: '#f8fafc',
                      borderRadius: '16px',
                      padding: '18px',
                      border: '1px solid #e2e8f0',
                      textAlign: 'left',
                      marginBottom: '28px',
                      fontSize: '0.92rem',
                      color: '#334155'
                    }}>
                      <div style={{ fontWeight: 800, color: '#0f172a', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Calendar size={16} color="#0d9488" /> Logged Inquiry Details:
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                        <div><strong>Patient:</strong> {formData.name}</div>
                        <div><strong>Area:</strong> {formData.neighborhood}</div>
                        <div><strong>Category:</strong> {formData.service}</div>
                        <div><strong>Preferred Slot:</strong> {formData.timeSlot}</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                      <button
                        type="button"
                        onClick={handleWhatsAppInstantBooking}
                        style={{
                          flexGrow: 1,
                          backgroundColor: '#22c55e',
                          color: '#ffffff',
                          padding: '15px 24px',
                          borderRadius: '999px',
                          fontWeight: 800,
                          fontSize: '0.96rem',
                          border: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          cursor: 'pointer',
                          boxShadow: '0 8px 22px rgba(34, 197, 94, 0.35)'
                        }}
                      >
                        <MessageCircle size={18} />
                        <span>Instant WhatsApp Confirmation</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setStatus('idle');
                          setFormData({
                            name: '',
                            phone: '',
                            service: 'Physiotherapy Services',
                            condition: 'Back & Neck Pain Treatment',
                            neighborhood: 'C Scheme (Near SMS Hospital)',
                            timeSlot: 'Morning (8:00 AM – 1:00 PM)',
                            notes: ''
                          });
                        }}
                        style={{
                          backgroundColor: '#0f172a',
                          color: '#ffffff',
                          padding: '15px 26px',
                          borderRadius: '999px',
                          fontWeight: 800,
                          fontSize: '0.96rem',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        Book Another Appointment
                      </button>
                    </div>
                  </div>
                ) : (
                  /* INTERACTIVE FORM STATE */
                  <form onSubmit={handleSubmit}>
                    
                    {/* Row 1: Name & Phone */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '18px', marginBottom: '18px' }}>
                      <div>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', fontWeight: 700, color: '#1e293b', marginBottom: '6px' }}>
                          <User size={15} color="#0d9488" /> Patient Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.name}
                          onChange={handleChange}
                          style={{
                            width: '100%',
                            padding: '13px 16px',
                            borderRadius: '14px',
                            border: '1.5px solid #cbd5e1',
                            fontSize: '0.96rem',
                            color: '#0f172a',
                            outline: 'none',
                            transition: 'border-color 0.2s ease',
                            backgroundColor: '#ffffff'
                          }}
                          onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                          onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', fontWeight: 700, color: '#1e293b', marginBottom: '6px' }}>
                          <Phone size={15} color="#0d9488" /> Mobile / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="+91 92510 59302"
                          value={formData.phone}
                          onChange={handleChange}
                          style={{
                            width: '100%',
                            padding: '13px 16px',
                            borderRadius: '14px',
                            border: '1.5px solid #cbd5e1',
                            fontSize: '0.96rem',
                            color: '#0f172a',
                            outline: 'none',
                            transition: 'border-color 0.2s ease',
                            backgroundColor: '#ffffff'
                          }}
                          onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                          onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                        />
                      </div>
                    </div>

                    {/* Row 2: Service & Condition */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '18px', marginBottom: '18px' }}>
                      <div>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', fontWeight: 700, color: '#1e293b', marginBottom: '6px' }}>
                          <Activity size={15} color="#0d9488" /> Healthcare Category *
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          style={{
                            width: '100%',
                            padding: '13px 16px',
                            borderRadius: '14px',
                            border: '1.5px solid #cbd5e1',
                            fontSize: '0.96rem',
                            color: '#0f172a',
                            backgroundColor: '#f8fafc',
                            outline: 'none',
                            cursor: 'pointer'
                          }}
                        >
                          <option value="Physiotherapy Services">Physiotherapy Services</option>
                          <option value="Clinical Nutrition & Lifestyle Care">Clinical Nutrition &amp; Lifestyle Care</option>
                          <option value="Strength & Conditioning">Strength &amp; Conditioning</option>
                        </select>
                      </div>

                      <div>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', fontWeight: 700, color: '#1e293b', marginBottom: '6px' }}>
                          <CheckCircle size={15} color="#0d9488" /> Primary Condition / Goal *
                        </label>
                        <select
                          name="condition"
                          value={formData.condition}
                          onChange={handleChange}
                          style={{
                            width: '100%',
                            padding: '13px 16px',
                            borderRadius: '14px',
                            border: '1.5px solid #cbd5e1',
                            fontSize: '0.96rem',
                            color: '#0f172a',
                            backgroundColor: '#f8fafc',
                            outline: 'none',
                            cursor: 'pointer'
                          }}
                        >
                          <option value="Back & Neck Pain Treatment">Back &amp; Neck Pain Treatment</option>
                          <option value="Knee & Shoulder Pain Management">Knee &amp; Shoulder Pain Management</option>
                          <option value="Disc Herniation & Sciatica Care">Disc Herniation &amp; Sciatica Care</option>
                          <option value="Sports Injury Rehabilitation">Sports Injury Rehabilitation</option>
                          <option value="Weight Loss & Healthy Weight Gain">Weight Loss &amp; Healthy Weight Gain</option>
                          <option value="PCOS & Hormonal Balance Diet">PCOS &amp; Hormonal Balance Diet</option>
                          <option value="Thyroid & Diabetes Nutrition Care">Thyroid &amp; Diabetes Nutrition Care</option>
                          <option value="Post-Surgery Recovery & Mobility">Post-Surgery Recovery &amp; Mobility</option>
                          <option value="General Fitness & Posture Correction">General Fitness &amp; Posture Correction</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Neighborhood & Time Slot */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '18px', marginBottom: '18px' }}>
                      <div>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', fontWeight: 700, color: '#1e293b', marginBottom: '6px' }}>
                          <MapPin size={15} color="#0d9488" /> Preferred Jaipur Neighborhood
                        </label>
                        <select
                          name="neighborhood"
                          value={formData.neighborhood}
                          onChange={handleChange}
                          style={{
                            width: '100%',
                            padding: '13px 16px',
                            borderRadius: '14px',
                            border: '1.5px solid #cbd5e1',
                            fontSize: '0.96rem',
                            color: '#0f172a',
                            backgroundColor: '#f8fafc',
                            outline: 'none',
                            cursor: 'pointer'
                          }}
                        >
                          <option value="C Scheme (Near SMS Hospital)">C Scheme (Near SMS Hospital)</option>
                          <option value="Raja Park">Raja Park</option>
                          <option value="Bapu Nagar">Bapu Nagar</option>
                          <option value="Civil Lines / Ashok Nagar">Civil Lines / Ashok Nagar</option>
                          <option value="Adarsh Nagar / Malviya Nagar">Adarsh Nagar / Malviya Nagar</option>
                          <option value="Other Area in Jaipur">Other Area in Jaipur</option>
                        </select>
                      </div>

                      <div>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', fontWeight: 700, color: '#1e293b', marginBottom: '6px' }}>
                          <Clock size={15} color="#0d9488" /> Preferred Time Slot
                        </label>
                        <select
                          name="timeSlot"
                          value={formData.timeSlot}
                          onChange={handleChange}
                          style={{
                            width: '100%',
                            padding: '13px 16px',
                            borderRadius: '14px',
                            border: '1.5px solid #cbd5e1',
                            fontSize: '0.96rem',
                            color: '#0f172a',
                            backgroundColor: '#f8fafc',
                            outline: 'none',
                            cursor: 'pointer'
                          }}
                        >
                          <option value="Morning (8:00 AM – 1:00 PM)">Morning (8:00 AM – 1:00 PM)</option>
                          <option value="Afternoon (1:00 PM – 4:30 PM)">Afternoon (1:00 PM – 4:30 PM)</option>
                          <option value="Evening (4:30 PM – 8:30 PM)">Evening (4:30 PM – 8:30 PM)</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Notes */}
                    <div style={{ marginBottom: '26px' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', fontWeight: 700, color: '#1e293b', marginBottom: '6px' }}>
                        <FileText size={15} color="#0d9488" /> Additional Notes or Symptoms (Optional)
                      </label>
                      <textarea
                        rows={3}
                        name="notes"
                        placeholder="Share any past scans, surgeries, or duration of pain..."
                        value={formData.notes}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '13px 16px',
                          borderRadius: '14px',
                          border: '1.5px solid #cbd5e1',
                          fontSize: '0.96rem',
                          color: '#0f172a',
                          outline: 'none',
                          transition: 'border-color 0.2s ease',
                          backgroundColor: '#ffffff'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                        onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                      />
                    </div>

                    {/* Error Message if Network Fails */}
                    {status === 'error' && (
                      <div style={{
                        backgroundColor: '#fef2f2',
                        color: '#b91c1c',
                        padding: '14px 18px',
                        borderRadius: '14px',
                        border: '1px solid #fca5a5',
                        marginBottom: '20px',
                        fontSize: '0.92rem',
                        fontWeight: 600
                      }}>
                        {errorMessage}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        style={{
                          flexGrow: 1,
                          background: status === 'submitting' ? '#94a3b8' : 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
                          color: '#ffffff',
                          padding: '16px 28px',
                          borderRadius: '999px',
                          fontWeight: 800,
                          fontSize: '1rem',
                          border: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '10px',
                          cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                          boxShadow: status === 'submitting' ? 'none' : '0 10px 25px rgba(13, 148, 136, 0.4)',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {status === 'submitting' ? (
                          <>
                            <Loader2 size={20} className="animate-spin" />
                            <span>Logging Inquiry to Google Sheet...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Appointment Request</span>
                            <ArrowRight size={18} />
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={handleWhatsAppInstantBooking}
                        style={{
                          backgroundColor: '#22c55e',
                          color: '#ffffff',
                          padding: '16px 24px',
                          borderRadius: '999px',
                          fontWeight: 800,
                          fontSize: '0.96rem',
                          border: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          cursor: 'pointer'
                        }}
                      >
                        <MessageCircle size={18} /> WhatsApp
                      </button>
                    </div>
                  </form>
                )}

              </div>

              {/* Bottom Support & Help Ribbon */}
              <div style={{
                backgroundColor: '#f0fdf4',
                padding: '16px 24px',
                borderTop: '1px solid #ccfbf1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 700, color: '#0f766e' }}>
                  <Phone size={16} color="#0d9488" />
                  <span>Need urgent appointment booking?</span>
                </div>
                <a
                  href="tel:+919251059302"
                  style={{
                    backgroundColor: '#0d9488',
                    color: '#ffffff',
                    padding: '8px 18px',
                    borderRadius: '999px',
                    fontWeight: 800,
                    fontSize: '0.86rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span>Call Helpline: +91 92510 59302</span>
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: OFFICIAL SURYA HOSPITAL BUILDING ADDRESS (STICKY & SNUG) */}
            <div style={{ position: 'sticky', top: '100px' }}>
              <div style={{
                backgroundColor: '#0f172a',
                color: '#ffffff',
                borderRadius: '28px',
                padding: '32px 28px',
                boxShadow: '0 20px 45px rgba(15,23,42,0.16)',
                border: '1px solid #334155'
              }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#2dd4bf', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                  OFFICIAL JAIPUR CLINIC HEADQUARTERS
                </div>
                <h3 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#ffffff', marginBottom: '22px' }}>
                  HealthStrings Clinic
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  
                  {/* Address Box */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '14px', backgroundColor: 'rgba(45,212,191,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2dd4bf', flexShrink: 0 }}>
                      <MapPin size={22} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '3px' }}>
                        ADDRESS
                      </div>
                      <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.6 }}>
                        Chamber – 101, First Floor<br />
                        Surya Hospital Building<br />
                        Opp. SMS Hospital<br />
                        C-Scheme, Ashok Nagar<br />
                        Jaipur, Rajasthan
                      </div>
                    </div>
                  </div>

                  {/* Direct Phone Box */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '14px', backgroundColor: 'rgba(45,212,191,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2dd4bf', flexShrink: 0 }}>
                      <Phone size={22} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '3px' }}>
                        DIRECT HELPLINE
                      </div>
                      <a href="tel:+919251059302" style={{ fontSize: '1.3rem', fontWeight: 800, color: '#2dd4bf', textDecoration: 'none' }}>
                        +91 92510 59302
                      </a>
                      <div style={{ fontSize: '0.86rem', color: '#cbd5e1', marginTop: '2px' }}>
                        Instant appointments &amp; emergency consultations
                      </div>
                    </div>
                  </div>

                  {/* Hours Box */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '14px', backgroundColor: 'rgba(45,212,191,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2dd4bf', flexShrink: 0 }}>
                      <Clock size={22} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '3px' }}>
                        CONSULTATION HOURS
                      </div>
                      <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#ffffff' }}>
                        Monday – Saturday: 8:00 AM – 8:30 PM
                      </div>
                      <div style={{ fontSize: '0.86rem', color: '#cbd5e1', marginTop: '2px' }}>
                        Sunday: Prior appointment bookings only
                      </div>
                    </div>
                  </div>

                  {/* Official Website */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '14px', backgroundColor: 'rgba(45,212,191,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2dd4bf', flexShrink: 0 }}>
                      <Globe size={22} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '3px' }}>
                        WEBSITE &amp; ONLINE PORTAL
                      </div>
                      <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff' }}>
                        www.healthstrings.in
                      </div>
                      <div style={{ fontSize: '0.86rem', color: '#2dd4bf', marginTop: '2px' }}>
                        Your Partner in Better Health
                      </div>
                    </div>
                  </div>

                </div>

                {/* Instant WhatsApp Help Button Inside Card */}
                <div style={{ marginTop: '26px', paddingTop: '22px', borderTop: '1px solid #334155' }}>
                  <button
                    onClick={handleWhatsAppInstantBooking}
                    style={{
                      backgroundColor: '#22c55e',
                      color: '#ffffff',
                      padding: '14px 22px',
                      borderRadius: '999px',
                      fontWeight: 800,
                      fontSize: '0.96rem',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      width: '100%',
                      boxShadow: '0 8px 20px rgba(34, 197, 94, 0.35)'
                    }}
                  >
                    <MessageCircle size={18} />
                    <span>Chat Instantly on WhatsApp</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. FOOTER TAGLINE BANNER (SNUG) */}
      <section style={{ padding: '36px 0 44px', backgroundColor: '#ffffff', borderTop: '1px solid #cbd5e1', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <div className="section-tag" style={{ marginBottom: '12px' }}>HEALTHSTRINGS CLINIC JAIPUR</div>
            <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
              Your Partner in Better Health
            </h2>
            <p style={{ fontSize: '1.02rem', color: '#475569', lineHeight: 1.7 }}>
              HealthStrings Clinic provides trusted physiotherapy, clinical nutrition, rehabilitation, and wellness solutions to help you recover naturally, move confidently, and live a healthier life.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
