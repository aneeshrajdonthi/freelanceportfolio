export const personalInfo = {
  name: "Aneesh Raj Donthi",
  title: "AI Engineer",
  subtitle: "AI Engineer @ Tata Electronics · NIT Warangal '25",
  tagline: "I build AI systems that ship to production.",
  location: "India",
  email: "aneeshrajdonthi1010@gmail.com",
  phone: "+91 9392576787",
  linkedin: "https://www.linkedin.com/in/aneeshrajdonthi",
  github: "https://github.com/aneeshrajdonthi",
  profilePic: "/profilepic.jpg",
  bio: "AI Engineer at Tata Electronics and NIT Warangal alum. I build end-to-end production AI — autonomous agents, RAG systems, real-time data pipelines, ML monitoring, and computer vision. Open to select freelance projects."
};

export const projects = [
  {
    id: "driftshield-ai",
    title: "DriftShield AI",
    subtitle: "Real-time ML monitoring & fraud detection platform",
    category: "MLOps",
    description: "Production ML models degrade silently when data patterns shift. DriftShield catches this — streaming transactions via SSE, running Isolation Forest inference in under 10ms, applying KS-tests for drift detection, and auto-triggering model retraining when performance drops.",
    techStack: ["FastAPI", "React", "Scikit-Learn", "SciPy", "Gemini Flash", "Docker"],
    highlights: [
      "Sub-10ms inference with server-sent event streaming",
      "KS-test automated distribution drift detection",
      "Champion vs. Challenger model comparison before promotion",
      "AI-generated diagnostic reports on drift events"
    ],
    githubUrl: "https://github.com/aneeshrajdonthi/driftshield-ai",
    liveUrl: "https://driftshield-ai-theta.vercel.app/",
    hasVideo: true,
    videoUrl: "/videos/driftshield-ai.mp4",
    poster: "/driftshield_video_cover.jpg"
  },
  {
    id: "rag-portal",
    title: "Document RAG Portal",
    subtitle: "Hybrid vector search with cited answers",
    category: "RAG",
    description: "Enterprise docs are dense and unsearchable. This system pairs ChromaDB vector indexing with SQLite metadata, uses sliding-window chunking for context preservation, and shows inline citations with cosine similarity scores — so every answer is traceable back to source.",
    techStack: ["FastAPI", "ChromaDB", "SQLite", "Gemini Flash", "React", "Docker"],
    highlights: [
      "768-dimensional persistent vector embeddings",
      "Sliding window chunking with 150-char overlap",
      "Interactive citation inspector with similarity scores",
      "Document scope filtering at the database level"
    ],
    githubUrl: "https://github.com/aneeshrajdonthi/rag-portal",
    liveUrl: "",
    hasVideo: true,
    videoUrl: "/videos/rag-portal.mp4",
    poster: "/rag_portal_video_cover.jpg"
  },
  {
    id: "agentguard-ai",
    title: "AgentGuard OS",
    subtitle: "AI security & observability platform",
    category: "AI Security",
    description: "LLM apps face prompt injection, PII leakage, and hallucinations. AgentGuard scans prompts in under 5ms, auto-redacts sensitive data, scores response grounding, and visualizes multi-agent execution traces — a self-hosted alternative to LangSmith and Lakera Guard.",
    techStack: ["FastAPI", "React", "WebSockets", "SQLAlchemy", "LangChain", "Docker"],
    highlights: [
      "Sub-5ms prompt injection detection",
      "Automatic PII redaction via regex patterns",
      "Multi-agent DAG trace visualization",
      "P95/P99 latency tracking and audit logs"
    ],
    githubUrl: "https://github.com/aneeshrajdonthi/agentguard-ai",
    liveUrl: "https://agentguard-ai-sigma.vercel.app/",
    hasVideo: false
  },
  {
    id: "saasify",
    title: "SaaSify Support Agent",
    subtitle: "AI-powered email triage & response system",
    category: "Agentic AI",
    description: "Support teams waste hours manually categorizing emails. SaaSify classifies, prioritizes, and drafts context-aware responses using Gemini Flash — with dynamic policy injection, sentiment analysis, and a developer telemetry console for full prompt transparency.",
    techStack: ["FastAPI", "SQLite", "SQLAlchemy", "React", "Gemini Flash", "Docker"],
    highlights: [
      "Zero-shot email classification with sentiment scoring",
      "Dynamic policy injection from editable knowledge base",
      "Full prompt telemetry console for developer transparency",
      "Offline regex fallback when API is unavailable"
    ],
    githubUrl: "https://github.com/aneeshrajdonthi/saasify-ai-agent",
    liveUrl: "",
    hasVideo: false
  }
];

