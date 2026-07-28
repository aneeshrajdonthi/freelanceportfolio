import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section style={{ paddingTop: '8rem', paddingBottom: '4.5rem' }}>
      <div className="container">
        <div className="hero-grid">
          <div>
            <p className="hero-subtitle">{personalInfo.subtitle}</p>
            <h1 className="hero-headline">{personalInfo.tagline}</h1>
            <p className="hero-bio">{personalInfo.bio}</p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                See my work <ArrowRight size={15} />
              </a>
              <a href="#contact" className="btn btn-ghost">
                <Mail size={15} /> Get in touch
              </a>
            </div>
          </div>

          <div className="hero-photo-col">
            <div className="hero-photo-wrapper">
              <img
                src={personalInfo.profilePic}
                alt={personalInfo.name}
                className="hero-photo"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 3.5rem;
          align-items: center;
        }
        .hero-subtitle {
          font-size: 0.88rem;
          color: var(--accent-amber);
          font-weight: 600;
          margin-bottom: 1.25rem;
        }
        [data-theme="light"] .hero-subtitle {
          color: var(--accent-cyan);
        }
        .hero-headline {
          font-size: clamp(2.1rem, 5vw, 3.2rem);
          line-height: 1.12;
          margin-bottom: 1.5rem;
          letter-spacing: -0.035em;
          max-width: 560px;
        }
        .hero-bio {
          font-size: 1.02rem;
          color: var(--text-secondary);
          line-height: 1.75;
          margin-bottom: 2.25rem;
          max-width: 500px;
        }
        .hero-actions {
          display: flex; flex-wrap: wrap; gap: 0.75rem;
        }
        .hero-photo-col {
          display: flex; justify-content: flex-end;
        }
        .hero-photo-wrapper {
          width: 100%;
          max-width: 360px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--border-subtle);
        }
        .hero-photo {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          object-position: top center;
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            text-align: center;
          }
          .hero-bio { max-width: 100%; }
          .hero-actions { justify-content: center; }
          .hero-photo-col { justify-content: center; order: -1; }
          .hero-photo-wrapper { max-width: 240px; }
        }
      `}</style>
    </section>
  );
}
