import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, MapPin, Dumbbell, ChevronDown, Menu, X, 
  Activity, Calendar, ShieldCheck, ArrowRight, Sparkles 
} from 'lucide-react';
import { CLINIC_INFO, CORE_SERVICES } from '../data/clinicData';

export default function Header({ activePage, setActivePage, setSelectedServiceId, onOpenStudioModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobilePanel, setActiveMobilePanel] = useState('main');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const dropdownContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside or Escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownContainerRef.current && !dropdownContainerRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setServicesDropdownOpen(false);
        setMobileMenuOpen(false);
        setActiveMobilePanel('main');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleMouseEnterDropdown = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 160);
  };

  const navigateTo = (page) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    setActiveMobilePanel('main');
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceDetail = (serviceId) => {
    if (setSelectedServiceId) {
      setSelectedServiceId(serviceId);
    }
    
    const dedicatedRoutes = {
      'orthopedic': 'back-and-neck-pain-treatment',
      'knee-shoulder': 'knee-shoulder',
      'disc-sciatica': 'disc-sciatica',
      'sports-injury': 'sports-injury',
      'post-surgery': 'post-surgery',
      'posture-correction': 'posture-correction',
      'chronic-pain': 'chronic-pain',
      'clinical-nutrition': 'clinical-nutrition',
      'pcos-diet': 'pcos-diet',
      'gut-health': 'gut-health',
      'sports-nutrition': 'sports-nutrition',
      'cardio-diabetes': 'cardio-diabetes',
      'strength-conditioning': 'strength-conditioning'
    };

    if (dedicatedRoutes[serviceId]) {
      setActivePage(dedicatedRoutes[serviceId]);
    } else {
      setActivePage('service-detail');
    }
    
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    setActiveMobilePanel('main');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header-container">
      {/* 1. Sleek Top Trust & Location Bar (Dark background with 100% crisp white text) */}
      <div className="top-announcement">
        <div className="container top-announcement-inner">
          <div className="top-announcement-left">
            <span className="top-geo-item">
              <MapPin size={14} color="#2dd4bf" />
              <span style={{ color: '#ffffff', fontWeight: 600 }}>Opposite SMS Hospital, C Scheme, Jaipur</span>
            </span>
            <span className="top-divider" style={{ color: '#64748b' }}>•</span>
            <span style={{ color: '#e2e8f0' }}>Serving C Scheme, Raja Park & Bapu Nagar</span>
            <span className="top-divider" style={{ color: '#64748b' }}>•</span>
            <span style={{ color: '#f59e0b', fontWeight: 700 }}>★ 5.0 Verified Google Rating</span>
          </div>

          <div className="top-announcement-right">
            <a href={`tel:${CLINIC_INFO.phone}`} className="top-phone-link">
              <Phone size={13} color="#2dd4bf" />
              <span style={{ color: '#ffffff' }}>Helpline: <strong style={{ color: '#2dd4bf' }}>{CLINIC_INFO.phone}</strong></span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Redesigned Pristine Sticky Main Navigation */}
      <div className={`main-header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="container nav-wrapper">
          {/* Brand Logo */}
          <div className="logo-group" onClick={() => navigateTo('home')}>
            <img 
              src="/logo.png" 
              alt="Healthstrings Official Logo" 
              className="official-brand-logo" 
            />
          </div>

          {/* Desktop Navigation Pill Bar (Hidden below 1080px to prevent overlapping) */}
          <nav className="nav-center-pill desktop-nav-only">
            <button 
              onClick={() => navigateTo('home')} 
              className={`nav-link-btn ${activePage === 'home' ? 'active' : ''}`}
            >
              Home
            </button>

            <button 
              onClick={() => navigateTo('about')} 
              className={`nav-link-btn ${activePage === 'about' ? 'active' : ''}`}
            >
              About
            </button>

            {/* Mega Menu Dropdown Bridge */}
            <div 
              className="nav-dropdown-wrapper" 
              ref={dropdownContainerRef}
              onMouseEnter={handleMouseEnterDropdown}
              onMouseLeave={handleMouseLeaveDropdown}
            >
              <button 
                onClick={() => navigateTo('services')}
                className={`nav-link-btn ${activePage === 'services' || activePage === 'service-detail' ? 'active' : ''}`}
              >
                <span>Services</span>
                <ChevronDown size={14} style={{ transform: servicesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
              </button>

              {servicesDropdownOpen && (
                <div className="mega-menu-dropdown-bridge">
                  <div className="mega-menu-dropdown">
                    <div className="mega-menu-grid">
                      {/* Left Column: Core Healthcare Pillars */}
                      <div className="mega-col">
                        <div className="mega-header">3 HEALTHCARE PILLARS</div>

                        <div className="mega-pillar-item" onClick={() => navigateTo('services')}>
                          <div className="mega-pillar-badge" style={{ backgroundColor: '#f0fdf4', color: '#0f766e' }}>
                            01
                          </div>
                          <div>
                            <div className="mega-title">Physiotherapy Services</div>
                            <div className="mega-sub">Non-Surgical Pain & Joint Rehab</div>
                          </div>
                        </div>

                        <div className="mega-pillar-item" onClick={() => navigateTo('services')}>
                          <div className="mega-pillar-badge" style={{ backgroundColor: '#fff7ed', color: '#c2410c' }}>
                            02
                          </div>
                          <div>
                            <div className="mega-title">Nutrition & Diet Lifestyle</div>
                            <div className="mega-sub">PCOS, Weight & Gut Healing</div>
                          </div>
                        </div>

                        <div className="mega-pillar-item" onClick={() => navigateTo('services')}>
                          <div className="mega-pillar-badge" style={{ backgroundColor: '#0f172a', color: '#2dd4bf' }}>
                            03
                          </div>
                          <div>
                            <div className="mega-title">Ergonomic & Postural Rehab</div>
                            <div className="mega-sub">Spinal Decompression & Posture Care</div>
                          </div>
                        </div>
                      </div>

                      {/* Right Column: Direct Detail Pages Drilldown */}
                      <div className="mega-col mega-col-wide">
                        <div className="mega-header">SPECIALIZED TREATMENT DETAILED PAGES</div>
                        <div className="mega-services-list">
                          {CORE_SERVICES.slice(1, 8).map((service) => (
                            <div
                              key={service.id}
                              className="mega-service-link"
                              onClick={() => handleSelectServiceDetail(service.id)}
                            >
                              <Activity size={15} color="#0d9488" />
                              <span>{service.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mega-footer" onClick={() => navigateTo('services')}>
                      <span>Explore All Specialized Clinical Protocols & Treatments →</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={() => navigateTo('contact')} 
              className={`nav-link-btn ${activePage === 'contact' ? 'active' : ''}`}
            >
              Contact Us
            </button>
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="nav-actions desktop-nav-only">
            <button 
              onClick={() => navigateTo('contact')}
              className="btn-book-primary"
            >
              <span>Book Appointment</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Responsive Hamburger Trigger (Visible on iPad, Tablet & Mobile below 1080px) */}
          <button 
            className="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={28} color="#0f172a" /> : <Menu size={28} color="#0f172a" />}
          </button>
        </div>
      </div>

      {/* 3. Responsive Mobile Drawer (High-Contrast, Clean & Accessible, mmenu style) */}
      <div className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={() => { setMobileMenuOpen(false); setActiveMobilePanel('main'); }}>
        <div className={`mobile-drawer-content ${mobileMenuOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
          <div className="mobile-drawer-header">
            <div className="logo-group" onClick={() => navigateTo('home')}>
              <img src="/logo.png" alt="Healthstrings Official Logo" className="official-brand-logo" style={{ height: '44px' }} />
            </div>
            <button onClick={() => { setMobileMenuOpen(false); setActiveMobilePanel('main'); }} className="mobile-close-btn" aria-label="Close Menu">
              <X size={26} color="#0f172a" />
            </button>
          </div>

          <div className="mobile-panels-wrapper">
            <div className={`mobile-panels-container ${activeMobilePanel === 'services' ? 'slide-left' : ''}`}>
              
              {/* --- MAIN PANEL --- */}
              <div className="mobile-panel main-panel">
                <div className="mobile-drawer-scroll-area">
                  <div className="mobile-drawer-links">
                    <button 
                      className={`mobile-nav-link ${activePage === 'home' ? 'active' : ''}`}
                      onClick={() => navigateTo('home')}
                    >
                      Home Page
                    </button>
                    <button 
                      className={`mobile-nav-link ${activePage === 'about' ? 'active' : ''}`}
                      onClick={() => navigateTo('about')}
                    >
                      About Jaipur Clinic
                    </button>
                    
                    <button 
                      className="mobile-nav-link mmenu-next-btn"
                      onClick={() => setActiveMobilePanel('services')}
                    >
                      <span>Treatments & Services</span>
                      <ArrowRight size={18} />
                    </button>

                    <button 
                      className={`mobile-nav-link ${activePage === 'contact' ? 'active' : ''}`}
                      onClick={() => navigateTo('contact')}
                    >
                      Contact & Book Appointment
                    </button>
                  </div>
                </div>

                <div className="mobile-drawer-bottom">
                  <div className="mobile-drawer-actions">
                    <a
                      href={`tel:${CLINIC_INFO.phone}`}
                      className="btn-book-primary"
                      style={{ width: '100%', justifyContent: 'center', textDecoration: 'none', padding: '14px', borderRadius: '12px' }}
                    >
                      <Phone size={18} />
                      <span>Call Clinic: {CLINIC_INFO.phone}</span>
                    </a>
                  </div>

                  <div className="mobile-drawer-footer">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#0d9488', fontWeight: 700, fontSize: '0.84rem' }}>
                      <ShieldCheck size={16} /> 100% VERIFIED MEDICAL STANDARD
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', margin: '4px 0 0 22px' }}>
                      Opposite SMS Hospital, C Scheme, Jaipur
                    </div>
                  </div>
                </div>
              </div>

              {/* --- SERVICES SUB-PANEL --- */}
              <div className="mobile-panel services-panel">
                <div className="mobile-panel-header">
                  <button className="mmenu-back-btn" onClick={() => setActiveMobilePanel('main')}>
                    <ChevronDown size={22} style={{ transform: 'rotate(90deg)' }} />
                    <span>Back to Main Menu</span>
                  </button>
                </div>
                
                <div className="mobile-drawer-scroll-area">
                  <div className="mobile-drawer-links" style={{ padding: '0 24px 24px' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
                      All Treatments
                    </div>
                    {CORE_SERVICES.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => handleSelectServiceDetail(s.id)}
                        className="mobile-sub-link mmenu-sub-link"
                      >
                        <Activity size={16} color="#0d9488" style={{ flexShrink: 0 }} />
                        <span>{s.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


    </header>
  );
}
