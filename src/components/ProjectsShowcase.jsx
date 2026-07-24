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

          {/* Category Filters */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.6rem',
            marginTop: '1.75rem'
          }}>
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
                  border: filter === cat ? '1px solid #f59e0b' : '1px solid #1e293b',
                  backgroundColor: filter === cat ? 'rgba(245, 158, 11, 0.15)' : 'var(--bg-card)',
                  color: filter === cat ? '#f59e0b' : 'var(--text-secondary)',
                  cursor: 'pointer',
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
                  <div style={{ padding: '2rem' }}>
                    
                    {/* Header Badges */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.8rem' }}>
                      <span className="badge badge-amber">{p.category}</span>
                      <span className="badge badge-cyan">{p.badge}</span>
                    </div>

                    {/* Title */}
                    <h3 style={{ fontSize: '1.6rem', marginBottom: '0.4rem' }}>
                      {p.title}
                    </h3>
                    <div style={{ color: '#06b6d4', fontFamily: 'var(--font-mono)', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
                      {p.subtitle}
                    </div>

                    {/* Tab Navigation */}
                    <div style={{
                      display: 'flex',
                      gap: '0.5rem',
                      borderBottom: '1px solid #1e293b',
                      marginBottom: '1.25rem',
                      paddingBottom: '0.5rem'
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
                            color: currentTab === tab ? '#f59e0b' : 'var(--text-muted)',
                            borderBottom: currentTab === tab ? '2px solid #f59e0b' : '2px solid transparent',
                            cursor: 'pointer',
                            textTransform: 'capitalize'
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
                            <strong style={{ color: '#e2e8f0', fontSize: '0.9rem' }}>The Challenge:</strong>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginTop: '0.25rem' }}>{p.problem}</p>
                          </div>
                          <div>
                            <strong style={{ color: '#e2e8f0', fontSize: '0.9rem' }}>The Solution:</strong>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginTop: '0.25rem' }}>{p.solution}</p>
                          </div>
                        </div>
                      )}

                      {currentTab === 'architecture' && (
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#f8fafc', marginBottom: '0.5rem' }}>
                            Key System Engineering Highlights:
                          </div>
                          <ul style={{ listStyle: 'none', padding: 0 }}>
                            {p.highlights.map((h, i) => (
                              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.4rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                                <CheckCircle2 size={16} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {currentTab === 'metrics' && (
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                          {p.keyMetrics.map((m, i) => (
                            <div key={i} style={{
                              padding: '0.6rem 0.8rem',
                              backgroundColor: 'rgba(255,255,255,0.03)',
                              border: '1px solid #1e293b',
                              borderRadius: 'var(--radius-sm)',
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.82rem',
                              color: '#06b6d4'
                            }}>
                              ⚡ {m}
                            </div>
                          ))}
                        </div>
                      )}

                      {currentTab === 'deliverables' && (
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#f8fafc', marginBottom: '0.5rem' }}>
                            Custom Client Deliverables Built From This Architecture:
                          </div>
                          <ul style={{ listStyle: 'none', padding: 0 }}>
                            {p.freelanceUseCases.map((u, i) => (
                              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', fontSize: '0.88rem', color: '#f59e0b' }}>
                                <Sparkles size={14} />
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
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                      {p.liveUrl && (
                        <a href={p.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                          <span>Launch Live App</span>
                          <ExternalLink size={15} />
                        </a>
                      )}

                      {p.githubUrl && (
                        <a href={p.githubUrl} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                          <Github size={15} />
                          <span>View Source Code</span>
                        </a>
                      )}

                      {p.hasVideo && (
                        <button 
                          onClick={() => setVideoModalUrl(p.videoUrl)}
                          className="btn btn-outline"
                          style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                        >
                          <Play size={15} />
                          <span>Watch Video Demo</span>
                        </button>
                      )}
                    </div>

                  </div>

                  {/* Right Column: Embedded Video Showcase Player (If Available) */}
                  {p.hasVideo && (
                    <div style={{
                      backgroundColor: '#090d16',
                      borderLeft: '1px solid #1e293b',
                      padding: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}>
                      <div style={{
                        position: 'relative',
                        borderRadius: 'var(--radius-md)',
                        overflow: 'hidden',
                        border: '1px solid #334155',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
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
                          backgroundColor: '#131b2e',
                          borderTop: '1px solid #1e293b',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          fontSize: '0.78rem',
                          fontFamily: 'var(--font-mono)'
                        }}>
                          <span style={{ color: '#f59e0b' }}>🎥 RAG Portal Walkthrough</span>
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
          backgroundColor: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(12px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '900px',
            backgroundColor: '#131b2e',
            border: '1px solid #334155',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(0,0,0,0.8)'
          }}>
            <div style={{
              padding: '1rem 1.5rem',
              borderBottom: '1px solid #1e293b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ fontWeight: 700, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Play size={18} color="#f59e0b" />
                <span>Full System Demo & Architecture Walkthrough</span>
              </div>
              <button 
                onClick={() => setVideoModalUrl(null)}
                style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
              >
                <X size={24} />
              </button>
            </div>

            <div style={{ padding: '1rem', backgroundColor: '#090d16' }}>
              <video controls autoPlay style={{ width: '100%', borderRadius: 'var(--radius-md)' }}>
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
        }
      `}</style>
    </section>
  );
}
