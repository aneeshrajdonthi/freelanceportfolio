import React, { useState, useEffect } from 'react';
import { Calculator, Check, Copy, Send, Sparkles, Edit3 } from 'lucide-react';

export default function FreelanceEstimator() {
  const [projectType, setProjectType] = useState('agentic-ai');
  const [deployment, setDeployment] = useState('docker');
  const [urgency, setUrgency] = useState('standard');
  const [editableBrief, setEditableBrief] = useState('');
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);

  const projectTypes = [
    { id: 'agentic-ai', label: 'Agentic AI & Multi-Agent Workflows', focus: 'Autonomous agents, tool execution, CrewAI/LangChain orchestration' },
    { id: 'tts-audio', label: 'Text-to-Speech & Voice AI Models', focus: 'Real-time audio generation, Whisper transcription, ElevenLabs integration' },
    { id: 'ai-security', label: 'AI Security & Prompt Guardrails', focus: 'Sub-5ms Injection scanning, PII redaction, RAG groundedness evaluators' },
    { id: 'rag-engine', label: 'Enterprise RAG & Document Search', focus: 'ChromaDB/Qdrant vector engines, sliding-window chunking, cited chat' },
    { id: 'computer-vision', label: 'Computer Vision & Image Processing', focus: 'Defect classification, OpenCV pipelines, AWS Rekognition, PyTorch/TensorFlow' },
    { id: 'streaming-pipeline', label: 'Real-Time Data Streaming & ETL', focus: 'Kafka, Debezium, Spark, PyODBC live DB streaming & event pipelines' },
    { id: 'data-science-ml', label: 'Data Science & Machine Learning', focus: 'Predictive modeling, EDA, feature engineering, Scikit-Learn/SciPy' },
    { id: 'executive-dashboards', label: 'Executive Dashboards & BI', focus: 'Plotly Dash, Power BI, Tableau, operational KPI visualizations' },
    { id: 'custom-build', label: 'Custom AI & Data Architecture', focus: 'Tailored full-stack AI system built to your exact specification' }
  ];

  const deploymentTypes = [
    { id: 'docker', label: 'Docker / Multi-stage Compose', detail: 'Local & Containerized Production' },
    { id: 'cloud', label: 'GCP / AWS Cloud Run & Serverless', detail: 'Managed Scalable Cloud Infrastructure' },
    { id: 'vercel', label: 'Vercel + Render / Modal', detail: 'Full-Stack Web & Serverless API' }
  ];

  const urgencyLevels = [
    { id: 'standard', label: 'Standard Schedule', note: 'Iterative milestones, thorough testing & code handoff' },
    { id: 'rush', label: 'Accelerated Sprint', note: 'Priority allocation for rapid delivery' }
  ];

  const selectedProj = projectTypes.find(p => p.id === projectType);
  const selectedDep = deploymentTypes.find(d => d.id === deployment);
  const selectedUrg = urgencyLevels.find(u => u.id === urgency);

  // Auto-generate template brief whenever selections change (unless user is manually editing)
  useEffect(() => {
    if (!isCustomizing) {
      const generated = `FREELANCE PROJECT SCOPE BRIEF:
----------------------------------------
Target System: ${selectedProj.label}
Key Technical Focus: ${selectedProj.focus}
Deployment Strategy: ${selectedDep.label} (${selectedDep.detail})
Delivery Schedule: ${selectedUrg.label} (${selectedUrg.note})
Contact Email: aneeshrajdonthi1010@gmail.com | Phone: +91 9392576787

Additional Client Notes: [Add your specific custom requirements or notes here...]`;
      setEditableBrief(generated);
    }
  }, [projectType, deployment, urgency, isCustomizing]);

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(editableBrief);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 3000);
  };

  const handleResetTemplate = () => {
    setIsCustomizing(false);
    const generated = `FREELANCE PROJECT SCOPE BRIEF:
----------------------------------------
Target System: ${selectedProj.label}
Key Technical Focus: ${selectedProj.focus}
Deployment Strategy: ${selectedDep.label} (${selectedDep.detail})
Delivery Schedule: ${selectedUrg.label} (${selectedUrg.note})
Contact Email: aneeshrajdonthi1010@gmail.com | Phone: +91 9392576787

Additional Client Notes: [Add your specific custom requirements or notes here...]`;
    setEditableBrief(generated);
  };

  return (
    <section id="estimator" style={{ padding: '5.5rem 0', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="tag">// INTERACTIVE SCOPE CALCULATOR</span>
          <h2>Configure & Customize Your Project Brief</h2>
          <p>
            Select your technical requirements and directly edit the generated brief below to add custom notes or specs before reaching out.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '2.5rem',
          alignItems: 'start'
        }} className="estimator-grid">

          {/* Left Column: Options Selector */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            
            {/* Step 1: Project Type */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--accent-amber)', fontFamily: 'var(--font-mono)' }}>01.</span>
                <span>Select Target Architecture:</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '0.75rem' }} className="option-grid">
                {projectTypes.map((pt) => (
                  <button
                    key={pt.id}
                    onClick={() => {
                      setProjectType(pt.id);
                      setIsCustomizing(false);
                    }}
                    style={{
                      padding: '0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: projectType === pt.id ? 'var(--accent-amber-glow)' : 'var(--bg-primary)',
                      border: projectType === pt.id ? '1px solid var(--accent-amber)' : '1px solid var(--border-subtle)',
                      color: projectType === pt.id ? 'var(--accent-amber)' : 'var(--text-secondary)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      transition: 'var(--transition)'
                    }}
                  >
                    <div>{pt.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Deployment Strategy */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>02.</span>
                <span>Deployment & Infrastructure:</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>
                {deploymentTypes.map((dt) => (
                  <button
                    key={dt.id}
                    onClick={() => {
                      setDeployment(dt.id);
                      setIsCustomizing(false);
                    }}
                    style={{
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: deployment === dt.id ? 'var(--accent-cyan-glow)' : 'var(--bg-primary)',
                      border: deployment === dt.id ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                      color: deployment === dt.id ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '0.82rem',
                      fontWeight: 600
                    }}
                  >
                    <div>{dt.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Urgency */}
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>03.</span>
                <span>Delivery Pace:</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {urgencyLevels.map((u) => (
                  <button
                    key={u.id}
                    onClick={() => {
                      setUrgency(u.id);
                      setIsCustomizing(false);
                    }}
                    style={{
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: urgency === u.id ? 'var(--accent-emerald-glow)' : 'var(--bg-primary)',
                      border: urgency === u.id ? '1px solid var(--accent-emerald)' : '1px solid var(--border-subtle)',
                      color: urgency === u.id ? 'var(--accent-emerald)' : 'var(--text-secondary)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '0.82rem',
                      fontWeight: 600
                    }}
                  >
                    <div>{u.label}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{u.note}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Editable Proposal Brief */}
          <div className="glass-card" style={{ padding: '2rem', border: '1px solid var(--accent-cyan)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={20} color="var(--accent-amber)" />
                <h3 style={{ fontSize: '1.2rem' }}>Editable Proposal Brief</h3>
              </div>

              {isCustomizing && (
                <button
                  onClick={handleResetTemplate}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--accent-cyan)',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                    textDecoration: 'underline'
                  }}
                >
                  Reset Template
                </button>
              )}
            </div>

            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
              ✏️ <strong>Tip:</strong> Click inside the text box below to edit or type custom notes!
            </p>

            {/* Editable Text Area Brief */}
            <textarea
              value={editableBrief}
              onChange={(e) => {
                setEditableBrief(e.target.value);
                setIsCustomizing(true);
              }}
              rows={11}
              style={{
                width: '100%',
                backgroundColor: 'var(--bg-primary)',
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
                lineHeight: 1.6,
                outline: 'none',
                resize: 'vertical'
              }}
            />

            {/* Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button 
                onClick={handleCopyBrief}
                className="btn btn-primary" 
                style={{ width: '100%', padding: '0.75rem' }}
              >
                {copiedBrief ? <Check size={16} /> : <Copy size={16} />}
                <span>{copiedBrief ? "Brief Copied to Clipboard!" : "Copy Editable Brief"}</span>
              </button>

              <a 
                href={`mailto:aneeshrajdonthi1010@gmail.com?subject=Freelance Proposal Inquiry: ${encodeURIComponent(selectedProj.label)}&body=${encodeURIComponent(editableBrief)}`}
                className="btn btn-secondary" 
                style={{ width: '100%', padding: '0.75rem', textDecoration: 'none' }}
              >
                <Send size={16} />
                <span>Send via Email Directly</span>
              </a>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .estimator-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