export const services = [
  {
    id: "agentic-ai",
    title: "AI Agents & Automation",
    icon: "Bot",
    description: "Autonomous agents for email triage, scheduling, data processing, and multi-step workflows with tool-calling and MCP integration.",
    tech: ["LangChain", "FastAPI", "Gemini", "GPT-4", "MCP"]
  },
  {
    id: "tts-audio",
    title: "Voice AI & Speech",
    icon: "Mic",
    description: "Real-time voice interfaces, speech synthesis, transcription pipelines, and multilingual audio processing for web and mobile apps.",
    tech: ["ElevenLabs", "Whisper", "WebSockets", "FastAPI"]
  },
  {
    id: "rag-systems",
    title: "RAG & Vector Search",
    icon: "Database",
    description: "Turn document repositories into accurate, cited knowledge engines with hybrid vector-relational architectures and context-preserving chunking.",
    tech: ["ChromaDB", "Qdrant", "FastAPI", "React", "Docker"]
  },
  {
    id: "ai-security",
    title: "AI Security & Guardrails",
    icon: "ShieldAlert",
    description: "Prompt injection firewalls, PII redaction middleware, hallucination evaluators, and compliance audit logging for production LLM applications.",
    tech: ["FastAPI", "LangChain", "LlamaIndex", "Regex"]
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    icon: "Eye",
    description: "Industrial quality inspection, object detection, defect classification, and deep learning pipelines deployed on cloud or edge infrastructure.",
    tech: ["OpenCV", "PyTorch", "TensorFlow", "AWS Lambda"]
  },
  {
    id: "data-streaming",
    title: "Data Pipelines & Analytics",
    icon: "Activity",
    description: "Real-time CDC streaming, ML model training, predictive analytics, and interactive operational dashboards for business intelligence.",
    tech: ["Kafka", "Spark", "Debezium", "Plotly Dash", "Power BI"]
  }
];

export const experiences = [
  {
    role: "AI Engineer",
    company: "Tata Electronics",
    period: "Nov 2025 – Present",
    location: "Bengaluru / Hosur",
    description: [
      "Building real-time data pipelines using Kafka, Debezium, and PyODBC to capture manufacturing metrics (throughput, WIP, OEE).",
      "Developing operational analytics dashboards with Plotly Dash for live plant monitoring.",
      "Automating data processing workflows with custom Python scripts for low-latency telemetry."
    ],
    skills: ["Kafka", "Debezium", "PyODBC", "Plotly Dash", "Python", "SQL"]
  },
  {
    role: "Research Intern",
    company: "NIT Warangal",
    period: "Nov – Dec 2023",
    location: "Warangal, India",
    description: [
      "Optimized computer vision pipelines using LBP, OpenCV, and NumPy — achieving 17% runtime improvement.",
      "Evaluated CNN models (TensorFlow, PyTorch) with transfer learning on Corel-250 benchmarks.",
      "Built distributed LLM evaluation pipelines on AWS Lambda processing 5,000+ daily evaluations."
    ],
    skills: ["OpenCV", "PyTorch", "TensorFlow", "AWS Lambda", "FastAPI"]
  },
  {
    role: "Analytics Intern",
    company: "Outlook Publishing Group",
    period: "May – Jul 2024",
    location: "Bengaluru, India",
    description: [
      "Analyzed 20,000+ sales records to forecast trends, improving prediction accuracy by 18%.",
      "Built ETL pipelines that cut reporting turnaround from 2 hours to 30 minutes."
    ],
    skills: ["Python", "SQL", "Power BI", "Tableau"]
  }
];

export const leadership = [
  {
    role: "General Secretary",
    org: "NSS, NIT Warangal",
    year: "2023"
  },
  {
    role: "Head of Logistics",
    org: "SpringSpree, NIT Warangal",
    year: "2023"
  }
];

export const certifications = [
  { title: "Advanced Software Engineering", issuer: "Walmart USA / Forage" },
  { title: "AI Job Simulation", issuer: "Cognizant / Forage" },
  { title: "AI Virtual Experience", issuer: "Tata / Forage" },
  { title: "Data Visualisation", issuer: "Tata / Forage" }
];
