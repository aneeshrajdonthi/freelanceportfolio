import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ShieldCheck, Menu, X, Copy, Check, Sun, Moon } from 'lucide-react';

export default function Navbar({ onCopyEmail, emailCopied, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        backgroundColor: scrolled 
          ? (theme === 'dark' ? 'rgba(9, 13, 22, 0.88)' : 'rgba(241, 245, 249, 0.88)')
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        transition: 'var(--transition)'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        {/* Monogram / Brand */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #131b2e 0%, #1e293b 100%)',
            border: '1px solid #334155',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            fontFamily: 'var(--font-heading)',
            color: '#f59e0b',
            fontSize: '1.1rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }}>
            AR
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.2 }}>
              Aneesh Raj Donthi
            </div>
            <div style={{ fontSize: '0.72rem', color: '#06b6d4', fontFamily: 'var(--font-mono)' }}>
              AI Engineer @ Tata Electronics
            </div>
          </div>
        </a>

        {/* Availability Pill - Desktop */}
        <div 
          className="badge badge-emerald availability-pill" 
          style={{ display: 'flex', cursor: 'pointer', flexShrink: 0 }}
          onClick={onCopyEmail}
          title="Click to copy email"
        >
          <span style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#10b981',
            boxShadow: '0 0 8px #10b981'
          }}></span>
          <span>Available for Select Contracts</span>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.4rem' }}>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#sandbox" className="nav-link">Live Sandbox</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#estimator" className="nav-link">Custom Brief</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Actions CTA & Theme Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="btn btn-secondary"
            style={{
              padding: '0.55rem',
              borderRadius: 'var(--radius-md)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={18} color="#f59e0b" /> : <Moon size={18} color="#06b6d4" />}
          </button>

          <button 
            className="btn btn-primary" 
            style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem' }}
            onClick={onCopyEmail}
          >
            {emailCopied ? <Check size={16} /> : <Copy size={16} />}
            <span>{emailCopied ? "Copied Email!" : "Hire Me"}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'none',
              padding: '0.25rem'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <style>{`
        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 500;
          transition: var(--transition);
        }
        .nav-link:hover {
          color: var(--accent-amber);
        }
        @media (max-width: 1180px) {
          .availability-pill { display: none !important; }
        }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
