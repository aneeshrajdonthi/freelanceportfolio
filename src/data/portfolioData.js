export const personalInfo = {
  name: "Aneesh Raj Donthi",
  title: "AI & Data Systems Engineer | Freelance AI & ML Architect",
  tagline: "Architecting Production AI Agents, Custom Machine Learning & Enterprise Data Systems",
  location: "Bengaluru / Ahmedabad, India",
  education: "B.Tech in Mechanical Engineering, National Institute of Technology Warangal (NITW '25)",
  currentRole: "AI Engineer @ Tata Electronics",
  availability: "Available for Select Freelance Contracts & Technical Advisory",
  email: "aneeshrajdonthi1010@gmail.com",
  phone: "+91 9392576787",
  linkedin: "https://www.linkedin.com/in/aneeshrajdonthi",
  github: "https://github.com/aneeshrajdonthi",
  profilePic: "/profilepic.jpg",
  bio: "AI & Data Systems Engineer specializing in end-to-end production AI applications—including Autonomous Agentic AI, Text-to-Speech & Voice Models, Enterprise RAG, Computer Vision, Real-Time Streaming (Kafka, Debezium, Spark), Machine Learning, and Analytics Dashboards. AI Engineer @ Tata Electronics & NIT Warangal Alum."
};

export const projects = [
  {
    id: "rag-portal",
    title: "Enterprise Document RAG & Cited Semantic Search Portal",
    subtitle: "Production Hybrid SQLite + ChromaDB Vector Engine",
    category: "RAG & Knowledge Search",
    badge: "Featured Walkthrough Video",
    featured: true,
    hasVideo: true,
    videoUrl: "/videos/rag-portal.mp4",
    poster: "/rag_portal_video_cover.jpg",
    githubUrl: "https://github.com/aneeshrajdonthi/rag-portal",
    liveUrl: "",
    problem: "Enterprise legal and HR documents are dense and unsearchable. Raw LLM Q&A without strict vector retrieval results in unverified hallucinations, lack of citations, and context overflow.",
    solution: "Architected a hybrid vector-relational system pairing ChromaDB (768d persistent vector index) with SQLite for transactional metadata. Implemented sliding-window text chunking (150-char overlap) and clickable inline citation drawers showing exact cosine similarity scores.",
    techStack: ["FastAPI", "ChromaDB", "SQLite", "Google Gemini 2.5 Flash", "React 18", "Docker Compose", "Nginx"],
    keyMetrics: [
      "768d Vector Embeddings",
      "150-char Context Overlap",
      "100% Traceable Citations",
      "Multi-stage Docker Build"
    ],
    highlights: [
      "Sliding window recursive text chunker preserving context across paragraph boundaries",
      "Interactive Citation Inspector showing exact text chunks and mathematical similarity scores",
      "Granular document scope checklist filtering vector queries at database-level",
      "Developer Telemetry Console for testing raw cosine distance scores in real-time"
    ],
    freelanceUseCases: [
      "Legal Contract Audit Assistants with exact clause citations",
      "Enterprise HR Policy Q&A with verifiable document chunk references",
      "Customer Support Knowledge Base with zero-hallucination guarantees"
    ]
  },
  {
    id: "agentguard-ai",
    title: "AgentGuard Enterprise OS",
    subtitle: "AI Security, Multi-Agent Visualizer & Hallucination Guardrail Platform",
    category: "AI Security & Guardrails",
    badge: "Live Production Vercel App",
    featured: true,
    hasVideo: false,
    githubUrl: "https://github.com/aneeshrajdonthi/agentguard-ai",
    liveUrl: "https://agentguard-ai-sigma.vercel.app/",
    backendUrl: "https://agentguard-ai.onrender.com/",
    problem: "Production AI agents face critical security risks: malicious prompt injection overrides, inadvertent PII exposure (SSNs, API keys), ungrounded RAG hallucinations, and unmonitored API cost overruns.",
    solution: "Engineered a self-hosted alternative to LangSmith and Lakera Guard. Features sub-5ms prompt injection scanning, automatic PII redaction, token grounding precision scoring, nested DAG trace visualizers, and P95/P99 latency distribution tracking.",
    techStack: ["Python", "FastAPI", "React 18", "WebSockets", "SQLAlchemy", "LangChain", "LlamaIndex", "Google Gemini SDK", "Docker"],
    keyMetrics: [
      "<5ms Injection Detection",
      "P95/P99 Latency Tracking",
      "100% PII Regex Redaction",
      "Multi-Framework Native SDK"
    ],
    highlights: [
      "Interprets prompt injection, instruction overrides, and DAN mode bypasses in under 5ms",
      "Sanitizes emails, phone numbers, credit card numbers, and API keys before hitting LLM APIs",
      "Interactive Multi-Agent DAG execution tree with parent-child span timelines",
      "1-click CSV audit log export and Slack Webhook alert dispatching"
    ],
    freelanceUseCases: [
      "Enterprise LLM Firewall & Security Middleware",
      "Multi-Agent Workflow Telemetry & Latency Optimization",
      "SOC2 / Compliance AI Audit Logging Systems"
    ]
  },
  {
    id: "cortexflow",
    title: "CortexFlow AI Agent Orchestration Platform",
    subtitle: "Distributed Agent Systems & Serverless Microservices",
    category: "Agentic AI",
    badge: "Distributed Systems",
    featured: true,
    hasVideo: false,
    githubUrl: "https://github.com/aneeshrajdonthi",
    liveUrl: "",
    problem: "Complex enterprise workflows require coordinated multi-agent task execution, parallel API orchestrations, and reliable error handling under heavy load.",
    solution: "Designed a distributed AI agent system using LangChain, FastAPI, AWS Lambda, and DynamoDB. Automates scheduling, email triage, and note summarization while providing a real-time React dashboard for prompt optimization.",
    techStack: ["LangChain", "FastAPI", "AWS Lambda", "DynamoDB", "React.js", "OpenAI GPT-4", "Docker"],
    keyMetrics: [
      "55% Task Overhead Reduction",
      "Sub-second Response Times",
      "Serverless AWS Lambda",
      "Real-Time Telemetry Dashboard"
    ],
    highlights: [
      "Automated scheduling, email triage, and document summarization pipelines",
      "Serverless microservices architecture with AWS Lambda and DynamoDB",
      "Real-time React dashboard for workflow monitoring and prompt alignment"
    ],
    freelanceUseCases: [
      "Autonomous Enterprise Task Agents & Workflow Automation",
      "Serverless AI Microservice Development",
      "Distributed LLM Orchestration Pipelines"
    ]
  },
  {
    id: "driftshield-ai",
    title: "DriftShield AI",
    subtitle: "Real-Time Fraud Detection & MLOps Concept Drift Portal",
    category: "ML & Real-Time Data",
    badge: "Live Production Vercel App",
    featured: true,
    hasVideo: false,
    githubUrl: "https://github.com/aneeshrajdonthi/driftshield-ai",
    liveUrl: "https://driftshield-ai-theta.vercel.app/",
    problem: "Production machine learning models suffer silent degradation when incoming real-world transaction patterns shift (concept drift), leading to missed fraud detection and costly false positives.",
    solution: "Built a production-grade MLOps monitoring platform. Features real-time SSE transaction streaming, Isolation Forest outlier classification (<10ms), Kolmogorov-Smirnov statistical testing for covariate shift detection, and automated challenger model retraining loops.",
    techStack: ["FastAPI", "React (Vite)", "Scikit-Learn", "SciPy (KS-test)", "Pandas", "NumPy", "Gemini 2.5 Flash", "Docker", "Nginx"],
    keyMetrics: [
      "<10ms Inference Latency",
      "Kolmogorov-Smirnov Drift Test",
      "2D Incremental PCA Clustering",
      "Automated Challenger Retraining"
    ],
    highlights: [
      "Server-Sent Events (SSE) stream evaluate transaction vectors under 10ms latency",
      "Statistical two-sample Kolmogorov-Smirnov test flags feature distribution shifts automatically",
      "Side-by-side Champion vs. Challenger shadow model benchmarking before live promotion",
      "Gemini 2.5 Flash automated operational diagnostic reports generated upon drift detection"
    ],
    freelanceUseCases: [
      "Real-Time Financial Anomaly & Credit Card Fraud Engines",
      "Production ML Model Health Monitoring & Retraining Automation",
      "High-Dimensional Data Visualizers & Executive Dashboards"
    ]
  },
  {
    id: "campus-market",
    title: "Campus Market Intelligent Search Platform",
    subtitle: "Full-Stack Marketplace with RAG & MCP Protocol Integration",
    category: "RAG & Knowledge Search",
    badge: "500+ Active Users",
    featured: false,
    hasVideo: false,
    githubUrl: "https://github.com/aneeshrajdonthi",
    liveUrl: "",
    problem: "Campus community platforms lack intelligent semantic search, contextual product discovery, and structured conversational AI capabilities.",
    solution: "Architected a full-stack web marketplace using React, Node.js, Express, and MongoDB. Integrated LangChain semantic search, OpenAI embeddings, and Model Context Protocol (MCP) servers.",
    techStack: ["React.js", "Node.js", "Express", "MongoDB", "AWS S3", "LangChain", "OpenAI GPT-4", "MCP Protocol"],
    keyMetrics: [
      "99.8% System Uptime",
      "500+ Active Users",
      "50% Higher Search Precision",
      "MCP Protocol Integration"
    ],
    highlights: [
      "LLM-powered conversational search improving search precision by 50%",
      "AWS S3 media storage & secure JWT authentication",
      "Model Context Protocol (MCP) server integration for extended AI tool capabilities"
    ],
    freelanceUseCases: [
      "Full-Stack E-Commerce & Marketplace AI Integrations",
      "MCP Protocol Server Implementation",
      "Conversational Product Recommendation Systems"
    ]
  },
  {
    id: "saasify",
    title: "SaaSify AI Customer Support Agent",
    subtitle: "Context-Injected Email Sorting & Telemetry Console",
    category: "Agentic AI",
    badge: "Agentic Automation",
    featured: false,
    hasVideo: false,
    githubUrl: "https://github.com/aneeshrajdonthi/saasify-ai-agent",
    liveUrl: "",
    problem: "Customer success teams waste hundreds of hours manually categorizing, prioritizing, and drafting context-rich technical responses to incoming client support emails.",
    solution: "Created an interactive glassmorphic dashboard powered by Gemini 2.5 Flash. Features zero-shot email classification, sentiment analysis, dynamic CRUD policy context injection, raw prompt telemetry console, and offline fallback mode.",
    techStack: ["FastAPI", "Python", "SQLite", "SQLAlchemy", "React.js", "Gemini 2.5 Flash", "Docker Compose"],
    keyMetrics: [
      "Zero-Shot Email Routing",
      "Dynamic Policy Injector",
      "Real-Time Telemetry Log",
      "Offline Regex Fallback"
    ],
    highlights: [
      "Zero-shot email classification with sentiment scoring and priority tagging",
      "CRUD Knowledge Base editor that dynamically injects policies into prompt context",
      "Full developer transparency console showing system instructions, raw prompts, and raw JSON",
      "One-click CSV report exporter for processing support metrics"
    ],
    freelanceUseCases: [
      "Automated Support Ticket Triaging & Response Generators",
      "Custom Knowledge Base Context Injectors for SaaS Platforms",
      "Internal Operational Automation Dashboards"
    ]
  }
];

