import React, { useEffect } from 'react';
import ServiceDetailPage from './ServiceDetailPage';

export default function CardioDiabetesPage({ setActivePage, onOpenStudioModal }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Diabetes Dietician Jaipur | Heart Patient Nutritionist | Healthstrings";
  }, []);

  return (
    <ServiceDetailPage 
      selectedServiceId="cardio-diabetes" 
      setActivePage={setActivePage} 
      onOpenStudioModal={onOpenStudioModal} 
    />
  );
}
