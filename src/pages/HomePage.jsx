import React, { useState, useEffect } from 'react';
import { 
  Phone, MapPin, Dumbbell, ShieldCheck, ArrowRight, CheckCircle2, 
  Award, Star, Clock, ChevronDown, ChevronUp, Sparkles, HeartPulse,
  Activity, Apple, ChevronLeft, Pause, Play, UserCheck, Stethoscope,
  Calendar, BookOpen, Image as ImageIcon, Users, Check, Globe, Share2, X
} from 'lucide-react';
import { 
  CLINIC_INFO, TESTIMONIALS, FAQS, EXACT_PILLARS, EXACT_CONDITIONS_LIST,
  EXACT_WHY_CHOOSE_US, EXACT_TREATMENT_PROCESS, EXACT_HEALTH_PROGRAMS
} from '../data/clinicData';

const GALLERY_ITEMS = [
  {
    id: 'rugby-educator',
    image: '/gallery/gallery_rugby.jpg',
    title: 'World Rugby Official Educator & Sports Rehab Specialist',
    subtitle: 'Dr. Meenakshi Kamwar Sisodia conducting clinical sports injury assessment & on-field rehabilitation protocols.',
    category: 'Sports Rehab & Conditioning',
    badgeColor: '#0f766e',
    badgeBg: '#f0fdf4'
  },
  {
    id: 'alumni-award',
    image: '/gallery/gallery_award.png',
    title: 'Our Proud Alumni Excellence Recognition',
    subtitle: 'Honored at REKINDLE 2025 by Jaipur Hospital College of Physiotherapy for outstanding clinical contributions to orthopedic & sports care.',
    category: 'Clinical Excellence Award',
    badgeColor: '#c2410c',
    badgeBg: '#fff7ed'
  },
  {
    id: 'clinic-suite-1',
    image: '/gallery/gallery_clinic_1.jpg',
    title: 'Advanced Physiotherapy & Spine Consultation Suite',
    subtitle: 'Dedicated clinical assessment rooms equipped with modern diagnostics opposite SMS Hospital, C-Scheme Jaipur.',
    category: 'Consultation Suite',
    badgeColor: '#0d9488',
    badgeBg: '#f0fdf4'
  },
  {
    id: 'clinic-suite-2',
    image: '/gallery/gallery_clinic_3.jpg',
    title: 'Specialized Orthopedic & Joint Rehabilitation Bay',
    subtitle: 'Targeted functional therapy and post-surgical recovery zone for optimal patient mobility and pain relief.',
    category: 'Rehabilitation Bay',
    badgeColor: '#4338ca',
    badgeBg: '#eef2ff'
  },
  {
    id: 'clinic-svg-1',
    image: '/clinic-gallery-1.svg',
    title: 'Clinical Physiotherapy Treatment & Modalities Bay',
    subtitle: 'Ergonomically designed treatment stations for electrotherapy, laser treatment, and hands-on manual physical therapy.',
    category: 'Treatment Modalities',
    badgeColor: '#0284c7',
    badgeBg: '#e0f2fe'
  },
  {
    id: 'clinic-svg-2',
    image: '/clinic-gallery-2.svg',
    title: 'Integrated Rehabilitation & Clinical Nutrition Suite',
    subtitle: 'Holistic wellness assessment area combining physical rehabilitation with specialized metabolic and PCOS dietary care.',
    category: 'Nutrition & Rehab Suite',
    badgeColor: '#7c3aed',
    badgeBg: '#f3e8ff'
  }
];

const HERO_SLIDES = [
  {
    id: 1,
    image: '/hero_slide_1.jpg',
    tag: 'PHYSIOTHERAPY & CLINICAL NUTRITION • JAIPUR',
    titleMain: 'Heal Better. Move Better.',
    titleAccent: 'Live Better.'
  },
  {
    id: 2,
    image: '/hero_slide_3.jpg',
    tag: 'EVIDENCE-BASED HEALTHCARE • SURYA HOSPITAL BLDG',
    titleMain: 'Addressing the Root Cause.',
    titleAccent: 'Long-Term Wellness.'
  },
  {
    id: 3,
    image: '/hero_slide_2.jpg',
    tag: 'REHABILITATION & CONDITIONING • C-SCHEME',
    titleMain: 'Recover Naturally.',
    titleAccent: 'Restore Mobility.'
  }
];

