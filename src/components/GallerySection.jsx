import React, { useState, useEffect } from 'react';
import { Sparkles, X } from 'lucide-react';

const GALLERY_ITEMS = [
  {
    id: 'rugby-educator',
    image: '/gallery/gallery_rugby.jpg',
    title: 'World Rugby L1 Medic',
    subtitle: 'Dr. Meenakshi Kanwar Sisodia conducting clinical sports injury assessment & on-field rehabilitation protocols.',
    category: 'Sports Rehab & Conditioning',
    badgeColor: '#0f766e',
    badgeBg: '#f0fdf4'
  }
];

export default function GallerySection() {
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

  return (
    <>
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '26px' }}>
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
    </>
  );
}
