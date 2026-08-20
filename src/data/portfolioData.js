export const personalInfo = {
  name: "Aneesh Raj Donthi",
  title: "AI & Data Engineer",
  subtitle: "AI Engineer @ Tata Electronics · NIT Warangal '25",
  availabilityBadge: "🟢 Available for new projects — Q3 2026",
  headline: "Building Production AI & Data Infrastructure — Without Trial & Error",
  tagline: "I help startups, founders, and engineering teams build secure, scalable AI agents, RAG search, real-time data pipelines, and production ML models.",
  location: "Bengaluru / Ahmedabad, India",
  email: "aneeshrajdonthi1010@gmail.com",
  phone: "+91 9392576787",
  linkedin: "https://www.linkedin.com/in/aneeshrajdonthi",
  github: "https://github.com/aneeshrajdonthi",
  profilePic: "/profilepic.jpg",
  bio: "AI Engineer at Tata Electronics and NIT Warangal alum. I build production-grade AI & Data systems — from autonomous agentic workflows and cited vector RAG to real-time Kafka streaming, computer vision, and predictive ML models.",
  stats: [
    { value: "5", label: "Production Apps" },
    { value: "3", label: "R&D Internships" },
    { value: "9+", label: "Months @ Tata" }
  ]
};

export const idealClients = [
  {
    type: "Early-Stage & Growth Startups",
    desc: "Founders and tech leads building their 0-to-1 production AI features, autonomous agents, RAG knowledge search, or voice interfaces.",
    badge: "0-to-1 AI Build"
  },
  {
    type: "Mid-Size Engineering Teams",
    desc: "Teams scaling real-time data streaming (Kafka, Debezium), automated ML model monitoring, or custom vision & analytics pipelines.",
    badge: "Scale & Infra"
  },
  {
    type: "Enterprise & Technical Advisory",
    desc: "Companies needing AI security guardrail audits, prompt injection protection, PII redaction middleware, or architecture reviews.",
    badge: "Security & Advisory"
  }
];

export const engagementModels = [
  {
    title: "Project-Based Build",
    badge: "Fixed Scope & Timeline",
    desc: "End-to-end design, development, and deployment of a specific AI application, RAG search engine, or streaming data pipeline.",
    bestFor: "Best for discrete 0-to-1 systems with clear milestones"
  },
  {
    title: "Monthly Retainer",
    badge: "Ongoing Engineering",
    desc: "Dedicated engineering capacity for iterative model fine-tuning, agent workflow optimization, security maintenance, and feature additions.",
    bestFor: "Best for teams needing continuous AI/ML momentum"
  },
  {
    title: "Technical Advisory",
    badge: "Architecture & Security Audit",
    desc: "Targeted code & system architecture reviews, AI security guardrail audits, prompt injection stress testing, and tech stack guidance.",
    bestFor: "Best for CTOs & leads evaluating AI system readiness"
  }
];

export const testimonials = [
  {
    quote: "Aneesh demonstrated exceptional engineering discipline during his R&D internship, building high-throughput computer vision & GPU-accelerated LLM evaluation pipelines.",
    author: "R&D Faculty Supervisor",
    role: "Department of Computer Science & Engineering",
    company: "NIT Warangal"
  },
  {
    quote: "Built reliable real-time streaming pipelines with Kafka and PyODBC that continuously process operational plant telemetry with low latency and high stability.",
    author: "Senior Engineering Manager",
    role: "Industry 4.0 & Data Systems",
    company: "Tata Electronics"
  },
  {
    quote: "Delivered predictive modeling and automated ETL analytical pipelines that drastically cut our data reporting turnaround time while improving prediction precision.",
    author: "Analytics Lead",
    role: "Data & Publishing Analytics",
    company: "Outlook Publishing Group"
  }
];