const getConditionVisual = (condition) => {
  switch (condition) {
    case 'Back Pain':
      return {
        category: 'Spine & Lumbar Care',
        color: '#0d9488',
        bg: '#f0fdf4',
        icon: (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Vertebral column with lumbar pain flash */}
            <path d="M10 3h4v3h-4zM10 7h4v3h-4zM10 11h4v3h-4zM9 15h6v3H9zM9 19h6v3H9z" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="rgba(13, 148, 136, 0.15)" />
            {/* Pain burst icon at lumbar */}
            <path d="M18 14l2-2m-2 6l2 2m-6-10l2-2" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )
      };
    case 'Neck Pain':
      return {
        category: 'Cervical Spine Care',
        color: '#0e7490',
        bg: '#ecfeff',
        icon: (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Head and neck profile silhouette */}
            <path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 8.5 8.5 10.2 10 11V18C10 19.5 8 20 6 21H18C16 20 14 19.5 14 18V11C15.5 10.2 16.5 8.5 16.5 6.5C16.5 4 14.5 2 12 2Z" stroke="#0e7490" strokeWidth="1.8" fill="rgba(14, 116, 144, 0.12)" />
            {/* Cervical vertebrae pain indicator */}
            <circle cx="12" cy="13.5" r="2.5" stroke="#ef4444" strokeWidth="1.8" fill="#fee2e2" />
          </svg>
        )
      };
    case 'Knee Pain':
      return {
        category: 'Knee Joint & Cartilage',
        color: '#0284c7',
        bg: '#f0f9ff',
        icon: (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Femur upper bone */}
            <path d="M9 3v5c0 1.5 1.5 3 3 3s3-1.5 3-3V3" stroke="#0284c7" strokeWidth="1.9" strokeLinecap="round" />
            {/* Tibia lower bone */}
            <path d="M9 21v-5c0-1.5 1.5-3 3-3s3 1.5 3 3v5" stroke="#0284c7" strokeWidth="1.9" strokeLinecap="round" />
            {/* Patella kneecap & joint space flash */}
            <circle cx="12" cy="12" r="2.5" stroke="#ef4444" strokeWidth="1.8" fill="#fee2e2" />
            <path d="M5 12h3M16 12h3" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        )
      };
    case 'Shoulder Pain':
      return {
        category: 'Rotator Cuff & Joint',
        color: '#0f766e',
        bg: '#f0fdf4',
        icon: (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Shoulder ball & socket joint outline */}
            <path d="M4 10c0-4 3.5-7 8-7s8 3 8 7" stroke="#0f766e" strokeWidth="1.9" strokeLinecap="round" />
            <path d="M6 14c1.5 4 4 7 6 7s4.5-3 6-7" stroke="#0f766e" strokeWidth="1.8" strokeDasharray="3 3" />
            {/* Pain point at humerus insertion */}
            <circle cx="17" cy="11" r="3" stroke="#ef4444" strokeWidth="1.8" fill="#fee2e2" />
          </svg>
        )
      };
    case 'Frozen Shoulder':
      return {
        category: 'Adhesive Capsulitis',
        color: '#0369a1',
        bg: '#e0f2fe',
        icon: (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Shoulder joint with restricted lock symbol */}
            <path d="M5 12a7 7 0 0 1 14 0" stroke="#0369a1" strokeWidth="1.9" strokeLinecap="round" />
            {/* Padlock inside joint symbolizing stiffness/frozen capsule */}
            <rect x="9" y="12" width="6" height="5" rx="1.2" stroke="#ef4444" strokeWidth="1.8" fill="#fee2e2" />
            <path d="M10.5 12V10.5a1.5 1.5 0 0 1 3 0V12" stroke="#ef4444" strokeWidth="1.8" />
          </svg>
        )
      };
    case 'Slip Disc':
      return {
        category: 'Disc Herniation Care',
        color: '#b45309',
        bg: '#fffbeb',
        icon: (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Upper vertebra bone */}
            <rect x="6" y="4" width="12" height="5" rx="1.5" stroke="#b45309" strokeWidth="1.8" fill="rgba(180, 83, 9, 0.12)" />
            {/* Lower vertebra bone */}
            <rect x="6" y="15" width="12" height="5" rx="1.5" stroke="#b45309" strokeWidth="1.8" fill="rgba(180, 83, 9, 0.12)" />
            {/* Squeezed herniated disc bulging out to the right pressing on nerve */}
            <path d="M7 11h9c2.5 0 4.5 0.8 4.5 1s-2 1-4.5 1H7" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round" fill="#fee2e2" />
          </svg>
        )
      };
    case 'Sciatica':
      return {
        category: 'Sciatic Nerve Relief',
        color: '#c2410c',
        bg: '#fff7ed',
        icon: (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Pelvic spine outline */}
            <path d="M9 4h6v5H9z" stroke="#c2410c" strokeWidth="1.8" />
            {/* Sciatic nerve pathway shooting down leg */}
            <path d="M12 9v4l3 3v5" stroke="#ef4444" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            {/* Radiating nerve pain pulses */}
            <path d="M17 14l2-1M17 17l3 1" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        )
      };
    case 'Arthritis':
      return {
        category: 'Joint Care & Arthritis',
        color: '#15803d',
        bg: '#f0fdf4',
        icon: (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Two opposing bone ends */}
            <path d="M7 4v5c0 1.5 1 2.5 2.5 2.5H12" stroke="#15803d" strokeWidth="1.9" strokeLinecap="round" />
            <path d="M17 20v-5c0-1.5-1-2.5-2.5-2.5H12" stroke="#15803d" strokeWidth="1.9" strokeLinecap="round" />
            {/* Inflammatory joint capsule waves */}
            <circle cx="12" cy="12" r="3.5" stroke="#ef4444" strokeWidth="1.8" strokeDasharray="2 2" fill="#fee2e2" />
          </svg>
        )
      };
    case 'Sports Injuries':
      return {
        category: 'Sports Rehabilitation',
        color: '#2563eb',
        bg: '#eff6ff',
        icon: (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Dynamic running athlete figure */}
            <circle cx="13" cy="5" r="2.2" stroke="#2563eb" strokeWidth="1.8" />
            <path d="M8 10l3 2 1 4M15 9l-2 3-3 2M10 19l2-3 4 2" stroke="#2563eb" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
            {/* Medical recovery cross */}
            <path d="M19 4v4M17 6h4" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )
      };
    case 'Muscle Strain':
      return {
        category: 'Myofascial Tear & Strain',
        color: '#0d9488',
        bg: '#f0fdf4',
        icon: (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Striated muscle belly outline */}
            <path d="M4 12c3-5 13-5 16 0-3 5-13 5-16 0z" stroke="#0d9488" strokeWidth="1.9" fill="rgba(13, 148, 136, 0.12)" />
            {/* Muscle fiber striations */}
            <path d="M8 12h8M10 9.5h4M10 14.5h4" stroke="#0d9488" strokeWidth="1.4" strokeLinecap="round" />
            {/* Strain/tear zigzag flash */}
            <path d="M12 7l1.5 3-2 2 1.5 3" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )
      };
    case 'Ligament Injuries':
      return {
        category: 'ACL / PCL Ligament Care',
        color: '#4338ca',
        bg: '#eef2ff',
        icon: (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Joint bone surfaces */}
            <path d="M6 5h12M6 19h12" stroke="#4338ca" strokeWidth="2" strokeLinecap="round" />
            {/* Crossed cruciate ligament bands inside knee */}
            <path d="M9 5l6 14" stroke="#4338ca" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M15 5l-2.5 5.8M10.5 13.2L9 19" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        )
      };
    case 'PCOS / PCOD':
      return {
        category: 'Hormonal Nutrition Care',
        color: '#db2777',
        bg: '#fdf2f8',
        icon: (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Female health awareness & ovarian hormone balance ribbon/ovary icon */}
            <path d="M12 21a7 7 0 1 0 0-14 7 7 0 0 0 0 14z" stroke="#db2777" strokeWidth="1.8" fill="rgba(219, 39, 119, 0.1)" />
            <path d="M12 3v4M9 12h6M12 9v6" stroke="#db2777" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        )
      };
    case 'Thyroid Disorders':
      return {
        category: 'Thyroid & Endocrine Diet',
        color: '#7c3aed',
        bg: '#f5f3ff',
        icon: (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Anatomical butterfly-shaped thyroid gland */}
            <path d="M12 8v8" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 10c-2.5-3-7-2-7 2s3.5 4.5 7 2c3.5 2.5 7 2 7-2s-4.5-5-7-2z" stroke="#7c3aed" strokeWidth="1.9" fill="rgba(124, 58, 237, 0.14)" strokeLinejoin="round" />
          </svg>
        )
      };
    case 'Diabetes':
      return {
        category: 'Blood Glucose Nutrition',
        color: '#0284c7',
        bg: '#f0f9ff',
        icon: (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Medical drop of blood with glucose test symbol */}
            <path d="M12 3C12 3 5.5 10.5 5.5 15A6.5 6.5 0 0 0 18.5 15C18.5 10.5 12 3 12 3Z" stroke="#0284c7" strokeWidth="1.9" fill="rgba(2, 132, 199, 0.14)" />
            {/* Medical glucose cross inside drop */}
            <path d="M12 11v6M9 14h6" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )
      };
    case 'Obesity':
      return {
        category: 'Weight Loss & BMI Diet',
        color: '#0d9488',
        bg: '#f0fdf4',
        icon: (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Waistline tape measurement / clinical weight icon */}
            <path d="M7 12c0-3.5 2.2-6 5-6s5 2.5 5 6-2.2 6-5 6-5-2.5-5-6z" stroke="#0d9488" strokeWidth="1.8" fill="rgba(13, 148, 136, 0.12)" />
            {/* Tape measure belt crossing waist */}
            <path d="M3 12h18" stroke="#0d9488" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M8 12v2M12 12v3M16 12v2" stroke="#0d9488" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        )
      };
    case 'Digestive Disorders':
      return {
        category: 'Gut Health & Digestion',
        color: '#059669',
        bg: '#ecfdf5',
        icon: (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Anatomical stomach & digestive tract */}
            <path d="M9 4v3c0 2-2 3-2 6a5 5 0 0 0 10 0c0-2-1.5-3.5-3-4" stroke="#059669" strokeWidth="1.9" strokeLinecap="round" fill="rgba(5, 150, 105, 0.12)" />
            <path d="M14 15c0 2-2 4-4 4H8" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        )
      };
    case 'High Blood Pressure':
      return {
        category: 'Cardiovascular Diet',
        color: '#e11d48',
        bg: '#fff1f2',
        icon: (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Anatomical heart with ECG pulse rhythm */}
            <path d="M12 20.5l-1.45-1.32C5.4 14.5 2 11.4 2 7.5 2 4.4 4.4 2 7.5 2c1.74 0 3.41.81 4.5 2.09C13.09 2.81 14.76 2 16.5 2 19.6 2 22 4.4 22 7.5c0 3.9-3.4 7-8.55 11.68L12 20.5z" stroke="#e11d48" strokeWidth="1.8" fill="rgba(225, 29, 72, 0.1)" />
            {/* ECG wave inside heart */}
            <path d="M6 11h3l1.5-3 2 6 1.5-3H18" stroke="#e11d48" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )
      };
    case 'Poor Posture':
      return {
        category: 'Postural & Ergonomics',
        color: '#0f766e',
        bg: '#f0fdf4',
        icon: (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Slouched silhouette correcting to upright alignment axis */}
            <path d="M8 18c-1.5-3-1-6 1-9" stroke="#94a3b8" strokeWidth="1.8" strokeDasharray="2 2" strokeLinecap="round" />
            {/* Upright spine line */}
            <path d="M14 4v16" stroke="#0f766e" strokeWidth="2.4" strokeLinecap="round" />
            <circle cx="14" cy="3" r="1.5" fill="#0f766e" />
            {/* Posture correction arrows */}
            <path d="M10 11l3-1" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        )
      };
    case 'Mobility Limitations':
      return {
        category: 'Range of Motion Rehab',
        color: '#0284c7',
        bg: '#f0f9ff',
        icon: (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Human figure surrounded by full 360 joint mobility arrows */}
            <circle cx="12" cy="7" r="2" stroke="#0284c7" strokeWidth="1.8" />
            <path d="M12 10v6M9 13h6M10 19l2-3 2 3" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            {/* Mobility range arc arrows */}
            <path d="M4 12a8 8 0 0 1 14.9-4M20 12a8 8 0 0 1-14.9 4" stroke="#0284c7" strokeWidth="1.6" strokeDasharray="2 2" strokeLinecap="round" />
          </svg>
        )
      };
    case 'Chronic Pain':
    default:
      return {
        category: 'Holistic Pain Management',
        color: '#d97706',
        bg: '#fffbeb',
        icon: (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Medical recovery shield with multi-point healing symbol */}
            <path d="M12 3L4 7v6c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V7l-8-4z" stroke="#d97706" strokeWidth="1.9" fill="rgba(217, 119, 6, 0.12)" strokeLinejoin="round" />
            {/* Clinical cross inside shield */}
            <path d="M12 9v6M9 12h6" stroke="#d97706" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        )
      };
  }
};

