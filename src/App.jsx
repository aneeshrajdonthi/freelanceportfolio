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