export const services = [
  {
    id: "agentic-ai",
    title: "Agentic AI & Multi-Agent Systems",
    icon: "Bot",
    tagline: "Build autonomous AI agents, multi-agent workflow orchestrators, and tool-using LLM reasoning systems.",
    deliverables: [
      "Multi-Agent Workflow Execution (LangChain, AutoGen, CrewAI)",
      "Autonomous Email Triage, Scheduling & Task Automation Agents",
      "Model Context Protocol (MCP) Server & Tool Integrations",
      "Prompt Optimization & Agent Telemetry Consoles"
    ],
    tech: ["LangChain", "FastAPI", "Python", "Gemini SDK", "OpenAI GPT-4", "MCP Protocol"]
  },
  {
    id: "tts-audio",
    title: "Text-to-Speech & Voice AI Models",
    icon: "Mic",
    tagline: "Implement real-time voice interactions, audio generation, speech-to-text, and conversational voice interfaces.",
    deliverables: [
      "ElevenLabs, Whisper & Real-Time Voice Model Integrations",
      "Low-Latency Audio Streaming & Speech Synthesis Pipelines",
      "Conversational Voice AI Assistants for Web & Mobile",
      "Multilingual Audio Transcription & Summarization"
    ],
    tech: ["ElevenLabs API", "OpenAI Whisper", "Python", "WebSockets", "FastAPI"]
  },
  {
    id: "rag-systems",
    title: "Enterprise Document RAG & Vector Search",
    icon: "Database",
    tagline: "Turn complex PDF, Word, and text document repositories into accurate, cited conversational knowledge engines.",
    deliverables: [
      "Hybrid Relational + ChromaDB / Qdrant Vector Architectures",
      "Custom Context Splitters & Sliding Window Chunking Pipelines",
      "Inline Interactive Citation Drawers with Cosine Distance Scores",
      "Document Scope Checklist Filtering & Multi-Tenant Security"
    ],
    tech: ["ChromaDB", "FastAPI", "SQLite", "Python", "React", "Docker"]
  },
  {
    id: "ai-security",
    title: "AI Security & Guardrail Engineering",
    icon: "ShieldAlert",
    tagline: "Protect your enterprise LLM applications against prompt injections, data leakage, and ungrounded claims.",
    deliverables: [
      "Sub-5ms Prompt Injection & System Override Firewalls",
      "Automatic PII Masking & Data Sanitization Middleware",
      "RAG Groundedness & Hallucination Evaluators",
      "Multi-Agent Span Telemetry & Compliance Audit Logs"
    ],
    tech: ["FastAPI", "LangChain", "LlamaIndex", "Gemini SDK", "Regex / Spacy"]
  },
  {
    id: "computer-vision",
    title: "Computer Vision & Image Processing",
    icon: "Eye",
    tagline: "Deploy industrial quality inspection, object detection, defect classification, and deep learning pipelines.",
    deliverables: [
      "OpenCV Image Processing & Feature Extraction (LBP, Filters)",
      "CNN Deep Learning Classification (PyTorch, TensorFlow, Keras)",
      "Serverless AWS Cloud Vision Pipelines (Rekognition, Lambda, S3)",
      "Real-Time Image Defect Detection & Quality Control"
    ],
    tech: ["OpenCV", "PyTorch", "TensorFlow", "AWS Rekognition", "AWS Lambda", "Python"]
  },
  {
    id: "data-streaming-ml",
    title: "Data Science, Real-Time Streaming & BI",
    icon: "Activity",
    tagline: "Ingest continuous real-time data streams (Kafka, Spark) and build predictive ML models and executive dashboards.",
    deliverables: [
      "Real-Time Database Change Data Capture (Debezium + Kafka)",
      "Apache Spark & PyODBC Real-Time Data Transformations",
      "Predictive Machine Learning Models (Scikit-Learn, SciPy)",
      "Interactive Dashboards (Plotly Dash, Power BI, Tableau)"
    ],
    tech: ["Apache Kafka", "Debezium", "Apache Spark", "PyODBC", "Plotly Dash", "Power BI"]
  }
];

