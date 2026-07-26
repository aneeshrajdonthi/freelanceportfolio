import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, Copy, Check, Sun, Moon } from 'lucide-react';

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

  // Prevent background scroll when mobile menu is open, restore properly when closed
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
    }
    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (targetId) => {
    setMobileMenuOpen(false);
    if (targetId === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetId.startsWith('#')) {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 990,
        padding: scrolled ? '0.75rem 0' : '1.1rem 0',
        backgroundColor: scrolled 
          ? (theme === 'dark' ? 'rgba(9, 13, 22, 0.92)' : 'rgba(241, 245, 249, 0.92)')
          : (mobileMenuOpen 
              ? (theme === 'dark' ? 'rgba(9, 13, 22, 0.98)' : 'rgba(241, 245, 249, 0.98)')
              : 'transparent'),
        backdropFilter: 'blur(16px)',
        borderBottom: (scrolled || mobileMenuOpen) ? '1px solid var(--border-subtle)' : '1px solid transparent',
        transition: 'var(--transition)'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        {/* Monogram / Brand */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); handleNavClick('#'); }} 
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}
        >
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
            <div style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-primary)', lineHeight: 1.2 }}>
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
          <a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('#projects'); }} className="nav-link">Projects</a>
          <a href="#sandbox" onClick={(e) => { e.preventDefault(); handleNavClick('#sandbox'); }} className="nav-link">Live Sandbox</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }} className="nav-link">Services</a>
          <a href="#estimator" onClick={(e) => { e.preventDefault(); handleNavClick('#estimator'); }} className="nav-link">Custom Brief</a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); handleNavClick('#experience'); }} className="nav-link">Experience</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }} className="nav-link">Contact</a>
        </nav>

        {/* Actions CTA & Theme Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0 }}>
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

          {/* Desktop Hire Me CTA */}
          <button 
            className="btn btn-primary desktop-hire-btn" 
            style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem' }}
            onClick={onCopyEmail}
          >
            {emailCopied ? <Check size={16} /> : <Copy size={16} />}
            <span>{emailCopied ? "Copied Email!" : "Hire Me"}</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              borderRadius: 'var(--radius-md)',
              cursor: 'pointer',
              display: 'none',
              padding: '0.55rem',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} color="#f59e0b" /> : <Menu size={22} color="var(--text-primary)" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {/* Status Pill in Mobile Menu */}
            <div 
              className="badge badge-emerald"
              style={{ display: 'inline-flex', padding: '0.5rem 0.85rem', alignSelf: 'flex-start', cursor: 'pointer' }}
              onClick={onCopyEmail}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981', boxShadow: '0 0 8px #10b981' }}></span>
              <span>Available for Select Contracts</span>
            </div>

            {/* Links */}
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('#projects'); }} className="mobile-nav-link">
                ⚡ Projects Showcase
              </a>
              <a href="#sandbox" onClick={(e) => { e.preventDefault(); handleNavClick('#sandbox'); }} className="mobile-nav-link">
                🛡️ Live Security Sandbox
              </a>
              <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }} className="mobile-nav-link">
                🤖 Core Services
              </a>
              <a href="#estimator" onClick={(e) => { e.preventDefault(); handleNavClick('#estimator'); }} className="mobile-nav-link">
                📝 Custom Project Brief
              </a>
              <a href="#experience" onClick={(e) => { e.preventDefault(); handleNavClick('#experience'); }} className="mobile-nav-link">
                💼 Experience & R&D
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }} className="mobile-nav-link">
                📧 Contact & Channels
              </a>
            </nav>

            {/* Mobile Actions */}
            <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button 
                className="btn btn-primary" 
                style={{ width: '100%', padding: '0.8rem' }}
                onClick={() => {
                  onCopyEmail();
                  setMobileMenuOpen(false);
                }}
              >
                {emailCopied ? <Check size={18} /> : <Copy size={18} />}
                <span>{emailCopied ? "Email Copied!" : "Copy Contact Email"}</span>
              </button>
            </div>

          </div>
        </div>
      )}

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
        .mobile-nav-link {
          color: var(--text-primary);
          text-decoration: none;
          font-size: 1.05rem;
          font-weight: 600;
          padding: 0.5rem 0;
          border-bottom: 1px dashed var(--border-subtle);
          display: flex;
          alignItems: center;
          transition: var(--transition);
        }
        .mobile-nav-link:hover {
          color: var(--accent-amber);
        }
        .mobile-menu-drawer {
          position: fixed;
          top: 65px;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--bg-primary);
          z-index: 980;
          overflow-y: auto;
          animation: fadeIn 0.25s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 1180px) {
          .availability-pill { display: none !important; }
        }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .desktop-hire-btn { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
