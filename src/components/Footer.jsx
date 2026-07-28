import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {personalInfo.name}</p>
        <div className="footer-links">
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${personalInfo.email}`}>Email</a>
        </div>
      </div>

      <style>{`
        .site-footer {
          padding: 2rem 0;
          border-top: 1px solid var(--border-subtle);
        }
        .footer-inner {
          display: flex; align-items: center; justify-content: space-between;
          font-size: 0.82rem; color: var(--text-muted);
        }
        .footer-links {
          display: flex; gap: 1.5rem;
        }
        .footer-links a {
          color: var(--text-muted); text-decoration: none;
          transition: color 0.15s ease;
        }
        .footer-links a:hover { color: var(--text-primary); }
        @media (max-width: 560px) {
          .footer-inner { flex-direction: column; gap: 0.75rem; text-align: center; }
        }
      `}</style>
    </footer>
  );
}
