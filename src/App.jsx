import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsShowcase from './components/ProjectsShowcase';
import LiveSandbox from './components/LiveSandbox';
import Services from './components/Services';
import FreelanceEstimator from './components/FreelanceEstimator';
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
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Navbar 
        onCopyEmail={handleCopyEmail} 
        emailCopied={emailCopied} 
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      
      <main>
        <Hero onCopyEmail={handleCopyEmail} />
        <ProjectsShowcase />
        <LiveSandbox />
        <Services />
        <FreelanceEstimator />
        <ExperienceTimeline />
        <ContactSection onCopyEmail={handleCopyEmail} emailCopied={emailCopied} />
      </main>

      <Footer onCopyEmail={handleCopyEmail} />

      {/* Global Toast Notification */}
      {emailCopied && (
        <div className="toast-container">
          <div className="toast">
            <Check size={18} color="#10b981" />
            <span><strong>Email Copied:</strong> {personalInfo.email}</span>
          </div>
        </div>
      )}
    </div>
  );
}
