import React from 'react';
import { services } from '../data/portfolioData';
import { Bot, Mic, Database, ShieldAlert, Eye, Activity, TrendingUp, Layers, BarChart3, Search, Code } from 'lucide-react';

const iconMap = { 
  Bot, 
  Mic, 
  Database, 
  ShieldAlert, 
  Eye, 
  Activity, 
  TrendingUp, 
  Layers, 
  BarChart3, 
  Search, 
  Code 
};

export default function Services() {
  return (
    <section id="services" className="section reveal" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <p className="section-label">Capabilities</p>
        <h2 className="section-title">What I can build & deliver</h2>
        <p className="section-desc">
          Full-spectrum AI, Machine Learning, Deep Learning, Data Engineering, and Web Development capabilities for enterprise applications.
        </p>

        <div className="services-grid">
          {services.map((s, idx) => {
            const Icon = iconMap[s.icon] || Code;
            return (
              <div key={s.id} className="card service-card">
                <div className="service-icon">
                  <Icon size={20} />
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
          margin-top: 2.75rem;
        }
        .service-card {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease;
        }
        .service-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-amber);
        }
        [data-theme="light"] .service-card:hover {
          border-color: var(--accent-cyan);
        }
        .service-icon {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-sm);
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-amber);
          margin-bottom: 1.25rem;
          transition: var(--transition);
        }
        [data-theme="light"] .service-icon {
          color: var(--accent-cyan);
        }
        .service-title {
          font-size: 1.08rem;
          margin-bottom: 0.5rem;
        }
        .service-desc {
          color: var(--text-secondary);
          font-size: 0.88rem;
          line-height: 1.65;
          margin-bottom: 1.25rem;
          flex: 1;
        }
        .service-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.3rem;
        }
        @media (max-width: 960px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .services-grid { grid-template-columns: 1fr; }
          .service-card { padding: 1.4rem; }
        }
      `}</style>
    </section>
  );
}
