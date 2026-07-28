import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, Mail, Briefcase, GraduationCap, Code2, Sparkles, Terminal } from 'lucide-react';

export default function Hero() {
  const coreSkills = [
    "Python", "PyTorch", "FastAPI", "Apache Kafka", "Scikit-Learn", 
    "ChromaDB", "React", "Docker", "Apache Spark", "SQL"
  ];

  return (
    <section className="hero-section">
      {/* Ambient background glow elements */}
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-grid">
          
          {/* Left Main Intro Content */}
          <div className="hero-content">
            
            {/* Role & Education Badges */}
            <div className="hero-badges anim anim-d1">
              <span className="badge badge-amber">
                <Briefcase size={13} />
                <span>{personalInfo.currentRole}</span>
              </span>
              <span className="badge badge-cyan">
                <GraduationCap size={13} />
                <span>NIT Warangal '25</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-headline anim anim-d2">
              Building <span className="text-highlight-amber">Production AI Agents</span>, ML Systems & <span className="text-highlight-cyan">Data Pipelines</span>
            </h1>

            {/* Bio Paragraph */}
            <p className="hero-bio anim anim-d3">
              {personalInfo.bio}
            </p>

            {/* Tech Stack Strip */}
            <div className="hero-skills-wrapper anim anim-d4">
              <div className="hero-skills-label">
                <Terminal size={14} />
                <span>Core Tech Stack</span>
              </div>
              <div className="hero-skills-list">
                {coreSkills.map((sk, idx) => (
                  <span key={idx} className="badge badge-muted skill-pill">
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="hero-actions anim anim-d5">
              <a href="#projects" className="btn btn-primary hero-btn">
                <span>Explore Work</span>
                <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn btn-ghost hero-btn">
                <Mail size={16} />
                <span>Get in Touch</span>
              </a>
            </div>

          </div>

          {/* Right Visual Photo Card */}
          <div className="hero-photo-col anim anim-d3">
            <div className="hero-photo-card card">
              <div className="hero-photo-inner">
                <img
                  src={personalInfo.profilePic}
                  alt={personalInfo.name}
                  className="hero-photo"
                />
                
                {/* Photo Overlay Caption */}
                <div className="hero-photo-caption">
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f8fafc' }}>
                    {personalInfo.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-amber)', fontFamily: 'var(--font-mono)' }}>
                    AI Engineer @ Tata Electronics
                  </div>
                </div>
              </div>

              {/* Stats Bar under photo */}
              <div className="hero-stats-row">
                {personalInfo.stats.map((s, i) => (
                  <div key={i} className="hero-stat-item">
                    <div className="hero-stat-value">{s.value}</div>
                    <div className="hero-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding-top: 7.5rem;
          padding-bottom: 5rem;
          overflow: hidden;
        }

        /* Ambient Glow Background Orbs */
        .hero-glow-1 {
          position: absolute;
          top: -80px;
          left: -100px;
          width: 450px;
          height: 450px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(245, 158, 11, 0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-glow-2 {
          position: absolute;
          top: 40%;
          right: -120px;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        [data-theme="light"] .hero-glow-1 {
          background: radial-gradient(circle, rgba(217, 119, 6, 0.05) 0%, transparent 70%);
        }
        [data-theme="light"] .hero-glow-2 {
          background: radial-gradient(circle, rgba(2, 132, 199, 0.05) 0%, transparent 70%);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 3.5rem;
          align-items: center;
        }

        .hero-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 1.25rem;
        }

        .hero-headline {
          font-size: clamp(2.1rem, 4.8vw, 3.1rem);
          line-height: 1.14;
          margin-bottom: 1.25rem;
          letter-spacing: -0.03em;
        }

        .text-highlight-amber {
          color: var(--accent-amber);
        }

        .text-highlight-cyan {
          color: var(--accent-cyan);
        }

        .hero-bio {
          font-size: 1.02rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.75rem;
          max-width: 540px;
        }

        .hero-skills-wrapper {
          margin-bottom: 2rem;
          padding: 0.85rem 1rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
        }

        .hero-skills-label {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.6rem;
        }

        .hero-skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }

        .skill-pill {
          transition: transform 0.15s ease, border-color 0.15s ease;
        }

        .skill-pill:hover {
          transform: translateY(-2px);
          border-color: var(--accent-cyan);
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .hero-photo-col {
          display: flex;
          justify-content: flex-end;
        }

        .hero-photo-card {
          width: 100%;
          max-width: 360px;
          padding: 0.75rem;
          box-shadow: 0 16px 40px -10px rgba(0, 0, 0, 0.25);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .hero-photo-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-glow);
        }

        .hero-photo-inner {
          position: relative;
          border-radius: var(--radius-sm);
          overflow: hidden;
          background: var(--bg-secondary);
        }

        .hero-photo {
          width: 100%;
          height: 380px;
          display: block;
          object-fit: cover;
          object-position: top center;
        }

        .hero-photo-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 0.85rem 1rem;
          background: linear-gradient(to top, rgba(10, 15, 26, 0.92) 0%, rgba(10, 15, 26, 0.4) 70%, transparent 100%);
          backdrop-filter: blur(4px);
        }

        .hero-stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
          margin-top: 0.75rem;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border-subtle);
          text-align: center;
        }

        .hero-stat-item {
          padding: 0.25rem 0;
        }

        .hero-stat-value {
          font-family: var(--font-mono);
          font-weight: 800;
          font-size: 1.15rem;
          color: var(--text-primary);
        }

        .hero-stat-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          margin-top: 0.1rem;
        }

        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .hero-photo-col {
            justify-content: center;
            order: -1;
          }
          .hero-photo-card {
            max-width: 320px;
          }
          .hero-photo {
            height: 320px;
          }
        }

        @media (max-width: 580px) {
          .hero-section {
            padding-top: 6rem;
            padding-bottom: 3.5rem;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
