import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function BlogSection() {
  return (
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
              category: "NUTRITION",
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
  );
}
