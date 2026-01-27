import type { Job, SkillCategory, BlogPost, TradeOffDataPoint, Project, Session, Innovation } from '@/types';

export const EMAIL = "divyasonara7105@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/divya-sonara-81218619a/";
export const CV_PATH = "/DIVYA_SONARA_CV.pdf";
export const GITHUB = "https://github.com/divyasonara7";
export const LOCATION = "Milan, Italy";

export const RESUME_SUMMARY = `Senior Frontend Engineer with 4+ years engineering scalable applications across both React and Vue ecosystems. I specialize in System Design, complex state management, and 'Build vs Buy' architectural strategy. I leverage advanced AI-assisted development workflows to accelerate delivery cycles and ensure high-quality, maintainable code standards.`;

export const PROJECTS: Project[] = [
  {
    title: "CENTX Survey Platform",
    role: "Sr. Software Engineer",
    description: "Enterprise survey platform handling 100K+ concurrent respondents. Built scalable survey builder with drag-drop interface, skip logic branching, and real-time response analytics leveraging AI-assisted development.",
    tech: ["React", "React Query", "TypeScript", "Vite", "Tailwind"],
    features: [
      "AI Development: Leveraged AI workflows for rapid feature development and code optimization",
      "Logic Engine: Skip logic & branching with visual flow editor for conditional survey paths",
      "Performance: 40% faster LCP through intelligent code-splitting, lazy loading & virtualized lists"
    ]
  },
  {
    title: "DATAHASH",
    role: "Sr. Software Engineer",
    description: "Privacy-First Data Activation Platform with 150+ OAuth connectors. Led 'Build vs Buy' analysis resulting in custom Config-Driven form system with schema-based architecture.",
    tech: ["React", "TypeScript", "React Query", "Tailwind"],
    features: [
      "Config-Driven UI: Schema-driven form generator with Factory Pattern and Plugin Architecture",
      "System Design: JSON-based configuration enabling non-engineers to build forms safely",
      "Integration: Loosely-coupled connector system with Adapter Pattern for 150+ integrations"
    ]
  },
  {
    title: "WONDR Discovery",
    role: "Frontend Developer",
    description: "Social discovery platform with SSR for SEO optimization. Implemented real-time features with WebSocket and optimized video streaming using lazy loading strategies.",
    tech: ["Vue.js", "Nuxt.js", "Vuex", "SSR"],
    features: [
      "Rendering: SSR/SSG hybrid for optimal SEO and performance",
      "Real-time: WebSocket-based notification system with reconnection logic",
      "Media: Progressive video loading with intersection observer"
    ]
  },
  {
    title: "TraderSync Analytics",
    role: "Frontend Developer",
    description: "High-frequency trading platform with real-time data visualization at 60fps. Applied performance optimization patterns for handling rapid data updates.",
    tech: ["Vue.js", "Quasar", "D3.js", "WebSocket"],
    features: [
      "Performance: Virtual scrolling & requestAnimationFrame for 60fps updates",
      "Visualization: Custom D3.js charting with Canvas fallback for large datasets",
      "Reliability: Exponential backoff WebSocket reconnection strategy"
    ]
  },
  {
    title: "SEO Auditor Tool",
    role: "Frontend Developer",
    description: "Client-side SEO auditing tool with offline-first architecture. Used Web Workers for heavy computation without blocking UI thread.",
    tech: ["Vue.js", "Quasar", "Web Workers", "IndexedDB"],
    features: [
      "Concurrency: Web Workers for CPU-intensive crawl processing",
      "Offline-First: IndexedDB caching with service worker sync",
      "Visualization: Force-directed graph for site structure mapping"
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "System Design & Architecture",
    skills: ["Config-driven UI", "Micro-frontends", "State Machine Modeling", "Build vs Buy Analysis", "Component Abstraction", "Monorepo Architecture"]
  },
  {
    category: "Frontend Ecosystems",
    skills: ["React (Hooks, Context)", "Vue 3 (Composition API)", "Next.js & Nuxt.js", "TypeScript (Advanced)", "React Query / Pinia", "Node.js", "GraphQL"]
  },
  {
    category: "Project Leadership",
    skills: ["Requirements Analysis", "Technical Planning & Estimation", "Stakeholder Communication", "Cross-functional Collaboration", "Sprint Planning & Delivery"]
  },
  {
    category: "AI & CodeGen Workflows",
    skills: ["AI-Assisted Development", "Prompt Engineering", "LLM Integration", "Automated Refactoring", "Cursor / Copilot Workflows"]
  },
  {
    category: "Performance & Build",
    skills: ["Vite / Webpack", "CI/CD Pipelines", "LCP/CLS Optimization", "Server-Side Rendering (SSR)", "Lazy Loading Strategies"]
  },
  {
    category: "Languages",
    skills: ["English (Professional)", "Italian (Basic)", "Hindi (Native)", "Gujarati (Native)"]
  }
];

// Start date for calculating real-time experience (includes internship)
export const CAREER_START_DATE = new Date('2021-01-01');

export const EXPERIENCE: Job[] = [
  {
    id: "simform-sr",
    role: "Sr. Software Engineer",
    company: "Simform Solutions",
    period: "Jan 2025 – Present",
    location: "Hybrid - Ahmedabad, India",
    description: "Leading frontend architecture for CENTX, a scalable enterprise survey platform handling 100K+ concurrent respondents.",
    technologies: ["React", "React Query", "TypeScript", "Vite"],
    highlights: [
      "Architected enterprise survey builder with drag-drop interface, skip logic branching, and real-time analytics for 100K+ concurrent users.",
      "Leveraged AI-assisted development and problem-solving to accelerate feature delivery and optimize code quality with intelligent refactoring.",
      "Achieved 40% faster LCP through performance optimization strategies including code-splitting, lazy loading, and virtualized lists."
    ]
  },
  {
    id: "simform-datahash",
    role: "Software Engineer",
    company: "Simform Solutions",
    period: "Oct 2022 – Jan 2025",
    location: "Hybrid - Ahmedabad, India",
    description: "Led frontend development for DATAHASH, a Privacy-First Data Activation Platform with 150+ OAuth connectors.",
    technologies: ["React", "TypeScript", "React Query", "Tailwind"],
    highlights: [
      "Led 'Build vs Buy' analysis and architected Config-Driven form system using JSON schemas for 150+ OAuth connectors with cross-field dependencies.",
      "Designed Plugin Architecture with Factory Pattern and Dependency Injection, enabling non-engineers to build complex forms via configuration.",
      "Saved 75% development time after 50+ forms; mentored junior developers on React best practices and architectural patterns."
    ]
  },
  {
    id: "improwised",
    role: "Software Engineer",
    company: "Improwised Technologies",
    period: "July 2021 – Oct 2022",
    location: "Onsite - Rajkot, India",
    description: "Developed high-performance trading platform and SEO auditing tool with real-time data visualization and offline-first architecture.",
    technologies: ["Vue.js", "Quasar", "Go", "PostgreSQL", "D3.js", "WebSocket"],
    highlights: [
      "Built TraderSync analytics platform maintaining 60fps real-time data visualization using Virtual DOM optimization and custom D3.js charting.",
      "Engineered SEO Auditor tool with Web Worker architecture for CPU-intensive client-side crawling and IndexedDB caching for offline-first functionality.",
      "Implemented force-directed graph visualization for site structure mapping and exponential backoff WebSocket reconnection strategy."
    ]
  },
  {
    id: "improwised-intern",
    role: "Software Engineering Intern",
    company: "Improwised Technologies",
    period: "Jan 2021 – June 2021",
    location: "Onsite - Rajkot, India",
    description: "Gained hands-on experience in full-stack development, contributing to production applications with Go backend and Vue.js frontend.",
    technologies: ["Go", "Vue.js", "JavaScript", "REST APIs"],
    highlights: [
      "Developed REST API endpoints using Go with RESTful architecture for internal tooling applications.",
      "Built responsive frontend components with Vue.js and JavaScript, shipping production-ready features.",
      "Collaborated in agile sprints with code reviews, technical documentation, and sprint planning."
    ]
  }
];

export const BLOGS: BlogPost[] = [
  {
    title: "Building the Future with Quasar",
    platform: "Medium",
    url: "https://medium.com/simform-engineering/building-the-future-with-quasar-a-vue-js-framework-revolution-74b09723a91d",
    summary: "A deep dive into the Quasar framework for building cross-platform Vue applications."
  },
  {
    title: "Vue.js Testing with Cypress",
    platform: "Medium",
    url: "https://medium.com/simform-engineering/vue-js-testing-with-cypress-a-beginners-handbook-93c793ba74ec",
    summary: "A beginner's handbook for implementing E2E testing in Vue applications using Cypress."
  }
];

export const SESSIONS: Session[] = [
  {
    title: "Enhancing Code Quality in React",
    type: "Workshop",
    platform: "Simform Engineering",
    description: "In-depth workshop covering advanced React patterns for enterprise applications. Trained 30+ engineers on Container-Presenter, Compound Components, Custom Hooks, and performance optimization strategies.",
    slidesUrl: "/Enhancing Code Quality in React.pdf",
    topics: [
      "Container-Presenter Pattern",
      "Compound Components",
      "Custom Hooks & Provider Pattern",
      "State Reducer & Error Boundaries"
    ],
    impact: "Trained 30+ engineers",
    icon: "code"
  },
  {
    title: "Automate Workflows with n8n",
    type: "Tech Talk",
    platform: "Team Knowledge Session",
    description: "Demonstrated how to build powerful automation workflows using n8n, connecting multiple services without code. Covered webhook triggers, API integrations, and conditional logic for complex automation scenarios.",
    link: "https://www.notion.so/Automate-Workflows-with-n8n-2b8974b07bd180e4a176ff3c1b51331a",
    topics: ["n8n Automation", "No-Code Workflows", "API Integration", "Webhook Triggers"],
    impact: "Team adoption of n8n",
    icon: "workflow"
  },
  {
    title: "GitHub Speckit Deep Dive",
    type: "Demo",
    platform: "Innovation Session",
    description: "Explored GitHub's Speckit framework for building AI-powered code assistants. Demonstrated how to create custom agents that understand repository context and can assist with code review, documentation, and refactoring.",
    slidesUrl: "/github-speckit-workflow.pdf",
    topics: ["GitHub Speckit", "AI Code Assistants", "LLM Integration", "Developer Tooling"],
    impact: "Pioneered AI workflow adoption",
    icon: "robot"
  },
  {
    title: "Async State with Pinia Colada",
    type: "Tech Talk",
    platform: "Frontend Community",
    link: "https://gamma.app/docs/Async-State-Management-with-Pinia-Colada-3dzu5cfdqalocbi",
    description: "Deep dive into efficient async state handling in Vue applications using Pinia Colada, focusing on caching, deduplication, and optimistic updates for better UX.",
    topics: ["Async State", "Pinia Colada", "Caching Strategies", "Vue 3 Ecosystem"],
    impact: "Improved data fetching patterns",
    icon: "code"
  },
  {
    title: "Introduction to Quasar Framework",
    type: "Tech Talk",
    platform: "Simform Engineering",
    link: "https://divyasonara7.github.io/introduction-to-quasar/",
    description: "Comprehensive presentation on Quasar framework for building cross-platform Vue applications. Covered component library, CLI tooling, and strategies for building desktop, mobile, and web apps from a single codebase.",
    topics: ["Quasar Framework", "Vue.js", "Cross-Platform Development", "Component Library"],
    impact: "Team adoption for new projects",
    icon: "presentation"
  }
];

export const INNOVATIONS: Innovation[] = [
  {
    title: "Requirements Engineering Agents",
    category: "AI Workflow",
    description: "Developed custom Tradeoff Analysis and Requirement Clarification agents that run before code generation. These agents systematically analyze requirements, identify ambiguities, evaluate architectural tradeoffs, and generate clarifying questions—eliminating wasted iterations from vague prompts and preventing unexpected behavior in generated code.",
    impact: "60% fewer prompt iterations",
    tech: ["LLM Agents", "Prompt Engineering", "System Design", "RAG"],
    icon: "sparkles"
  },
  {
    title: "AI Bug Triage Agent",
    category: "AI Workflow",
    description: "Intelligent bug triage system using GitHub Speckit that automatically categorizes issues by severity (Critical, High, Medium, Low) and type (Security, UI, Documentation). Analyzes issue context and generates fix PRs automatically.",
    impact: "Reduced manual triage by 70%",
    tech: ["GitHub Speckit", "LLM", "GitHub Actions", "TypeScript"],
    icon: "robot"
  },
  {
    title: "n8n Workflow Automation",
    category: "Automation",
    description: "Automated workflows for team productivity: Slack notifications for PR reviews, automated deployment pipelines, and cross-platform data sync between tools.",
    impact: "Saved 10+ hours/week",
    tech: ["n8n", "Webhooks", "REST APIs", "Node.js"],
    icon: "workflow"
  },
  {
    title: "AI-Assisted Code Review",
    category: "AI Workflow",
    description: "LLM-powered code review integrated into CI/CD. Custom prompts analyze PRs for security vulnerabilities, performance bottlenecks, and code smells, providing actionable feedback before human review.",
    impact: "40% more issues caught pre-review",
    tech: ["Cursor AI", "GitHub Copilot", "Custom Prompts", "CI/CD"],
    icon: "sparkles"
  }
];

// Data for the Case Study Chart
// 1 = Low/Poor, 5 = High/Excellent (context dependent)
export const TRADE_OFF_DATA: TradeOffDataPoint[] = [
  { subject: 'Time to Market', ExistingSolution: 5, CustomSystem: 2, fullMark: 5 },
  { subject: 'Cost Efficiency (Long Term)', ExistingSolution: 3, CustomSystem: 4, fullMark: 5 },
  { subject: 'Control', ExistingSolution: 2, CustomSystem: 5, fullMark: 5 },
  { subject: 'Customizability', ExistingSolution: 2, CustomSystem: 5, fullMark: 5 },
  { subject: 'Integrability', ExistingSolution: 3, CustomSystem: 5, fullMark: 5 },
];