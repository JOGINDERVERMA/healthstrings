import React, { useEffect } from 'react';
import ServiceDetailPage from './ServiceDetailPage';

export default function SportsNutritionPage({ setActivePage, onOpenStudioModal }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sports Nutritionist Jaipur | Athletic Diet Chart | Healthstrings";
  }, []);

  return (
    <ServiceDetailPage 
      selectedServiceId="sports-nutrition" 
      setActivePage={setActivePage} 
      onOpenStudioModal={onOpenStudioModal} 
    />
  );
}
