import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navigate = (id) => {
    setMenuOpen(false);
    if (id === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { label: 'Work', href: '#projects' },
    { label: 'Capabilities', href: '#services' },
    { label: 'Engagement', href: '#engagement' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container nav-inner">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); navigate('#top'); }}
          className="nav-brand"
        >
          Aneesh Raj
        </a>

        <nav className="nav-links">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); navigate(l.href); }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            onClick={onToggleTheme}
            className="icon-btn"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); navigate('#contact'); }}
            className="btn btn-primary nav-cta"
          >
            Let's Talk
          </a>

          <button
            className="icon-btn mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <nav>
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); navigate(l.href); }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); navigate('#contact'); }}
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '0.5rem' }}
          >
            Let's Talk
          </a>
        </div>
      )}

      <style>{`
        .navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 1rem 0;
          transition: padding 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
          border-bottom: 1px solid transparent;
        }
        .navbar--scrolled {
          padding: 0.7rem 0;
          background: ${theme === 'dark' ? 'rgba(10, 15, 26, 0.92)' : 'rgba(248, 250, 252, 0.92)'};
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom-color: var(--border-subtle);
        }
        .nav-inner {
          display: flex; align-items: center; justify-content: space-between; gap: 2rem;
        }
        .nav-brand {
          font-family: var(--font-heading);
          font-weight: 800; font-size: 1.1rem;
          color: var(--text-primary);
          text-decoration: none; letter-spacing: -0.03em;
        }
        .nav-links {
          display: flex; gap: 2rem;
        }
        .nav-links a {
          color: var(--text-muted); text-decoration: none;
          font-size: 0.88rem; font-weight: 500; transition: color 0.15s ease;
        }
        .nav-links a:hover { color: var(--text-primary); }
        .nav-actions { display: flex; align-items: center; gap: 0.6rem; }
        .icon-btn {
          background: none; border: 1px solid var(--border-subtle);
          color: var(--text-muted); padding: 0.45rem;
          border-radius: var(--radius-sm); cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: var(--transition);
        }
        .icon-btn:hover { border-color: var(--text-muted); color: var(--text-primary); }
        .nav-cta { padding: 0.5rem 1rem; font-size: 0.82rem; }
        .mobile-toggle { display: none; }
        .mobile-menu {
          position: fixed; top: 58px; left: 0; right: 0; bottom: 0;
          background: var(--bg-primary); padding: 2rem 1.5rem;
          display: flex; flex-direction: column;
          z-index: 99;
          animation: menuIn 0.2s ease;
        }
        .mobile-menu nav {
          display: flex; flex-direction: column; gap: 0;
        }
        .mobile-menu nav a {
          color: var(--text-primary); text-decoration: none;
          font-size: 1.15rem; font-weight: 600;
          padding: 1.1rem 0;
          border-bottom: 1px solid var(--border-subtle);
          transition: color 0.15s ease;
        }
        .mobile-menu nav a:hover { color: var(--accent-amber); }
        @keyframes menuIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .nav-cta { display: none; }
          .mobile-toggle { display: flex; }
        }
      `}</style>
    </header>
  );
}
