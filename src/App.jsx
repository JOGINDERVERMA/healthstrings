import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FitnessStudioBridgeModal from './components/FitnessStudioBridgeModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ContactPage from './pages/ContactPage';
import BackAndNeckPainPage from './pages/BackAndNeckPainPage';
import KneeShoulderPage from './pages/KneeShoulderPage';
import DiscSciaticaPage from './pages/DiscSciaticaPage';
import SportsInjuryPage from './pages/SportsInjuryPage';
import PostSurgeryPage from './pages/PostSurgeryPage';
import PostureCorrectionPage from './pages/PostureCorrectionPage';
import ChronicPainPage from './pages/ChronicPainPage';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { CLINIC_INFO } from './data/clinicData';

export default function App() {
  const [activePage, setActivePageState] = useState(() => {
    const path = window.location.pathname.replace(/^\/+/, '') || window.location.hash.replace(/^[/#]+/, '') || 'home';
    const validPages = ['home', 'about', 'services', 'service-detail', 'contact', 'back-and-neck-pain-treatment', 'knee-shoulder', 'disc-sciatica', 'sports-injury', 'post-surgery', 'posture-correction', 'chronic-pain'];
    return validPages.includes(path) ? path : 'home';
  });
  const [selectedServiceId, setSelectedServiceId] = useState('orthopedic');
  const [studioModalOpen, setStudioModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const setActivePage = (page, replace = false) => {
    const targetUrl = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== targetUrl) {
      if (replace) {
        window.history.replaceState({ page }, '', targetUrl);
      } else {
        window.history.pushState({ page }, '', targetUrl);
      }
    }
    setActivePageState(page);
  };

  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.page) {
        setActivePageState(event.state.page);
      } else {
        const path = window.location.pathname.replace(/^\/+/, '') || window.location.hash.replace(/^[/#]+/, '') || 'home';
        const validPages = ['home', 'about', 'services', 'service-detail', 'contact', 'back-and-neck-pain-treatment', 'knee-shoulder', 'disc-sciatica', 'sports-injury', 'post-surgery', 'posture-correction', 'chronic-pain'];
        setActivePageState(validPages.includes(path) ? path : 'home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Dynamic SEO Title Sync
    const seoTitles = {
      home: "Best Physiotherapy Clinic in Jaipur | C Scheme, Raja Park & Bapu Nagar | Healthstrings",
      about: "About Our Jaipur Physiotherapy Doctors | Opposite SMS Hospital | Healthstrings Clinic",
      services: "All Physiotherapy & Rehab Treatments in Jaipur | Healthstrings Clinical Directory",
      "service-detail": "Detailed Clinical Physiotherapy Protocol | Jaipur Specialist Care | Healthstrings",
      contact: "Book Physiotherapy Appointment Jaipur | Opposite SMS Hospital C Scheme | Healthstrings",
      "back-and-neck-pain-treatment": "Best Back & Neck Pain Treatment in Jaipur | Healthstrings Clinic",
      "knee-shoulder": "Best Knee & Shoulder Pain Treatment in Jaipur | Healthstrings",
      "disc-sciatica": "Sciatica & Slipped Disc Treatment Jaipur | Healthstrings Clinic",
      "sports-injury": "Sports Injury & Rehab Clinic Jaipur | Healthstrings",
      "post-surgery": "Post-Surgery Rehabilitation in Jaipur | Healthstrings Clinic",
      "posture-correction": "Posture Correction & Ergonomics Jaipur | Healthstrings Clinic",
      "chronic-pain": "Chronic Pain Management & Arthritis Treatment Jaipur | Healthstrings"
    };

    document.title = seoTitles[activePage] || seoTitles.home;
  }, [activePage]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-wrapper">
      <Header 
        activePage={activePage} 
        setActivePage={setActivePage} 
        setSelectedServiceId={setSelectedServiceId}
        onOpenStudioModal={() => setStudioModalOpen(true)}
      />

      <main>
        {activePage === 'home' && (
          <HomePage 
            setActivePage={setActivePage} 
            setSelectedServiceId={setSelectedServiceId} 
            onOpenStudioModal={() => setStudioModalOpen(true)}
          />
        )}

        {activePage === 'about' && (
          <AboutPage 
            setActivePage={setActivePage}
            onOpenStudioModal={() => setStudioModalOpen(true)}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage 
            setSelectedServiceId={setSelectedServiceId} 
            setActivePage={setActivePage} 
            onOpenStudioModal={() => setStudioModalOpen(true)}
          />
        )}

        {activePage === 'service-detail' && (
          <ServiceDetailPage 
            selectedServiceId={selectedServiceId} 
            setActivePage={setActivePage} 
            onOpenStudioModal={() => setStudioModalOpen(true)}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage 
            onOpenStudioModal={() => setStudioModalOpen(true)}
          />
        )}

        {activePage === 'back-and-neck-pain-treatment' && (
          <BackAndNeckPainPage setActivePage={setActivePage} />
        )}

        {activePage === 'knee-shoulder' && (
          <KneeShoulderPage setActivePage={setActivePage} />
        )}

        {activePage === 'disc-sciatica' && (
          <DiscSciaticaPage setActivePage={setActivePage} />
        )}

        {activePage === 'sports-injury' && (
          <SportsInjuryPage setActivePage={setActivePage} />
        )}

        {activePage === 'post-surgery' && (
          <PostSurgeryPage setActivePage={setActivePage} />
        )}

        {activePage === 'posture-correction' && (
          <PostureCorrectionPage setActivePage={setActivePage} />
        )}

        {activePage === 'chronic-pain' && (
          <ChronicPainPage setActivePage={setActivePage} />
        )}
      </main>

      <Footer 
        setActivePage={setActivePage} 
        onOpenStudioModal={() => setStudioModalOpen(true)}
      />

      <FitnessStudioBridgeModal 
        isOpen={studioModalOpen} 
        onClose={() => setStudioModalOpen(false)}
      />

      {/* Floating Quick Action Bar (WhatsApp + Call + Scroll to Top) */}
      <div className="floating-action-bar">
        <a 
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn floating-whatsapp"
          aria-label="Direct WhatsApp Consultation with Jaipur Doctor"
          title="Chat on WhatsApp (+91 92510 59302)"
        >
          <MessageCircle size={24} />
          <span className="floating-tooltip">WhatsApp Consultation</span>
        </a>

        <a 
          href={`tel:${CLINIC_INFO.phone}`}
          className="floating-btn floating-phone"
          aria-label="Direct Helpline Call"
          title={`Call ${CLINIC_INFO.phone}`}
        >
          <Phone size={22} />
          <span className="floating-tooltip">Call: {CLINIC_INFO.phone}</span>
        </a>

        {showScrollTop && (
          <button 
            onClick={scrollToTop} 
            className="floating-btn floating-scroll-top"
            aria-label="Scroll back to top"
            title="Scroll to Top"
          >
            <ArrowUp size={22} />
          </button>
        )}
      </div>
    </div>
  );
}
