import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MessageSquare, Linkedin, Github, Check, Copy, ExternalLink, MapPin } from 'lucide-react';

export default function ContactSection({ onCopyEmail, emailCopied }) {
  const [phoneCopied, setPhoneCopied] = useState(false);
  const phoneNumber = "+91 9392576787";
  const whatsappUrl = "https://wa.me/919392576787";

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 3000);
  };

  return (
    <section id="contact" style={{ padding: '5.5rem 0', backgroundColor: '#060a12', borderTop: '1px solid #1e293b' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="tag">// DIRECT COMMUNICATION & HIRING</span>
          <h2>Let's Connect & Discuss Your Project</h2>
          <p>
            Ready to collaborate? Reach out directly via Phone, WhatsApp, Email, or LinkedIn for fast technical inquiries.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>

          {/* Card 1: Direct Mobile & WhatsApp */}
          <div className="glass-card" style={{ padding: '2rem', border: '1px solid #10b981', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Phone size={22} color="#10b981" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '1.05rem' }}>Phone & WhatsApp</div>
                  <div style={{ fontSize: '0.75rem', color: '#10b981', fontFamily: 'var(--font-mono)' }}>Instant Response</div>
                </div>
              </div>

              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#f8fafc',
                backgroundColor: '#090d16',
                padding: '0.85rem 1rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid #1e293b',
                marginBottom: '1.25rem'
              }}>
                {phoneNumber}
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                Direct mobile line for urgent contract calls, project discussions, and WhatsApp messaging.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-primary" 
                style={{ width: '100%', padding: '0.65rem', backgroundColor: '#10b981', borderColor: '#10b981', color: '#000' }}
              >
                <MessageSquare size={16} />
                <span>Chat on WhatsApp</span>
              </a>

              <button 
                onClick={handleCopyPhone}
                className="btn btn-secondary" 
                style={{ width: '100%', padding: '0.65rem', fontSize: '0.85rem' }}
              >
                {phoneCopied ? <Check size={16} /> : <Copy size={16} />}
                <span>{phoneCopied ? "Phone Copied!" : "Copy Phone Number"}</span>
              </button>
            </div>
          </div>

          {/* Card 2: Direct Email */}
          <div className="glass-card" style={{ padding: '2rem', border: '1px solid #f59e0b', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(245, 158, 11, 0.15)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Mail size={22} color="#f59e0b" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '1.05rem' }}>Direct Email</div>
                  <div style={{ fontSize: '0.75rem', color: '#f59e0b', fontFamily: 'var(--font-mono)' }}>Within 24 Hours</div>
                </div>
              </div>

              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#f59e0b',
                backgroundColor: '#090d16',
                padding: '0.85rem 1rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid #1e293b',
                marginBottom: '1.25rem',
                wordBreak: 'break-all'
              }}>
                {personalInfo.email}
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                Send your RFPs, architecture specs, or freelance project requirements directly to my inbox.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="btn btn-primary" 
                style={{ width: '100%', padding: '0.65rem' }}
              >
                <Mail size={16} />
                <span>Send Direct Email</span>
              </a>

              <button 
                onClick={onCopyEmail}
                className="btn btn-secondary" 
                style={{ width: '100%', padding: '0.65rem', fontSize: '0.85rem' }}
              >
                {emailCopied ? <Check size={16} /> : <Copy size={16} />}
                <span>{emailCopied ? "Email Copied!" : "Copy Email Address"}</span>
              </button>
            </div>
          </div>

          {/* Card 3: Professional Profiles */}
          <div className="glass-card" style={{ padding: '2rem', border: '1px solid #06b6d4', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(6, 182, 212, 0.15)',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Linkedin size={22} color="#06b6d4" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '1.05rem' }}>Professional Profiles</div>
                  <div style={{ fontSize: '0.75rem', color: '#06b6d4', fontFamily: 'var(--font-mono)' }}>LinkedIn & GitHub</div>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Connect on LinkedIn for professional engagements or explore source code repositories on GitHub.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-secondary" 
                style={{ width: '100%', padding: '0.65rem', justifyContent: 'flex-start' }}
              >
                <Linkedin size={18} color="#06b6d4" />
                <span>Connect on LinkedIn</span>
                <ExternalLink size={14} style={{ marginLeft: 'auto' }} />
              </a>

              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-secondary" 
                style={{ width: '100%', padding: '0.65rem', justifyContent: 'flex-start' }}
              >
                <Github size={18} color="#f8fafc" />
                <span>Explore GitHub Codebases</span>
                <ExternalLink size={14} style={{ marginLeft: 'auto' }} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