export const projects = [
  {
    id: "openpulse-ai",
    title: "OpenPulse AI",
    subtitle: "Real-time AST architecture visualizer & multi-model AI workspace",
    category: "Dev Tooling",
    description: "Parses public GitHub repositories into interactive System Design architecture topology flowcharts, AST file trees, SAST security vulnerability audits, and multi-provider BYOK (Bring Your Own Key) LLM issue resolution plans.",
    techStack: ["React 18", "TypeScript", "Tailwind CSS v4", "Vite", "GitHub API", "Multi-LLM"],
    highlights: [
      "Interactive System Architecture topology flowchart & AST tree visualizer",
      "Multi-Provider BYOK integration for Gemini, OpenAI, Claude, and Ollama Local",
      "Automated SAST security auditor with inline AI refactoring patches",
      "AI Issue Studio with live git diff generator and PR description builder"
    ],
    githubUrl: "https://github.com/aneeshrajdonthi/openpulse-ai",
    liveUrl: "https://openpulse-ai.vercel.app/",
    hasVideo: false
  },
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
    title: "Agentic AI & Automation",
    icon: "Bot",
    description: "Autonomous agents for email triage, scheduling, data processing, and multi-step workflows with tool-calling and MCP integration.",
    tech: ["LangChain", "CrewAI", "FastAPI", "Gemini", "MCP"]
  },
  {
    id: "ml",
    title: "Machine Learning",
    icon: "TrendingUp",
    description: "Predictive models, classification, regression, anomaly detection, and recommendation systems using production-grade ML pipelines.",
    tech: ["Scikit-Learn", "XGBoost", "SciPy", "Pandas"]
  },
  {
    id: "dl",
    title: "Deep Learning",
    icon: "Layers",
    description: "Neural network architectures — CNNs, transformers, transfer learning, and fine-tuning for custom datasets and domain-specific tasks.",
    tech: ["PyTorch", "TensorFlow", "Keras", "Hugging Face"]
  },
  {
    id: "data-science",
    title: "Data Science & Analytics",
    icon: "BarChart3",
    description: "Exploratory analysis, statistical modeling, hypothesis testing, and interactive dashboards that turn raw data into business decisions.",
    tech: ["Pandas", "Plotly", "Power BI", "Tableau", "SQL"]
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    icon: "Database",
    description: "End-to-end data pipelines — real-time CDC streaming, ETL workflows, data warehousing, and database optimization at scale.",
    tech: ["Kafka", "Spark", "Debezium", "Airflow", "PostgreSQL"]
  },
  {
    id: "rag-systems",
    title: "RAG & Vector Search",
    icon: "Search",
    description: "Hybrid vector-relational search engines with cited answers, context-preserving chunking, and zero-hallucination document Q&A.",
    tech: ["ChromaDB", "Qdrant", "LangChain", "Embeddings"]
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    icon: "Eye",
    description: "Object detection, image classification, defect inspection, and visual processing pipelines for industrial and commercial use.",
    tech: ["OpenCV", "PyTorch", "YOLO", "AWS Rekognition"]
  },
  {
    id: "nlp-voice",
    title: "NLP & Voice AI",
    icon: "Mic",
    description: "Text processing, sentiment analysis, speech synthesis, real-time transcription, and conversational AI interfaces.",
    tech: ["Whisper", "ElevenLabs", "spaCy", "Transformers"]
  },
  {
    id: "web-dev",
    title: "Full-Stack Web Dev",
    icon: "Code",
    description: "Responsive web applications with modern React frontends, Python/Node backends, REST/GraphQL APIs, and cloud deployment.",
    tech: ["React", "Next.js", "FastAPI", "Node.js", "Docker"]
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
  { role: "General Secretary", org: "NSS, NIT Warangal", year: "2023" },
  { role: "Head of Logistics", org: "SpringSpree, NIT Warangal", year: "2023" }
];

export const certifications = [
  { title: "Advanced Software Engineering", issuer: "Walmart USA / Forage" },
  { title: "AI Job Simulation", issuer: "Cognizant / Forage" },
  { title: "AI Virtual Experience", issuer: "Tata / Forage" },
  { title: "Data Visualisation", issuer: "Tata / Forage" }
];