export const experiences = [
  {
    role: "Artificial Intelligence Engineer",
    company: "Tata Electronics",
    period: "Nov 2025 - Present (Total 9 mos)",
    location: "Bengaluru / Hosur",
    description: [
      "Built real-time data streaming and integration pipelines using Kafka, Debezium, PyODBC, and SQL databases to continuously capture operational metrics (Throughput, WIP, OEE, OLE).",
      "Developed interactive operational analytics dashboards using Plotly Dash enabling real-time monitoring of manufacturing operations.",
      "Automated data pipelines using custom Python scripts to process live plant telemetry with low latency.",
      "Collaborated closely with manufacturing and quality engineering teams to translate business requirements into actionable KPI visualizations."
    ],
    skills: ["Real-Time Streaming", "Apache Kafka", "Debezium", "PyODBC", "Plotly Dash", "Python", "SQL Pipelines", "Manufacturing Metrics (OEE/OLE)"]
  },
  {
    role: "R&D Research Intern",
    company: "National Institute of Technology (NIT) Warangal",
    period: "Nov 2023 - Dec 2023",
    location: "Warangal, India",
    description: [
      "Designed and optimized Computer Vision & Image Processing pipelines using Local Binary Patterns (LBP), OpenCV, and NumPy, achieving a 17% runtime improvement.",
      "Prototyped and evaluated CNN deep learning models (TensorFlow, PyTorch, Keras) using transfer learning on Corel-250 benchmark datasets, automating evaluation via k-NN and SVM models.",
      "Developed distributed LLM evaluation pipelines using Python, FastAPI, and AWS Lambda, orchestrating GPU clusters processing 5,000+ daily evaluations.",
      "Benchmarked Claude Sonnet 3.5, GPT-4, and Amazon Nova for reasoning alignment, implementing parallel task orchestration to reduce latency by 80%."
    ],
    skills: ["Computer Vision", "OpenCV", "TensorFlow", "PyTorch", "AWS Lambda", "FastAPI", "LLM Evaluation", "GPU Clusters", "k-NN / SVM"]
  },
  {
    role: "Analytics Specialist Intern",
    company: "Outlook Publishing Group",
    period: "May 2024 - July 2024 (3 mos)",
    location: "Bengaluru, India",
    description: [
      "Analyzed sales and customer datasets of 20,000+ records using Python and SQL to forecast sales trends, improving prediction accuracy by 18%.",
      "Performed exploratory data analysis and KPI modeling, improving campaign efficiency by 15% and customer retention by 12%.",
      "Automated ETL pipelines and analytical workflows, cutting reporting turnaround time from 2 hours to 30 minutes."
    ],
    skills: ["Python", "SQL", "Power BI", "Tableau", "EDA", "ETL Automation"]
  }
];

export const leadership = [
  {
    role: "General Secretary",
    org: "NSS, NIT Warangal (2023)",
    impact: "Directed 6+ large-scale community initiatives including Blood Donation Camp (350+ units) and Unity Run (500 participants), engaging 1,200+ students."
  },
  {
    role: "Head of Logistics",
    org: "SpringSpree, NIT Warangal (2023)",
    impact: "Managed logistics for South India's 2nd-largest cultural fest (5,000+ attendees), coordinating 100+ volunteers and 20+ vendors, cutting setup time by 2 hrs/day."
  }
];

export const certifications = [
  { title: "Walmart USA - Advanced Software Engineering Simulation", issuer: "Forage" },
  { title: "Cognizant - Artificial Intelligence Job Simulation", issuer: "Forage" },
  { title: "Artificial Intelligence Virtual Experience Program", issuer: "Tata / Forage" },
  { title: "Data Visualisation: Empowering Business with Insights", issuer: "Tata / Forage" }
];
