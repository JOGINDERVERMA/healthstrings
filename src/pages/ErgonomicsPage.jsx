import React, { useEffect } from 'react';
import ServiceDetailPage from './ServiceDetailPage';

export default function ErgonomicsPage({ setActivePage, onOpenStudioModal }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Posture Rehab Jaipur | Ergonomic Physiotherapy | Healthstrings";
  }, []);

  return (
    <ServiceDetailPage 
      selectedServiceId="strength-conditioning" 
      setActivePage={setActivePage} 
      onOpenStudioModal={onOpenStudioModal} 
    />
  );
}
