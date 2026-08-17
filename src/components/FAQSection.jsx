import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { FAQS } from '../data/clinicData';

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState(-1);

  return (
    <section className="section-padding" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">FREQUENTLY ASKED QUESTIONS</div>
          <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '12px' }}>
            Everything You Need to Know
          </h2>
          <p className="section-subtitle">
            Find answers to common questions about physiotherapy, nutrition consultations, treatment plans, appointments, rehabilitation, and wellness programs.
          </p>
        </div>

        <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="faq-item"
              onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              style={{ backgroundColor: '#f8fafc' }}
            >
              <div className="faq-question">
                <span>{faq.q}</span>
                {openFaq === index ? <ChevronUp size={20} color="#0d9488" /> : <ChevronDown size={20} color="#64748b" />}
              </div>
              {openFaq === index && (
                <div className="faq-answer">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
