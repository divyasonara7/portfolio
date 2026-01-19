import type { Job, SkillCategory, BlogPost, TradeOffDataPoint, Project, Session } from '@/types';

export const EMAIL = "divyasonara7105@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/divya-sonara-81218619a/";
export const LOCATION = "Milan, Italy";

export const RESUME_SUMMARY = `Senior Frontend Architect & System Design Expert with 4+ years of experience building scalable applications across both React and Vue ecosystems. I specialize in configuration-driven UI, complex state management, and 'Build vs Buy' architectural strategy. I leverage advanced CodeGen AI workflows to accelerate development cycles and ensure high-quality, maintainable code standards.`;

export const PROJECTS: Project[] = [
  {
    title: "CENTX",
    role: "Lead Frontend Architect",
    description: "A scalable, enterprise-grade platform for configurable surveys and high-volume respondent workflows. Designed to handle complex logic and massive concurrent user loads.",
    tech: ["React", "React Query", "TypeScript", "Vite"],
    features: [
      "Architected a configuration-driven dynamic form engine",
      "Integrated React Query for robust server-state management",
      "Optimized bundle size via code-splitting for 40% faster LCP"
    ]
  },
  {
    title: "DATAHASH",
    role: "Frontend Engineer",
    description: "Privacy-First Data Activation Platform enabling businesses to activate first-party data across advertising platforms through server-side tracking.",
    tech: ["Vue 3", "TypeScript", "Pinia", "PrimeVue"],
    features: [
      "Built schema-based form generator for 150+ connectors",
      "Designed reusable components for data onboarding",
      "Implemented privacy-compliant server-side event setups"
    ]
  },
  {
    title: "WONDR",
    role: "Frontend Developer",
    description: "Discovery platform connecting mentors and learners based on shared interests, enabling knowledge exchange through interactive posts and video content.",
    tech: ["Vue.js", "Nuxt.js", "Vuex"],
    features: [
      "Managed application state for complex navigation flows",
      "Implemented log auditing for system transparency",
      "Optimized video content delivery and rendering"
    ]
  },
  {
    title: "TraderSync",
    role: "Frontend Developer",
    description: "Trading analytics platform that helps traders track trades, analyze performance, and optimize strategies through data-driven insights.",
    tech: ["Vue.js", "Quasar", "Go"],
    features: [
      "Developed high-performance trading data dashboards",
      "Optimized HTTP communication for real-time analytics",
      "Built responsive interfaces for complex financial data"
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
    skills: ["React (Hooks, Context)", "Vue 3 (Composition API)", "Next.js & Nuxt.js", "TypeScript (Advanced)", "React Query / Pinia"]
  },
  {
    category: "AI & CodeGen Workflows",
    skills: ["AI-Assisted Development", "Prompt Engineering", "LLM Integration", "Automated Refactoring", "Cursor / Copilot Workflows"]
  },
  {
    category: "Performance & Build",
    skills: ["Vite / Webpack", "CI/CD Pipelines", "LCP/CLS Optimization", "Server-Side Rendering (SSR)", "Lazy Loading Strategies"]
  }
];

export const EXPERIENCE: Job[] = [
  {
    id: "simform-sr",
    role: "Sr. Software Engineer (React Focus)",
    company: "Simform Solutions",
    period: "Jan 2025 – Present",
    location: "Remote",
    description: "Leading frontend architecture for CENTX, utilizing React to build a high-performance survey platform.",
    technologies: ["React", "React Query", "TypeScript", "Vite"],
    highlights: [
      "Architected a scalable, JSON-driven dynamic form engine to decouple logic from UI.",
      "Implemented strict System Design patterns to ensure modularity and ease of testing.",
      "Optimized production performance using code-splitting and advanced caching strategies."
    ]
  },
  {
    id: "simform-datahash",
    role: "Software Engineer (Vue 3 Focus)",
    company: "Simform Solutions",
    period: "Oct 2022 – Jan 2025",
    location: "Remote",
    description: "Core contributor to DATAHASH, leveraging Vue 3 for a complex data activation dashboard.",
    technologies: ["Vue 3", "TypeScript", "Pinia", "Tailwind"],
    highlights: [
      "Conducted 'Build vs Buy' analysis, resulting in a custom schema-based form system.",
      "Designed reusable component architecture handling 150+ third-party integrations.",
      "Collaborated on backend API design to ensure efficient frontend data consumption."
    ]
  },
  {
    id: "improwised",
    role: "Software Engineer",
    company: "Improwised Technologies",
    period: "July 2021 – Oct 2022",
    location: "Rajkot, India",
    description: "Developed real-time financial dashboards and SEO tools using Vue.js and Quasar.",
    technologies: ["Vue.js", "Quasar", "Go", "PostgreSQL"],
    highlights: [
      "Built high-frequency data visualizations with optimized rendering cycles.",
      "Engineered a heavy-client-side processing architecture for SEO auditing tools."
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
    title: "Advanced React Design Patterns",
    type: "Workshop",
    platform: "Internal Simform Training",
    description: "Comprehensive training session on writing clean, scalable React code. Covered advanced patterns like Container-Presenter, Compound Components, and Custom Hooks to reduce code debt.",
    topics: [
      "Container-Presenter & Compound Components",
      "Custom Hooks & Provider Pattern",
      "State Reducer & Pub/Sub",
      "Performance & Error Boundaries"
    ]
  },
  {
    title: "Async State with Pinia Colada",
    type: "Tech Talk",
    platform: "Frontend Community",
    link: "https://gamma.app/docs/Async-State-Management-with-Pinia-Colada-3dzu5cfdqalocbi",
    description: "Deep dive into efficient async state handling in Vue applications using Pinia Colada, focusing on caching, deduplication, and efficient data fetching strategies.",
    topics: ["Async State", "Pinia Colada", "Caching Strategies", "Vue Ecosystem"]
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