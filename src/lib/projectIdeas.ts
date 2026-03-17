export type ProjectCategory = {
  id: string;
  name: string;
  description: string;
  accent?: string;
};

export type ProjectIdea = {
  id: string;
  categoryId: string;
  title: string;
  summary: string;
  details: string;
  implementationNotes: string;
  techStack: string[];
  githubUrl?: string;
  resources?: Array<{ label: string; url: string }>;
};

export const projectCategories: ProjectCategory[] = [
  {
    id: "all",
    name: "All",
    description: "Browse every idea across categories.",
  },
  {
    id: "ml",
    name: "Machine Learning",
    description: "Build models, pipelines, and intelligent experiences.",
    accent: "emerald",
  },
  {
    id: "mern",
    name: "MERN Stack",
    description: "Full-stack JavaScript apps with MongoDB, Express, React, and Node.",
    accent: "cyan",
  },
  {
    id: "devops",
    name: "DevOps",
    description: "CI/CD, infrastructure automation, monitoring, and reliability.",
    accent: "amber",
  },
  {
    id: "mlops",
    name: "MLOps",
    description: "End-to-end ML delivery with experiments, model ops, and monitoring.",
    accent: "teal",
  },
  {
    id: "system",
    name: "System Design",
    description: "Design scalable, resilient system architectures and APIs.",
    accent: "violet",
  },
];

