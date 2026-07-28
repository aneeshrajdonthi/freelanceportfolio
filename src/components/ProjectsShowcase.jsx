import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { ExternalLink, Github, Play, X, CheckCircle2 } from 'lucide-react';

export default function ProjectsShowcase() {
  const [videoUrl, setVideoUrl] = useState(null);

  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">Selected Work</p>
        <h2 className="section-title">Things I've built</h2>
        <p className="section-desc">
          Production systems with real repos, live deployments, and video walkthroughs — not tutorials or toy demos.
        </p>

        <div className="projects-list">
          {projects.map(p => (
            <div key={p.id} className="card project-card">

              <div
                className="project-inner"
                style={{ gridTemplateColumns: p.hasVideo ? '1fr 1fr' : '1fr' }}
              >
                {/* Content */}
                <div className="project-content">
                  <span className="badge badge-amber">{p.category}</span>

                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-subtitle">{p.subtitle}</p>
                  <p className="project-desc">{p.description}</p>

                  <ul className="project-highlights">
                    {p.highlights.map((h, i) => (
                      <li key={i}>
                        <CheckCircle2 size={14} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="project-tech">
                    {p.techStack.map((t, i) => (
                      <span key={i} className="badge badge-muted">{t}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    {p.liveUrl && (
                      <a href={p.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                        Live Demo <ExternalLink size={13} />
                      </a>
                    )}
                    <a href={p.githubUrl} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">
                      <Github size={14} /> Source
                    </a>
                    {p.hasVideo && (
                      <button onClick={() => setVideoUrl(p.videoUrl)} className="btn btn-ghost btn-sm">
                        <Play size={14} /> Watch Demo
                      </button>
                    )}
                  </div>
                </div>

                {/* Video Panel */}
                {p.hasVideo && (
                  <div className="project-video-panel">
                    <video
                      controls
                      poster={p.poster}
                      preload="none"
                      className="project-video"
                    >
                      <source src={p.videoUrl} type="video/mp4" />
                    </video>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      {videoUrl && (
        <div className="video-overlay" onClick={() => setVideoUrl(null)}>
          <div className="video-modal" onClick={e => e.stopPropagation()}>
            <button className="video-close" onClick={() => setVideoUrl(null)}>
              <X size={18} />
            </button>
            <video controls autoPlay className="video-player">
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
        </div>
      )}

      <style>{`
        .projects-list {
          display: flex; flex-direction: column; gap: 2rem;
          margin-top: 3rem;
        }
        .project-card { overflow: hidden; }
        .project-inner {
          display: grid; gap: 0;
        }
        .project-content {
          padding: 2rem;
          display: flex; flex-direction: column;
        }
        .project-title {
          font-size: 1.35rem; margin-top: 0.8rem; margin-bottom: 0.2rem;
        }
        .project-subtitle {
          color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1.15rem;
        }
        .project-desc {
          color: var(--text-secondary); font-size: 0.92rem;
          line-height: 1.7; margin-bottom: 1.25rem;
        }
        .project-highlights {
          list-style: none; padding: 0; margin-bottom: 1.25rem;
          display: flex; flex-direction: column; gap: 0.4rem;
        }
        .project-highlights li {
          display: flex; align-items: flex-start; gap: 0.45rem;
          font-size: 0.86rem; color: var(--text-secondary); line-height: 1.5;
        }
        .project-tech {
          display: flex; flex-wrap: wrap; gap: 0.3rem;
          margin-bottom: 1.5rem;
        }
        .project-actions {
          display: flex; flex-wrap: wrap; gap: 0.5rem;
          margin-top: auto;
        }
        .btn-sm {
          padding: 0.5rem 0.9rem; font-size: 0.82rem;
        }
        .project-video-panel {
          background: var(--bg-secondary);
          border-left: 1px solid var(--border-subtle);
          padding: 1.5rem;
          display: flex; align-items: center;
        }
        .project-video {
          width: 100%; border-radius: var(--radius-sm);
          display: block;
        }

        /* Video Modal */
        .video-overlay {
          position: fixed; inset: 0;
          background: rgba(0, 0, 0, 0.88);
          backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex; align-items: center; justify-content: center;
          padding: 1.5rem;
        }
        .video-modal {
          position: relative; width: 100%; max-width: 840px;
        }
        .video-close {
          position: absolute; top: -2.5rem; right: 0;
          background: none; border: none; color: #94a3b8;
          cursor: pointer; padding: 0.3rem;
        }
        .video-close:hover { color: #f1f5f9; }
        .video-player {
          width: 100%; border-radius: var(--radius-sm);
          max-height: 75vh;
        }

        @media (max-width: 860px) {
          .project-inner { grid-template-columns: 1fr !important; }
          .project-video-panel {
            border-left: none;
            border-top: 1px solid var(--border-subtle);
            padding: 1.25rem;
          }
          .project-content { padding: 1.5rem; }
        }
        @media (max-width: 560px) {
          .project-actions { flex-direction: column; }
          .project-actions .btn { width: 100%; }
        }
      `}</style>
    </section>
  );
}
