import React from 'react';
import { experiences, certifications, leadership } from '../data/portfolioData';
import { GraduationCap, Award, Users } from 'lucide-react';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <p className="section-label">Experience</p>
        <h2 className="section-title">Where I've worked</h2>

        <div className="exp-layout">
          {/* Main column — work experience */}
          <div className="exp-main">
            {experiences.map((exp, i) => (
              <div key={i} className="card exp-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">{exp.company} · {exp.location}</p>
                  </div>
                  <span className="badge badge-muted">{exp.period}</span>
                </div>

                <ul className="exp-list">
                  {exp.description.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>

                <div className="exp-skills">
                  {exp.skills.map((s, j) => (
                    <span key={j} className="badge badge-muted">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar — education, leadership, certs */}
          <div className="exp-sidebar">
            <div className="card sidebar-card">
              <div className="sidebar-heading">
                <GraduationCap size={16} />
                <span>Education</span>
              </div>
              <h4 className="sidebar-title">NIT Warangal</h4>
              <p className="sidebar-meta">B.Tech in Mechanical Engineering, 2021–2025</p>
            </div>

            <div className="card sidebar-card">
              <div className="sidebar-heading">
                <Users size={16} />
                <span>Leadership</span>
              </div>
              {leadership.map((l, i) => (
                <div key={i} className="sidebar-item">
                  <p className="sidebar-title">{l.role}</p>
                  <p className="sidebar-meta">{l.org} · {l.year}</p>
                </div>
              ))}
            </div>

            <div className="card sidebar-card">
              <div className="sidebar-heading">
                <Award size={16} />
                <span>Certifications</span>
              </div>
              {certifications.map((c, i) => (
                <div key={i} className="sidebar-item">
                  <p className="sidebar-title">{c.title}</p>
                  <p className="sidebar-meta">{c.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .exp-layout {
          display: grid;
          grid-template-columns: 1.4fr 0.6fr;
          gap: 2rem;
          margin-top: 3rem;
        }
        .exp-main {
          display: flex; flex-direction: column; gap: 1.25rem;
        }
        .exp-card { padding: 1.75rem; }
        .exp-header {
          display: flex; justify-content: space-between; align-items: flex-start;
          flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;
        }
        .exp-role { font-size: 1.1rem; }
        .exp-company {
          color: var(--text-muted); font-size: 0.86rem; margin-top: 0.15rem;
        }
        .exp-list {
          list-style: none; padding: 0; margin-bottom: 1rem;
        }
        .exp-list li {
          position: relative; padding-left: 0.9rem;
          color: var(--text-secondary); font-size: 0.88rem;
          line-height: 1.65; margin-bottom: 0.45rem;
        }
        .exp-list li::before {
          content: ''; position: absolute; left: 0; top: 0.55em;
          width: 4px; height: 4px; border-radius: 50%;
          background: var(--text-muted);
        }
        .exp-skills {
          display: flex; flex-wrap: wrap; gap: 0.25rem;
        }

        .exp-sidebar {
          display: flex; flex-direction: column; gap: 1.25rem;
        }
        .sidebar-card { padding: 1.5rem; }
        .sidebar-heading {
          display: flex; align-items: center; gap: 0.4rem;
          font-weight: 700; font-size: 0.88rem;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }
        .sidebar-title {
          font-size: 0.88rem; font-weight: 600; color: var(--text-primary);
        }
        .sidebar-meta {
          font-size: 0.78rem; color: var(--text-muted); margin-top: 0.1rem;
        }
        .sidebar-item {
          margin-bottom: 0.85rem;
        }
        .sidebar-item:last-child { margin-bottom: 0; }

        @media (max-width: 768px) {
          .exp-layout { grid-template-columns: 1fr; }
          .exp-card { padding: 1.5rem; }
          .sidebar-card { padding: 1.25rem; }
        }
      `}</style>
    </section>
  );
}
