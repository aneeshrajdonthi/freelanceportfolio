import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, Linkedin, Github, ArrowUpRight, Copy, Check } from 'lucide-react';

export default function ContactSection({ onCopyEmail, emailCopied }) {
  return (
    <section id="contact" className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container contact-container">
        <p className="section-label" style={{ textAlign: 'center' }}>Contact</p>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Let's work together</h2>
        <p className="section-desc" style={{ textAlign: 'center', margin: '0 auto 2.5rem' }}>
          Have a project in mind? I'm open to freelance work and select collaborations.
        </p>

        <div className="contact-links">
          <a href={`mailto:${personalInfo.email}`} className="contact-row">
            <Mail size={17} />
            <span>{personalInfo.email}</span>
            <button
              className="copy-btn"
              onClick={(e) => { e.preventDefault(); onCopyEmail(); }}
              title="Copy email"
            >
              {emailCopied ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </a>

          <a href="https://wa.me/919392576787" target="_blank" rel="noreferrer" className="contact-row">
            <Phone size={17} />
            <span>{personalInfo.phone}</span>
            <ArrowUpRight size={14} className="contact-arrow" />
          </a>

          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="contact-row">
            <Linkedin size={17} />
            <span>LinkedIn</span>
            <ArrowUpRight size={14} className="contact-arrow" />
          </a>

          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="contact-row">
            <Github size={17} />
            <span>GitHub</span>
            <ArrowUpRight size={14} className="contact-arrow" />
          </a>
        </div>
      </div>

      <style>{`
        .contact-container {
          max-width: 480px;
        }
        .contact-links {
          display: flex; flex-direction: column; gap: 0.6rem;
        }
        .contact-row {
          display: flex; align-items: center; gap: 0.75rem;
          padding: 0.85rem 1.15rem;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          text-decoration: none;
          font-size: 0.9rem;
          transition: border-color 0.15s ease;
        }
        .contact-row:hover {
          border-color: var(--border-glow);
        }
        .contact-arrow {
          margin-left: auto;
          color: var(--text-muted);
          opacity: 0.5;
        }
        .copy-btn {
          margin-left: auto;
          background: none; border: none;
          color: var(--text-muted); cursor: pointer;
          padding: 0.2rem; display: flex;
          transition: color 0.15s ease;
        }
        .copy-btn:hover { color: var(--text-primary); }
      `}</style>
    </section>
  );
}
