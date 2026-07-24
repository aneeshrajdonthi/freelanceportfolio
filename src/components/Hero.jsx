import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Shield, Cpu, Activity, Database, ArrowRight, MapPin, Briefcase, GraduationCap, Mail } from 'lucide-react';

export default function Hero({ onCopyEmail }) {
  return (
    <section style={{ paddingTop: '8.5rem', paddingBottom: '4.5rem', position: 'relative' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '3.5rem',
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Left Column: Text & Intro */}
          <div>
            {/* Tagline Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <span className="badge badge-amber">
                <Briefcase size={13} />
                <span>AI Engineer @ Tata Electronics</span>
              </span>
              <span className="badge badge-subtle">
                <GraduationCap size={13} />
                <span>NIT Warangal '25</span>
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
              lineHeight: 1.12,
              marginBottom: '1.25rem',
              letterSpacing: '-0.03em'
            }}>
              Architecting <span className="gradient-amber">Production AI Agents</span>, Custom ML & <span className="gradient-cyan">Enterprise Data Systems</span>
            </h1>

            {/* Bio Paragraph */}
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              marginBottom: '2rem',
              maxWidth: '640px'
            }}>
              Hi, I'm <strong>Aneesh Raj Donthi</strong>. I build end-to-end production AI & Data solutions—ranging from Autonomous Agentic AI, Text-to-Speech & Voice Models, Enterprise RAG, and Computer Vision to Real-Time Data Streaming (Kafka, Spark) and Machine Learning Systems.
            </p>

            {/* Location & Quick Info */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.2rem',
              fontSize: '0.88rem',
              color: 'var(--text-muted)',
              marginBottom: '2.5rem',
              fontFamily: 'var(--font-mono)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={15} color="#06b6d4" />
                <span>Bengaluru / Ahmedabad, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Activity size={15} color="#f59e0b" />
                <span>Agentic AI / Voice Models / RAG / Vision / Kafka / PyTorch</span>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="#projects" className="btn btn-primary">
                <span>View Projects & Demos</span>
                <ArrowRight size={18} />
              </a>
              <a href="#estimator" className="btn btn-secondary">
                <span>Estimate Project Scope</span>
              </a>
              <a href="#contact" className="btn btn-outline">
                <Mail size={16} />
                <span>Contact & Inquiry</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Picture & Interactive Telemetry Card */}
          <div style={{ position: 'relative' }}>
            <div className="glass-card" style={{
              padding: '1.25rem',
              border: '1px solid rgba(51, 65, 85, 0.8)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
              position: 'relative'
            }}>
              {/* Profile Image */}
              <div style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                maxHeight: '380px',
                border: '1px solid #1e293b'
              }}>
                <img 
                  src={personalInfo.profilePic} 
                  alt="Aneesh Raj Donthi - AI & Data Systems Engineer" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    display: 'block'
                  }}
                />
                
                {/* Overlay Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  right: '12px',
                  background: 'rgba(9, 13, 22, 0.88)',
                  backdropFilter: 'blur(12px)',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#f8fafc' }}>
                      Aneesh Raj Donthi
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#f59e0b', fontFamily: 'var(--font-mono)' }}>
                      AI & Data Systems Engineer
                    </div>
                  </div>
                  <span className="badge badge-emerald" style={{ fontSize: '0.7rem' }}>
                    Verified
                  </span>
                </div>
              </div>

              {/* Status Header inside card */}
              <div style={{
                marginTop: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)'
              }}>
                <span>STATUS: ACTIVE FREELANCER</span>
                <span style={{ color: '#10b981' }}>● ONLINE</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
