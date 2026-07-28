import React from 'react';
import { idealClients, engagementModels, testimonials } from '../data/portfolioData';
import { Users, Clock, MessageSquare, Quote, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ClientFit() {
  return (
    <section id="engagement" className="section reveal" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Sub-Section 1: Who I Work With */}
        <div style={{ marginBottom: '4.5rem' }}>
          <p className="section-label">Target Fit</p>
          <h2 className="section-title">Who I Work With</h2>
          <p className="section-desc">
            I partner with founders, CTOs, and product leaders who need production-ready AI and data engineering — shipped fast with high reliability.
          </p>

          <div className="fit-grid">
            {idealClients.map((c, idx) => (
              <div key={idx} className="card fit-card">
                <span className="badge badge-amber" style={{ alignSelf: 'flex-start', marginBottom: '0.85rem' }}>
                  {c.badge}
                </span>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>{c.type}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-Section 2: Engagement Models & Pricing Signal */}
        <div style={{ marginBottom: '4.5rem' }}>
          <p className="section-label">Engagement Models</p>
          <h2 className="section-title">How We Can Work Together</h2>
          <p className="section-desc">
            Flexible ways to engage based on your project requirements, timeline, and team structure.
          </p>

          <div className="models-grid">
            {engagementModels.map((m, idx) => (
              <div key={idx} className="card model-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.18rem' }}>{m.title}</h3>
                  <span className="badge badge-cyan">{m.badge}</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                  {m.desc}
                </p>
                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} color="var(--accent-emerald)" />
                  <span>{m.bestFor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-Section 3: Endorsements & Social Proof */}
        <div>
          <p className="section-label">Endorsements</p>
          <h2 className="section-title">Engineering Feedback</h2>
          <p className="section-desc">
            Feedback from research faculty, engineering managers, and analytics leads.
          </p>

          <div className="testimonials-grid">
            {testimonials.map((t, idx) => (
              <div key={idx} className="card testimonial-card">
                <Quote size={24} color="var(--accent-amber)" style={{ marginBottom: '0.85rem', opacity: 0.8 }} />
                <p style={{ color: 'var(--text-primary)', fontSize: '0.94rem', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1.5rem', flex: 1 }}>
                  "{t.quote}"
                </p>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>{t.author}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>{t.role}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .fit-grid, .models-grid, .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-top: 2rem;
        }

        .fit-card, .model-card, .testimonial-card {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .fit-card:hover, .model-card:hover, .testimonial-card:hover {
          transform: translateY(-3px);
          border-color: var(--border-glow);
        }

        @media (max-width: 960px) {
          .fit-grid, .models-grid, .testimonials-grid {
            grid-template-columns: 1fr;
          }
          .fit-card, .model-card, .testimonial-card {
            padding: 1.4rem;
          }
        }
      `}</style>
    </section>
  );
}
