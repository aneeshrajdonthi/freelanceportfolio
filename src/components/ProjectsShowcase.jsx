import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { Play, ExternalLink, Github, CheckCircle2, Shield, Database, Cpu, Layers, X, Sparkles, Zap } from 'lucide-react';

export default function ProjectsShowcase() {
  const [filter, setFilter] = useState('All');
  const [videoModalUrl, setVideoModalUrl] = useState(null);

  const categories = ['All', 'AI Security & Guardrails', 'RAG & Knowledge Search', 'MLOps & Real-Time Analytics', 'AI Business Automation'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ padding: '5.5rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="tag">// ENGINEERING SHOWCASE</span>
          <h2>Production AI Projects & Systems</h2>
          <p>
            Battle-tested systems built for real-world enterprise deployment. Inspect live applications, interactive video walkthroughs, system architectures, and technical codebases.
          </p>

          {/* Category Filters */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.6rem',
            marginTop: '1.75rem'
          }} className="category-filters-wrapper">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-mono)',
                  border: filter === cat ? '1px solid #f59e0b' : '1px solid var(--border-subtle)',
                  backgroundColor: filter === cat ? 'var(--accent-amber-glow)' : 'var(--bg-card)',
                  color: filter === cat ? 'var(--accent-amber)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'var(--transition)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {filteredProjects.map((p) => {
            return (
              <div key={p.id} className="glass-card project-card-item" style={{ padding: '0', overflow: 'hidden' }}>
                
                {/* Header Banner inside card */}
                <div style={{
                  padding: '1.25rem 1.75rem',
                  backgroundColor: 'var(--bg-secondary)',
                  borderBottom: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.75rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                    <span className="badge badge-amber">{p.category}</span>
                    <span className="badge badge-cyan">{p.badge}</span>
                  </div>
                  {p.hasVideo && (
                    <span style={{ fontSize: '0.78rem', color: 'var(--accent-amber)', fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Play size={14} color="var(--accent-amber)" /> Walkthrough Video Available
                    </span>
                  )}
                </div>

                {/* Inner Content Grid */}
                <div className="project-grid-inner" style={{
                  display: 'grid',
                  gridTemplateColumns: p.hasVideo ? '1fr 1fr' : '1fr',
                  gap: '0'
                }}>
                  
                  {/* Left Main Content Block */}
                  <div className="project-card-content" style={{ padding: '1.75rem' }}>
                    
                    {/* Title */}
                    <h3 style={{ fontSize: 'clamp(1.3rem, 3.8vw, 1.75rem)', marginBottom: '0.3rem', color: 'var(--text-primary)' }}>
                      {p.title}
                    </h3>
                    <div style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.88rem', marginBottom: '1.25rem', fontWeight: 600 }}>
                      {p.subtitle}
                    </div>

                    {/* Problem & Solution Block */}
                    <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{
                        padding: '1rem 1.1rem',
                        backgroundColor: 'var(--bg-primary)',
                        borderRadius: 'var(--radius-md)',
                        borderLeft: '3px solid #ef4444'
                      }}>
                        <strong style={{ color: 'var(--text-primary)', fontSize: '0.88rem', display: 'block', marginBottom: '0.2rem' }}>
                          🚨 The Challenge:
                        </strong>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                          {p.problem}
                        </p>
                      </div>

                      <div style={{
                        padding: '1rem 1.1rem',
                        backgroundColor: 'var(--bg-primary)',
                        borderRadius: 'var(--radius-md)',
                        borderLeft: '3px solid var(--accent-emerald)'
                      }}>
                        <strong style={{ color: 'var(--text-primary)', fontSize: '0.88rem', display: 'block', marginBottom: '0.2rem' }}>
                          💡 The Engineering Solution:
                        </strong>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                          {p.solution}
                        </p>
                      </div>
                    </div>

                    {/* System Engineering Highlights */}
                    <div style={{ marginBottom: '1.5rem' }}>
                      <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: '0.6rem', fontFamily: 'var(--font-mono)' }}>
                        KEY ARCHITECTURE HIGHLIGHTS:
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                        {p.highlights.map((h, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                            <CheckCircle2 size={16} color="var(--accent-emerald)" style={{ marginTop: '2px', flexShrink: 0 }} />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Metrics Grid */}
                    <div style={{ marginBottom: '1.5rem' }}>
                      <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '0.6rem', fontFamily: 'var(--font-mono)' }}>
                        SYSTEM SPECS & PERFORMANCE METRICS:
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.6rem' }}>
                        {p.keyMetrics.map((m, i) => (
                          <div key={i} style={{
                            padding: '0.55rem 0.8rem',
                            backgroundColor: 'var(--bg-primary)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: 'var(--radius-sm)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.82rem',
                            color: 'var(--accent-cyan)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem'
                          }}>
                            <Zap size={14} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
                            <span>{m}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Freelance Use Cases */}
                    <div style={{ marginBottom: '1.5rem' }}>
                      <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '0.6rem', fontFamily: 'var(--font-mono)' }}>
                        CLIENT DELIVERABLES & USE CASES:
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {p.freelanceUseCases.map((u, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.86rem', color: 'var(--accent-amber)' }}>
                            <Sparkles size={14} style={{ flexShrink: 0 }} />
                            <span>{u}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.75rem' }}>
                      {p.techStack.map((tech, i) => (
                        <span key={i} className="badge badge-subtle" style={{ fontSize: '0.72rem' }}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions Links */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }} className="project-actions">
                      {p.liveUrl && (
                        <a href={p.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary proj-btn" style={{ padding: '0.6rem 1.1rem', fontSize: '0.85rem' }}>
                          <span>Launch Live App</span>
                          <ExternalLink size={15} />
                        </a>
                      )}

                      {p.githubUrl && (
                        <a href={p.githubUrl} target="_blank" rel="noreferrer" className="btn btn-secondary proj-btn" style={{ padding: '0.6rem 1.1rem', fontSize: '0.85rem' }}>
                          <Github size={15} />
                          <span>View Source Code</span>
                        </a>
                      )}

                      {p.hasVideo && (
                        <button 
                          onClick={() => setVideoModalUrl(p.videoUrl)}
                          className="btn btn-outline proj-btn"
                          style={{ padding: '0.6rem 1.1rem', fontSize: '0.85rem' }}
                        >
                          <Play size={15} />
                          <span>Watch Video Demo</span>
                        </button>
                      )}
                    </div>

                  </div>

                  {/* Right Column: Video Player Showcase */}
                  {p.hasVideo && (
                    <div className="project-video-container" style={{
                      backgroundColor: 'var(--bg-primary)',
                      borderLeft: '1px solid var(--border-subtle)',
                      padding: '1.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}>
                      <div style={{
                        position: 'relative',
                        borderRadius: 'var(--radius-md)',
                        overflow: 'hidden',
                        border: '1px solid var(--border-glow)',
                        boxShadow: '0 12px 35px rgba(0,0,0,0.2)'
                      }}>
                        <video 
                          controls 
                          poster={p.poster}
                          style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '360px', objectFit: 'cover' }}
                        >
                          <source src={p.videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                        <div style={{
                          padding: '0.75rem 1rem',
                          backgroundColor: 'var(--bg-card)',
                          borderTop: '1px solid var(--border-subtle)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          fontSize: '0.78rem',
                          fontFamily: 'var(--font-mono)'
                        }}>
                          <span style={{ color: 'var(--accent-amber)', fontWeight: 600 }}>🎥 {p.title} Walkthrough</span>
                          <span style={{ color: 'var(--text-muted)' }}>1080p HD</span>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Video Walkthrough Modal */}
      {videoModalUrl && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.88)',
          backdropFilter: 'blur(12px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '900px',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-glow)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(0,0,0,0.8)'
          }}>
            <div style={{
              padding: '0.85rem 1.25rem',
              borderBottom: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                <Play size={18} color="var(--accent-amber)" />
                <span>Full System Demo & Architecture Walkthrough</span>
              </div>
              <button 
                onClick={() => setVideoModalUrl(null)}
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '0.25rem' }}
              >
                <X size={24} />
              </button>
            </div>

            <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-primary)' }}>
              <video controls autoPlay style={{ width: '100%', borderRadius: 'var(--radius-md)', maxHeight: '70vh' }}>
                <source src={videoModalUrl} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 960px) {
          .project-grid-inner {
            grid-template-columns: 1fr !important;
          }
          .project-video-container {
            border-left: none !important;
            border-top: 1px solid var(--border-subtle) !important;
            padding: 1.25rem !important;
          }
          .project-card-content {
            padding: 1.25rem !important;
          }
        }
        @media (max-width: 600px) {
          .project-actions {
            flex-direction: column !important;
            width: 100% !important;
          }
          .proj-btn {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
