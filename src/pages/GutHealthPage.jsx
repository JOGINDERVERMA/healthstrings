import React, { useEffect } from 'react';
import ServiceDetailPage from './ServiceDetailPage';

export default function GutHealthPage({ setActivePage, onOpenStudioModal }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Gut Health Nutritionist Jaipur | IBS Diet Specialist | Healthstrings";
  }, []);

  return (
    <ServiceDetailPage 
      selectedServiceId="gut-health" 
      setActivePage={setActivePage} 
      onOpenStudioModal={onOpenStudioModal} 
    />
  );
}
