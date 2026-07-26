import React from 'react';
import { experiences, certifications, leadership, personalInfo } from '../data/portfolioData';
import { Briefcase, GraduationCap, Award, CheckCircle2, Users, Star } from 'lucide-react';

export default function ExperienceTimeline() {
  return (
    <section id="experience" style={{ padding: '5.5rem 0' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="tag">// CAREER & BACKGROUND</span>
          <h2>Professional Experience & Research</h2>
          <p>
            Proven track record spanning corporate enterprise AI, university R&D research internships, real-time data engineering, and leadership roles at NIT Warangal.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '2.5rem'
        }} className="exp-grid">

          {/* Left Column: Work Experience & Research Internships */}
          <div>
            <div style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-amber)' }}>
              <Briefcase size={20} />
              <span>Work & University R&D Experience</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {experiences.map((exp, idx) => (
                <div key={idx} className="glass-card exp-card" style={{ padding: '1.75rem', position: 'relative' }}>
                  
                  {/* Top Row: Role & Company */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                      {exp.role}
                    </h3>
                    <span className="badge badge-amber" style={{ fontSize: '0.75rem' }}>
                      {exp.period}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: '1rem' }}>
                    {exp.company} • <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>{exp.location}</span>
                  </div>

                  {/* Bullet points */}
                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem' }}>
                    {exp.description.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', marginBottom: '0.6rem', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        <CheckCircle2 size={16} color="var(--accent-emerald)" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {exp.skills.map((sk, i) => (
                      <span key={i} className="badge badge-subtle" style={{ fontSize: '0.72rem' }}>
                        {sk}
                      </span>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education, Leadership & Certifications */}
          <div>
            {/* Education Box */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-cyan)' }}>
                <GraduationCap size={20} />
                <span>Education</span>
              </div>

              <div className="glass-card exp-card" style={{ padding: '1.5rem' }}>
                <span className="badge badge-cyan" style={{ fontSize: '0.75rem', marginBottom: '0.6rem' }}>
                  2021 - 2025
                </span>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.3rem' }}>
                  National Institute of Technology Warangal (NITW)
                </h3>
                <div style={{ color: 'var(--accent-amber)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.6rem' }}>
                  Bachelor of Technology (B.Tech) - Mechanical Engineering
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: 1.5 }}>
                  Rigorous engineering curriculum combined with computer vision research and distributed AI evaluation pipelines.
                </p>
              </div>
            </div>

            {/* Leadership & Organizational Roles */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-amber)' }}>
                <Users size={20} />
                <span>Leadership & Impact</span>
              </div>

              <div className="glass-card exp-card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {leadership.map((l, idx) => (
                    <div key={idx} style={{
                      padding: '0.8rem 1rem',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)'
                    }}>
                      <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                        {l.role} <span style={{ color: 'var(--accent-cyan)', fontWeight: 400 }}>— {l.org}</span>
                      </div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.3rem', lineHeight: 1.5 }}>
                        {l.impact}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications Box */}
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-emerald)' }}>
                <Award size={20} />
                <span>Industry Certifications</span>
              </div>

              <div className="glass-card exp-card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {certifications.map((c, idx) => (
                    <div key={idx} style={{
                      padding: '0.75rem 0.9rem',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.5rem'
                    }}>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                          {c.title}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                          Verified by {c.issuer}
                        </div>
                      </div>
                      <span className="badge badge-emerald" style={{ fontSize: '0.65rem', flexShrink: 0 }}>Verified</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .exp-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .exp-card { padding: 1.25rem !important; }
        }
      `}</style>
    </section>
  );
}