export default function HomePage({ setActivePage, setSelectedServiceId }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedGalleryImage) {
        setSelectedGalleryImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedGalleryImage]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div>
      {/* 0. Top SEO Local Authority Ticker */}
      <div className="jaipur-seo-ticker">
        <div className="jaipur-seo-ticker-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <Sparkles size={16} color="#2dd4bf" style={{ flexShrink: 0 }} />
          <span>HealthStrings Clinic Jaipur • Best Physiotherapy &amp; Nutrition Clinic in Jaipur • Opposite SMS Hospital Medical Hub (C-Scheme) • Heal Better. Move Better. Live Better. • Direct Helpline: +91 92510 59302</span>
          <Sparkles size={16} color="#2dd4bf" style={{ flexShrink: 0 }} />
        </div>
      </div>

      {/* 1. HERO BANNER SECTION (FULL-SCREEN SLIDER + CENTERED DOCTOR PROFILE & CONTENT) */}
      <section 
        className="hero-fullscreen-section"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          position: 'relative',
          minHeight: '92vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: '105px 0 115px',
          backgroundColor: '#090d16'
        }}
      >
        {/* Full-Screen Background Images with Smooth Cross-Fade */}
        {HERO_SLIDES.map((slide, idx) => (
          <div 
            key={slide.id}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: idx === currentSlide ? 0.65 : 0,
              transform: idx === currentSlide ? 'scale(1)' : 'scale(1.05)',
              transition: 'opacity 1.2s ease-in-out, transform 7s ease-out',
              zIndex: 1
            }}
          />
        ))}

        {/* Balanced Centered Dark Gradient Overlay for Maximum Legibility */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(15, 23, 42, 0.75) 0%, rgba(9, 13, 22, 0.94) 100%)',
          zIndex: 2
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 3, width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '860px', width: '100%', textAlign: 'center', margin: '0 auto' }}>
            
            {/* DOCTOR PROFILE BADGE CENTERED ABOVE CONTENT */}
            <div className="hero-doctor-badge-wrapper">
              <div className="hero-doctor-badge">
                <div className="hero-doctor-avatar">
                  <img
                    src="/dr_meenakshi_profile.png"
                    alt="Dr. Meenakshi Kanwar Sisodia, PT"
                  />
                </div>

                <div className="hero-doctor-info">
                  <div className="hero-doctor-title-row">
                    <span className="hero-doctor-name">
                      Dr. Meenakshi Kanwar Sisodia, PT
                    </span>
                    <span className="hero-doctor-tag">
                      CHIEF SPECIALIST
                    </span>
                  </div>
                  <div className="hero-doctor-credentials">
                    <Award size={14} /> BPT, MPT (Ortho &amp; Sports) • World Rugby Educator • Founder
                  </div>
                </div>
              </div>
            </div>

            {/* GEO TAG CENTERED */}
            <div className="hero-geo-wrapper">
              <div className="hero-geo-pill">
                <Sparkles size={15} color="#2dd4bf" />
                <span>{HERO_SLIDES[currentSlide].tag}</span>
              </div>
            </div>

            {/* MAIN HEADLINE CENTERED */}
            <h1 className="hero-heading-main">
              {HERO_SLIDES[currentSlide].titleMain}{' '}
              <span className="hero-heading-accent">{HERO_SLIDES[currentSlide].titleAccent}</span>
            </h1>

            {/* PILLARS BADGES CENTERED */}
            <div className="hero-pillar-badges">
              <span className="hero-pillar-pill">
                <Activity size={14} color="#2dd4bf" />
                <span>Physiotherapy &amp; Spine Care</span>
              </span>
              <span className="hero-pillar-pill">
                <Apple size={14} color="#34d399" />
                <span>Clinical Nutrition &amp; Diet</span>
              </span>
              <span className="hero-pillar-pill">
                <Dumbbell size={14} color="#38bdf8" />
                <span>Strength &amp; Conditioning</span>
              </span>
            </div>

            {/* DESCRIPTION CENTERED */}
            <p className="hero-desc-main">
              At HealthStrings Clinic, we believe that true healing begins by addressing the root cause of pain and health concerns. Our integrated approach combines advanced physiotherapy, clinical nutrition, rehabilitation, and strength &amp; conditioning to help you recover naturally, restore mobility, and achieve long-term wellness.
            </p>

            <p className="hero-desc-sub">
              Whether you're recovering from an injury, managing a lifestyle disorder, or striving for a healthier life, our expert team opposite SMS Hospital (C-Scheme) is here to guide you every step of the way.
            </p>

            {/* ACTION ROW CENTERED */}
            <div className="hero-action-row">
              <button
                onClick={() => {
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-hero-primary"
              >
                <span>Book Your Consultation Today</span>
                <ArrowRight size={18} />
              </button>

              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="btn-hero-call"
              >
                <Phone size={18} color="#2dd4bf" />
                <span>Helpline: {CLINIC_INFO.phone}</span>
              </a>
            </div>

            {/* INTERACTIVE SLIDE SELECTOR TABS & INDICATORS CENTERED AT BOTTOM */}
            <div className="hero-slide-tabs">
              <span className="hero-slide-tabs-label">
                Explore Clinical Slides:
              </span>
              <button
                type="button"
                onClick={() => setCurrentSlide(0)}
                className={`hero-slide-tab-btn ${currentSlide === 0 ? 'active' : ''}`}
              >
                01. PHYSIO &amp; SPINE
              </button>
              <button
                type="button"
                onClick={() => setCurrentSlide(1)}
                className={`hero-slide-tab-btn ${currentSlide === 1 ? 'active' : ''}`}
              >
                02. CLINICAL NUTRITION
              </button>
              <button
                type="button"
                onClick={() => setCurrentSlide(2)}
                className={`hero-slide-tab-btn ${currentSlide === 2 ? 'active' : ''}`}
              >
                03. SPORTS &amp; REHAB
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. OUR SERVICES SECTION */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">OUR SERVICES</div>
            <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '12px' }}>
              Comprehensive Healthcare Services Under One Roof
            </h2>
            <p className="section-subtitle" style={{ maxWidth: '780px' }}>
              At HealthStrings Clinic, we offer specialized healthcare services designed to improve your physical health, mobility, nutrition, and overall quality of life.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '28px' }}>
            {EXACT_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                style={{
                  backgroundColor: pillar.bgTint,
                  border: '1px solid #cbd5e1',
                  borderRadius: '24px',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 10px 30px rgba(15,23,42,0.04)'
                }}
              >
                <div>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: '#0f172a',
                    color: pillar.badgeColor,
                    padding: '6px 14px',
                    borderRadius: '999px',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    marginBottom: '16px'
                  }}>
                    PART {pillar.partNumber}
                  </div>

                  <h3 style={{ fontSize: '1.65rem', color: '#0f172a', marginBottom: '6px' }}>
                    {pillar.title}
                  </h3>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: pillar.badgeColor, marginBottom: '14px' }}>
                    {pillar.subtitle}
                  </div>

                  <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '22px' }}>
                    {pillar.description}
                  </p>

                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', marginBottom: '12px' }}>
                    {pillar.title === 'Physiotherapy Services' && 'Our Physiotherapy Services Include:'}
                    {pillar.title === 'Nutrition & Lifestyle Management' && 'Our Nutrition Services Include:'}
                    {pillar.title === 'Strength & Conditioning' && 'Our Programs Include:'}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px', marginBottom: '28px' }}>
                    {pillar.items.map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.91rem', fontWeight: 600, color: '#1e293b' }}>
                        <CheckCircle2 size={16} color={pillar.badgeColor} style={{ flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setActivePage('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="btn-book-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Explore Treatments</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CONDITIONS WE TREAT */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">CONDITIONS WE TREAT</div>
            <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '12px' }}>
              Comprehensive Care for Pain &amp; Lifestyle Disorders
            </h2>
            <p className="section-subtitle">
              We provide personalized treatment for a wide range of musculoskeletal, metabolic, and lifestyle-related conditions.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))', gap: '18px' }}>
            {EXACT_CONDITIONS_LIST.map((condition, idx) => {
              const visual = getConditionVisual(condition);
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '20px',
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    boxShadow: '0 6px 18px rgba(15,23,42,0.03)',
                    transition: 'all 0.25s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(15,23,42,0.08)';
                    e.currentTarget.style.borderColor = visual.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 6px 18px rgba(15,23,42,0.03)';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                  }}
                >
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    backgroundColor: visual.bg,
                    color: visual.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {visual.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.3 }}>
                      {condition}
                    </div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: visual.color, marginTop: '3px' }}>
                      {visual.category}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE HEALTHSTRINGS CLINIC */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">WHY CHOOSE HEALTHSTRINGS CLINIC</div>
            <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '12px' }}>
              Experience Healthcare Beyond Treatment
            </h2>
            <p className="section-subtitle">
              At HealthStrings Clinic, we combine modern healthcare techniques with compassionate patient care to deliver better health outcomes.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '22px' }}>
            {EXACT_WHY_CHOOSE_US.map((reason, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  borderRadius: '20px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ShieldCheck size={20} color="#0d9488" />
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    {reason.title}
                  </h4>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MEET OUR SPECIALIST SECTION */}
      <section className="section-padding" style={{ backgroundColor: '#0f172a', color: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '40px', alignItems: 'center' }}>
            {/* Specialist Image */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                borderRadius: '26px',
                overflow: 'hidden',
                border: '3px solid #0d9488',
                boxShadow: '0 20px 45px rgba(13,148,136,0.25)',
                maxWidth: '420px',
                width: '100%',
                backgroundColor: '#ffffff'
              }}>
                <img
                  src="/dr_meenakshi_profile.png"
                  alt="Dr. Meenakshi Kanwar Sisodia - Specialist in Physiotherapy & Clinical Nutrition"
                  style={{ width: '100%', height: '440px', objectFit: 'cover', objectPosition: 'top', display: 'block', backgroundColor: '#ffffff' }}
                />
              </div>
            </div>

            {/* Specialist Bio Content */}
            <div>
              <div className="hero-geo-pill" style={{ marginBottom: '18px' }}>
                <Stethoscope size={16} color="#2dd4bf" />
                <span>MEET OUR SPECIALIST</span>
              </div>

              <h2 style={{ fontSize: '2.4rem', color: '#ffffff', marginBottom: '8px' }}>
                Dr. Meenakshi Kanwar Sisodia
              </h2>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2dd4bf', marginBottom: '22px' }}>
                Clinical Nutritionist | Physiotherapy &amp; Recovery Expert
              </div>

              <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: 1.8, marginBottom: '26px' }}>
                Dr. Meenakshi Kanwar Sisodia is dedicated to helping individuals achieve better health through personalized physiotherapy, clinical nutrition, rehabilitation, and lifestyle management. Her patient-focused approach emphasizes treating the root cause of health concerns while promoting sustainable recovery and long-term wellness.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => {
                    setActivePage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
                    border: 'none',
                    color: '#ffffff',
                    padding: '14px 28px',
                    borderRadius: '999px',
                    fontWeight: 800,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <span>Consult Dr. Meenakshi Today</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR TREATMENT PROCESS */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">OUR TREATMENT PROCESS</div>
            <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '12px' }}>
              Your Journey Towards Better Health
            </h2>
            <p className="section-subtitle">
              A structured 5-step roadmap to ensure you heal safely, correctly, and permanently.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '22px' }}>
            {EXACT_TREATMENT_PROCESS.map((proc, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '20px',
                  padding: '26px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  boxShadow: '0 8px 24px rgba(15,23,42,0.04)'
                }}
              >
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  backgroundColor: '#0d9488',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.1rem'
                }}>
                  0{idx + 1}
                </div>
                <h3 style={{ fontSize: '1.25rem', color: '#0f172a', margin: 0 }}>
                  {proc.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#64748b', margin: 0, lineHeight: 1.65 }}>
                  {proc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HEALTH PROGRAMS */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">HEALTH PROGRAMS</div>
            <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '12px' }}>
              Customized Programs for Every Health Goal
            </h2>
            <p className="section-subtitle">
              Specialized treatment packages designed around your exact condition and lifestyle target.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))', gap: '18px' }}>
            {EXACT_HEALTH_PROGRAMS.map((prog, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#f0fdf4',
                  border: '1px solid #99f6e4',
                  borderRadius: '18px',
                  padding: '22px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px'
                }}
              >
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: '#0d9488',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Award size={18} />
                </div>
                <span style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a' }}>
                  {prog}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PATIENT TESTIMONIALS */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">PATIENT TESTIMONIALS</div>
            <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '12px' }}>
              Real Stories. Real Results.
            </h2>
            <p className="section-subtitle">
              Read inspiring success stories from patients who have transformed their health through expert physiotherapy, personalized nutrition, and rehabilitation programs at HealthStrings Clinic.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '26px' }}>
            {TESTIMONIALS.map((test, idx) => (
              <div key={idx} className="review-card" style={{ backgroundColor: '#ffffff' }}>
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

      {/* 9. GALLERY SECTION (INTERACTIVE HOVER OVERLAY + LIGHTBOX ZOOM) */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">CLINICAL GALLERY &amp; RECOGNITION</div>
            <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '12px', fontWeight: 800 }}>
              Explore HealthStrings Clinic &amp; Achievements
            </h2>
            <p className="section-subtitle">
              Hover over any image below for details, and click to view the full high-resolution photograph of our specialist doctors, sports rehab protocols, and consultation suites.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '26px' }}>
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                className="gallery-card-item"
                onClick={() => setSelectedGalleryImage(item)}
              >
                <div className="gallery-img-box">
                  <img src={item.image} alt={item.title} className="gallery-card-img" />
                  <div className="gallery-hover-overlay">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'auto' }}>
                      <span style={{
                        backgroundColor: item.badgeBg,
                        color: item.badgeColor,
                        padding: '5px 12px',
                        borderRadius: '999px',
                        fontSize: '0.76rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                      }}>
                        {item.category}
                      </span>
                    </div>
                    <div className="gallery-zoom-badge">
                      <Sparkles size={15} />
                      <span>🔍 Click to Zoom Full Image</span>
                    </div>
                  </div>
                </div>

                <div style={{ padding: '22px' }}>
                  <div style={{
                    fontSize: '0.76rem',
                    fontWeight: 800,
                    color: item.badgeColor,
                    textTransform: 'uppercase',
                    marginBottom: '6px'
                  }}>
                    {item.category}
                  </div>
                  <h3 style={{ fontSize: '1.16rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px', lineHeight: 1.35 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. HEALTH BLOG PREVIEW */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">HEALTH BLOG</div>
            <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '12px' }}>
              Expert Health Tips &amp; Wellness Articles
            </h2>
            <p className="section-subtitle">
              Stay updated with informative articles on physiotherapy, nutrition, weight management, PCOS, thyroid care, diabetes, rehabilitation, pain relief, and preventive healthcare.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px' }}>
            {[
              {
                title: "How Spinal Decompression Resolves Sciatica Without Surgery",
                category: "PHYSIOTHERAPY & SPINE",
                date: "July 2026",
                desc: "Discover how non-surgical traction creates negative intervertebral disc pressure to retract herniated discs."
              },
              {
                title: "The Hormonal Root Cause of PCOS: Why Restrictive Diets Fail",
                category: "CLINICAL NUTRITION",
                date: "July 2026",
                desc: "Learn why metabolic insulin sensitivity and anti-inflammatory food combinations are essential for hormone balance."
              },
              {
                title: "Ergonomic Office Posture: Preventing Cervical Spondylosis at Work",
                category: "PREVENTIVE HEALTH",
                date: "July 2026",
                desc: "Practical screen alignment, scapular stabilization drills, and daily habits for Jaipur professionals."
              }
            ].map((blog, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '22px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0d9488', backgroundColor: '#f0fdf4', padding: '6px 12px', borderRadius: '999px' }}>
                    {blog.category}
                  </span>
                  <h3 style={{ fontSize: '1.3rem', color: '#0f172a', marginTop: '14px', marginBottom: '12px', lineHeight: 1.4 }}>
                    {blog.title}
                  </h3>
                  <p style={{ fontSize: '0.93rem', color: '#64748b', lineHeight: 1.65 }}>
                    {blog.desc}
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
                  <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{blog.date}</span>
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0d9488', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    Read Article <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FREQUENTLY ASKED QUESTIONS */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">FREQUENTLY ASKED QUESTIONS</div>
            <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '12px' }}>
              Everything You Need to Know
            </h2>
            <p className="section-subtitle">
              Find answers to common questions about physiotherapy, nutrition consultations, treatment plans, appointments, rehabilitation, and wellness programs.
            </p>
          </div>

          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="faq-item"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                style={{ backgroundColor: '#f8fafc' }}
              >
                <div className="faq-question">
                  <span>{faq.q}</span>
                  {openFaq === index ? <ChevronUp size={20} color="#0d9488" /> : <ChevronDown size={20} color="#64748b" />}
                </div>
                {openFaq === index && (
                  <div className="faq-answer">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BOOK YOUR CONSULTATION BANNER */}
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
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
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

      {/* 13. CONTACT US SECTION (OFFICIAL LOCATION DIRECTORY) */}
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
        </div>
      </section>

      {/* FULL-SCREEN INTERACTIVE LIGHTBOX MODAL */}
      {selectedGalleryImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedGalleryImage(null)}>
          <div className="lightbox-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close-btn"
              onClick={() => setSelectedGalleryImage(null)}
              title="Close Full Screen Image (Esc)"
            >
              <X size={22} />
            </button>

            <div className="lightbox-img-wrapper">
              <img
                src={selectedGalleryImage.image}
                alt={selectedGalleryImage.title}
                className="lightbox-full-img"
              />
            </div>

            <div style={{ padding: '28px 34px', background: '#ffffff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
                <span style={{
                  backgroundColor: selectedGalleryImage.badgeBg,
                  color: selectedGalleryImage.badgeColor,
                  padding: '5px 14px',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  textTransform: 'uppercase'
                }}>
                  {selectedGalleryImage.category}
                </span>
                <span style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: 600 }}>
                  • High Resolution Clinical Showcase
                </span>
              </div>

              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 10px', lineHeight: 1.3 }}>
                {selectedGalleryImage.title}
              </h3>
              <p style={{ fontSize: '1.02rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                {selectedGalleryImage.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
