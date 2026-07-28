import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsShowcase from './components/ProjectsShowcase';
import Services from './components/Services';
import ExperienceTimeline from './components/ExperienceTimeline';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { personalInfo } from './data/portfolioData';
import { Check } from 'lucide-react';

export default function App() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Scroll-reveal observer: adds .visible to .reveal elements when they enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 3000);
  };

  return (
    <div>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <ProjectsShowcase />
        <Services />
        <ExperienceTimeline />
        <ContactSection onCopyEmail={handleCopyEmail} emailCopied={emailCopied} />
      </main>
      <Footer />

      {emailCopied && (
        <div className="toast-container">
          <div className="toast">
            <Check size={16} color="var(--accent-emerald)" />
            <span>Email copied to clipboard</span>
          </div>
        </div>
      )}
    </div>
  );
}
