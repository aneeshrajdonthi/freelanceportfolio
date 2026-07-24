import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer({ onCopyEmail }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: '#090d16',
      borderTop: '1px solid #1e293b',
      padding: '3rem 0 2rem 0',
      fontSize: '0.88rem',
      color: 'var(--text-muted)'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid #1e293b'
        }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.2rem', color: '#f8fafc', fontFamily: 'var(--font-heading)' }}>
              Aneesh Raj Donthi
            </div>
            <div style={{ color: '#06b6d4', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
              AI Engineer @ Tata Electronics | NIT Warangal '25
            </div>
          </div>

          {/* Social Quick Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'var(--transition)' }}>
              <Github size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'var(--transition)' }}>
              <Linkedin size={20} />
            </a>
            <button onClick={onCopyEmail} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>
              <Mail size={20} />
            </button>
          </div>

          <button 
            onClick={scrollToTop}
            className="btn btn-secondary"
            style={{ padding: '0.5rem 0.9rem', fontSize: '0.8rem' }}
          >
            <ArrowUp size={15} />
            <span>Back to Top</span>
          </button>
        </div>

        <div style={{
          marginTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.78rem'
        }}>
          <div>
            © {new Date().getFullYear()} Aneesh Raj Donthi. Built with React & Vite.
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', color: '#64748b' }}>
            LATENCY: OPTIMAL • SECURITY: VERIFIED
          </div>
        </div>
      </div>
    </footer>
  );
}
