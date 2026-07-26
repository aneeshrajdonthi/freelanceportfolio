import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { Play, ExternalLink, Github, CheckCircle2, Shield, Database, Cpu, Layers, X, Sparkles } from 'lucide-react';

export default function ProjectsShowcase() {
  const [filter, setFilter] = useState('All');
  const [activeTab, setActiveTab] = useState({}); // project_id -> tab_name
  const [videoModalUrl, setVideoModalUrl] = useState(null);

  const categories = ['All', 'AI Security & Guardrails', 'RAG & Knowledge Search', 'MLOps & Real-Time Analytics', 'AI Business Automation'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const getTab = (id) => activeTab[id] || 'overview';
  const setTab = (id, tab) => setActiveTab(prev => ({ ...prev, [id]: tab }));

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

          {/* Category Filters - Horizontal Touch Scrollable */}
          <div style={{
            display: 'flex',
            flexWrap: 'nowrap',
            overflowX: 'auto',
            gap: '0.6rem',
            marginTop: '1.75rem',
            paddingBottom: '0.5rem',
            WebkitOverflowScrolling: 'touch'
          }} className="category-scroll-container">
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
                  flexShrink: 0,
                  transition: 'var(--transition)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {filteredProjects.map((p) => {
            const currentTab = getTab(p.id);

            return (
              <div key={p.id} className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: p.hasVideo ? '1fr 1fr' : '1fr',
                  gap: '0'
                }} className="project-grid-inner">
                  
                  {/* Left Column (or Full Width): Project Details & Tab Control */}
                  <div className="project-card-content" style={{ padding: '2rem' }}>
                    
                    {/* Header Badges */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.8rem' }}>
                      <span className="badge badge-amber">{p.category}</span>
                      <span className="badge badge-cyan">{p.badge}</span>
                    </div>

                    {/* Title */}
                    <h3 style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.6rem)', marginBottom: '0.4rem' }}>
                      {p.title}
                    </h3>
                    <div style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
                      {p.subtitle}
                    </div>

                    {/* Tab Navigation - Scrollable on mobile */}
                    <div style={{
                      display: 'flex',
                      overflowX: 'auto',
                      gap: '0.5rem',
                      borderBottom: '1px solid var(--border-subtle)',
                      marginBottom: '1.25rem',
                      paddingBottom: '0.5rem',
                      WebkitOverflowScrolling: 'touch'
                    }}>
                      {['overview', 'architecture', 'metrics', 'deliverables'].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setTab(p.id, tab)}
                          style={{
                            background: 'none',
                            border: 'none',
                            padding: '0.35rem 0.75rem',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            fontFamily: 'var(--font-mono)',
                            color: currentTab === tab ? 'var(--accent-amber)' : 'var(--text-muted)',
                            borderBottom: currentTab === tab ? '2px solid var(--accent-amber)' : '2px solid transparent',
                            cursor: 'pointer',
                            textTransform: 'capitalize',
                            whiteSpace: 'nowrap',
                            flexShrink: 0
                          }}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>

                    {/* Tab Content */}
                    <div style={{ minHeight: '130px', marginBottom: '1.5rem' }}>
                      {currentTab === 'overview' && (
                        <div>
                          <div style={{ marginBottom: '0.75rem' }}>
                            <strong style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>The Challenge:</strong>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginTop: '0.25rem' }}>{p.problem}</p>
                          </div>
                          <div>
                            <strong style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>The Solution:</strong>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginTop: '0.25rem' }}>{p.solution}</p>
                          </div>
                        </div>
                      )}

                      {currentTab === 'architecture' && (
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                            Key System Engineering Highlights:
                          </div>
                          <ul style={{ listStyle: 'none', padding: 0 }}>
                            {p.highlights.map((h, i) => (
                              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.4rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                                <CheckCircle2 size={16} color="var(--accent-emerald)" style={{ marginTop: '2px', flexShrink: 0 }} />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {currentTab === 'metrics' && (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '0.75rem' }}>
                          {p.keyMetrics.map((m, i) => (
                            <div key={i} style={{
                              padding: '0.6rem 0.8rem',
                              backgroundColor: 'var(--bg-secondary)',
                              border: '1px solid var(--border-subtle)',
                              borderRadius: 'var(--radius-sm)',
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.82rem',
                              color: 'var(--accent-cyan)'
                            }}>
                              ⚡ {m}
                            </div>
                          ))}
                        </div>
                      )}

                      {currentTab === 'deliverables' && (
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                            Custom Client Deliverables Built From This Architecture:
                          </div>
                          <ul style={{ listStyle: 'none', padding: 0 }}>
                            {p.freelanceUseCases.map((u, i) => (
                              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', fontSize: '0.88rem', color: 'var(--accent-amber)' }}>
                                <Sparkles size={14} style={{ flexShrink: 0 }} />
                                <span>{u}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Tech Stack Pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                      {p.techStack.map((tech, i) => (
                        <span key={i} className="badge badge-subtle" style={{ fontSize: '0.72rem' }}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions Links */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }} className="project-actions">
                      {p.liveUrl && (
                        <a href={p.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary proj-btn" style={{ padding: '0.55rem 1rem', fontSize: '0.85rem' }}>
                          <span>Launch Live App</span>
                          <ExternalLink size={15} />
                        </a>
                      )}

                      {p.githubUrl && (
                        <a href={p.githubUrl} target="_blank" rel="noreferrer" className="btn btn-secondary proj-btn" style={{ padding: '0.55rem 1rem', fontSize: '0.85rem' }}>
                          <Github size={15} />
                          <span>View Source Code</span>
                        </a>
                      )}

                      {p.hasVideo && (
                        <button 
                          onClick={() => setVideoModalUrl(p.videoUrl)}
                          className="btn btn-outline proj-btn"
                          style={{ padding: '0.55rem 1rem', fontSize: '0.85rem' }}
                        >
                          <Play size={15} />
                          <span>Watch Video Demo</span>
                        </button>
                      )}
                    </div>

                  </div>

                  {/* Right Column: Embedded Video Showcase Player (If Available) */}
                  {p.hasVideo && (
                    <div className="project-video-container" style={{
                      backgroundColor: 'var(--bg-primary)',
                      borderLeft: '1px solid var(--border-subtle)',
                      padding: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}>
                      <div style={{
                        position: 'relative',
                        borderRadius: 'var(--radius-md)',
                        overflow: 'hidden',
                        border: '1px solid var(--border-glow)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
                      }}>
                        <video 
                          controls 
                          poster={p.poster}
                          style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '340px' }}
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
                          <span style={{ color: 'var(--accent-amber)' }}>🎥 {p.title} Walkthrough</span>
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
