import React, { useEffect } from 'react';
import ServiceDetailPage from './ServiceDetailPage';

export default function PcosDietPage({ setActivePage, onOpenStudioModal }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "PCOS Diet Specialist Jaipur | Hormonal Balance Dietician | Healthstrings";
  }, []);

  return (
    <ServiceDetailPage 
      selectedServiceId="pcos-diet" 
      setActivePage={setActivePage} 
      onOpenStudioModal={onOpenStudioModal} 
    />
  );
}
