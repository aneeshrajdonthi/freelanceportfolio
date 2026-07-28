import React from 'react';
import { services } from '../data/portfolioData';
import { Bot, Mic, Database, ShieldAlert, Eye, Activity } from 'lucide-react';

const iconMap = { Bot, Mic, Database, ShieldAlert, Eye, Activity };

export default function Services() {
  return (
    <section id="services" className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <p className="section-label">Services</p>
        <h2 className="section-title">What I can build for you</h2>
        <p className="section-desc">
          End-to-end AI and data engineering — from prototype to production deployment.
        </p>

        <div className="services-grid">
          {services.map(s => {
            const Icon = iconMap[s.icon];
            return (
              <div key={s.id} className="card service-card">
                <div className="service-icon">
                  {Icon && <Icon size={20} />}
                </div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.description}</p>
                <div className="service-tech">
                  {s.tech.map((t, i) => (
                    <span key={i} className="badge badge-muted">{t}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-top: 3rem;
        }
        .service-card {
          padding: 1.75rem;
          display: flex; flex-direction: column;
        }
        .service-icon {
          width: 40px; height: 40px;
          border-radius: var(--radius-sm);
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          display: flex; align-items: center; justify-content: center;
          color: var(--accent-amber);
          margin-bottom: 1.25rem;
        }
        [data-theme="light"] .service-icon {
          color: var(--accent-cyan);
        }
        .service-title {
          font-size: 1.05rem; margin-bottom: 0.5rem;
        }
        .service-desc {
          color: var(--text-secondary); font-size: 0.88rem;
          line-height: 1.65; margin-bottom: 1.25rem;
          flex: 1;
        }
        .service-tech {
          display: flex; flex-wrap: wrap; gap: 0.25rem;
        }
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .services-grid { grid-template-columns: 1fr; }
          .service-card { padding: 1.5rem; }
        }
      `}</style>
    </section>
  );
}