export const projectIdeas: ProjectIdea[] = [
  {
    id: "ml-1",
    categoryId: "ml",
    title: "Smart Resume Classifier",
    summary: "Build a classifier that matches resumes to job descriptions using NLP.",
    details:
      "Create a system that ingests resumes and job posts, extracts key skills, experience, and job titles, and then ranks matches. Include an interactive UI where users can upload files and see match scores.",
    implementationNotes:
      "Use embeddings for semantic similarity (e.g., SBERT or OpenAI embeddings), a simple vector store (SQLite/FAISS), and a lightweight backend API for processing. Add a dashboard for reviewing matching candidates and explainability data.",
    techStack: ["Python", "FastAPI", "Pandas", "scikit-learn", "Transformers", "React"],
    githubUrl: "https://github.com/example/smart-resume-classifier",
    resources: [
      { label: "Hugging Face Sentence-BERT", url: "https://huggingface.co/sentence-transformers" },
      { label: "FAISS Vector Search", url: "https://github.com/facebookresearch/faiss" },
    ],
  },
  {
    id: "ml-2",
    categoryId: "ml",
    title: "Image Classification Playground",
    summary:
      "Build an easy-to-use web app where users can upload images to classify with a pretrained model and tweak fine-tuning options.",
    details:
      "Host a frontend that uploads images to an API endpoint; the backend runs inference against a model like ResNet or MobileNet. Include an experiment mode for training on a small user dataset with transfer learning and display training curves.",
    implementationNotes:
      "Use TensorFlow or PyTorch for model training, and store datasets in cloud storage (S3/GCS/local). Add model versioning and sample input/output validation.",
    techStack: ["Python", "FastAPI", "PyTorch", "React", "Docker"],
    resources: [
      { label: "PyTorch Transfer Learning Tutorial", url: "https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html" },
      { label: "Weights & Biases", url: "https://wandb.ai/" },
    ],
  },
  {
    id: "mern-1",
    categoryId: "mern",
    title: "Community Q&A Platform",
    summary:
      "A Reddit-like discussion platform with voting, tags, and threaded comments built in the MERN stack.",
    details:
      "Implement authentication (JWT), post creation, voting, tagging, and real-time notifications. Include search, moderation tools, and a mobile-friendly UI.",
    implementationNotes:
      "Use MongoDB for data storage, Redis for caching and rate limiting, and WebSockets for live updates. Add an admin dashboard for managing reports.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    githubUrl: "https://github.com/example/mern-qa-platform",
    resources: [
      { label: "MongoDB Atlas Free Tier", url: "https://www.mongodb.com/cloud/atlas" },
      { label: "MERN Stack Tutorial", url: "https://www.mongodb.com/mern-stack" },
    ],
  },
  {
    id: "mern-2",
    categoryId: "mern",
    title: "Team Productivity Dashboard",
    summary:
      "A dashboard that aggregates analytics from project management tools (e.g. GitHub, Jira) and visualizes team health.",
    details:
      "Build connectors to pull issues, PR activity, and sprint velocity. Create dashboards for burndown charts, cycle time, and improvement suggestions.",
    implementationNotes:
      "Use serverless functions or cron jobs to periodically sync data into a database. Provide role-based access and exportable reports.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    githubUrl: "https://github.com/example/team-productivity-dashboard",
  },
  {
    id: "devops-1",
    categoryId: "devops",
    title: "CI/CD Pipeline as Code",
    summary:
      "Create reference pipelines for popular CI/CD providers that build, test, and deploy a full-stack app automatically.",
    details:
      "Provide examples for GitHub Actions, GitLab CI, and Azure DevOps. Include infrastructure provisioning, linting, unit tests, and deployment to a container platform.",
    implementationNotes:
      "Use Terraform for infrastructure, Docker for container builds, and include environment promotion (dev -> staging -> prod) with approvals.",
    techStack: ["Terraform", "Docker", "GitHub Actions", "Kubernetes", "Helm"],
    githubUrl: "https://github.com/example/cicd-pipeline-as-code",
  },
  {
    id: "devops-2",
    categoryId: "devops",
    title: "Observability Playground",
    summary:
      "Create end-to-end observability for a microservice demo with metrics, tracing, and alerts.",
    details:
      "Instrument services with OpenTelemetry, send telemetry to a backend like Prometheus/Jaeger, and build dashboards with Grafana. Add alert rules and incident simulation.",
    implementationNotes:
      "Deploy a sample microservices app locally (Docker Compose) or on Kubernetes. Use synthetic transactions to generate load and exercise alerts.",
    techStack: ["OpenTelemetry", "Prometheus", "Grafana", "Docker", "Kubernetes"],
    githubUrl: "https://github.com/example/observability-playground",
  },
  {
    id: "mlops-1",
    categoryId: "mlops",
    title: "Model Versioning Platform",
    summary:
      "Build a lightweight platform to track model versions, datasets, and deployments.",
    details:
      "Provide CRUD for model metadata, dataset lineage, and evaluation metrics. Include a deployment dashboard showing active models and performance.",
    implementationNotes:
      "Use a backend API with a database, and integrate with model registries (MLflow, DVC) and a simple model serving endpoint.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "MLflow", "React"],
    githubUrl: "https://github.com/example/model-versioning-platform",
  },
  {
    id: "mlops-2",
    categoryId: "mlops",
    title: "Automated Retraining Pipeline",
    summary:
      "Create an automated pipeline that retrains an ML model when performance drops below a threshold.",
    details:
      "Monitor model accuracy over time, trigger retraining jobs, validate the new model, and promote it to production automatically.",
    implementationNotes:
      "Use orchestrators like Airflow or Prefect, store artifacts in cloud storage, and integrate with CI/CD for model promotion.",
    techStack: ["Airflow", "Python", "S3", "MLflow", "Docker"],
    githubUrl: "https://github.com/example/automated-retraining-pipeline",
  },
  {
    id: "system-1",
    categoryId: "system",
    title: "Scalable URL Shortener",
    summary:
      "Design and build a URL shortener that can handle millions of redirects per day.",
    details:
      "Focus on partitioning, caching, rate limiting, and analytics. Provide a design document and a working prototype.",
    implementationNotes:
      "Use a key-generation strategy (hashing / base62), a caching layer (Redis), and a datastore with high read throughput (Cassandra or DynamoDB).", 
    techStack: ["Node.js", "Redis", "PostgreSQL", "Docker", "TypeScript"],
    githubUrl: "https://github.com/example/scalable-url-shortener",
    resources: [
      { label: "Design a URL shortener (educative) ", url: "https://www.educative.io/courses/grokking-the-system-design-interview" },
    ],
  },
  {
    id: "system-2",
    categoryId: "system",
    title: "Realtime Collaborative Editor",
    summary:
      "Build a Google Docs-like editor with real-time collaboration and conflict resolution.",
    details:
      "Implement operational transforms or CRDTs for concurrent edits. Add presence indicators and live cursors.",
    implementationNotes:
      "Use WebSockets or WebRTC for sync, and consider using existing libraries like Yjs or ShareDB. Provide a demo UI with rich text formatting.",
    techStack: ["React", "Node.js", "WebSocket", "Yjs", "TypeScript"],
    githubUrl: "https://github.com/example/realtime-collaborative-editor",
  },
];
