import React, { useEffect } from 'react';
import ServiceDetailPage from './ServiceDetailPage';

export default function WeightLossPage({ setActivePage, onOpenStudioModal }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Weight Loss Dietician & Healthy Weight Gain Jaipur | Healthstrings";
  }, []);

  return (
    <ServiceDetailPage 
      selectedServiceId="clinical-nutrition" 
      setActivePage={setActivePage} 
      onOpenStudioModal={onOpenStudioModal} 
    />
  );
}
