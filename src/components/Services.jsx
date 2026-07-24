import React from 'react';
import { services } from '../data/portfolioData';
import { ShieldAlert, Database, Activity, Bot, Mic, Eye, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Services() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Bot': return <Bot size={26} color="#f59e0b" />;
      case 'Mic': return <Mic size={26} color="#06b6d4" />;
      case 'Database': return <Database size={26} color="#10b981" />;
      case 'ShieldAlert': return <ShieldAlert size={26} color="#ef4444" />;
      case 'Eye': return <Eye size={26} color="#a855f7" />;
      case 'Activity': return <Activity size={26} color="#3b82f6" />;
      default: return <Database size={26} color="#f59e0b" />;
    }
  };

  return (
    <section id="services" style={{ padding: '5.5rem 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="tag">// FREELANCE SERVICES & ENGINEERING CAPABILITIES</span>
          <h2>Full-Spectrum AI & Data Engineering</h2>
          <p>
            I deliver end-to-end custom production systems across Autonomous Agents, Voice AI, RAG Search, Computer Vision, Real-Time Streaming, and Machine Learning.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {services.map((s) => (
            <div key={s.id} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                {/* Header Icon & Title */}
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid #1e293b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}>
                  {getIcon(s.icon)}
                </div>

                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.6rem' }}>
                  {s.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  {s.tagline}
                </p>

                {/* Deliverables Checklist */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontWeight: 600, fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: '#f8fafc', marginBottom: '0.6rem' }}>
                    TECHNICAL DELIVERABLES:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {s.deliverables.map((d, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.4rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 size={15} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Badges & CTA */}
              <div style={{ borderTop: '1px solid #1e293b', paddingTop: '1.25rem', marginTop: '1rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                  {s.tech.map((t, idx) => (
                    <span key={idx} className="badge badge-subtle" style={{ fontSize: '0.7rem' }}>
                      {t}
                    </span>
                  ))}
                </div>

                <a href="#estimator" className="btn btn-secondary" style={{ width: '100%', padding: '0.6rem', fontSize: '0.85rem' }}>
                  <span>Configure Proposal Scope</span>
                  <ArrowRight size={14} />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
