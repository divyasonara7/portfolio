import React from 'react';
import { Header, Footer, Hero, CaseStudy, Projects, Experience, SkillsAndBlogs } from '@/components';

/**
 * Main Application Component
 * Composes the portfolio from layout and section components
 */
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-blue-500/30 selection:text-blue-200">
      <Header />

      <main className="relative">
        <Hero />
        <CaseStudy />
        <Projects />
        <div id="experience">
          <Experience />
        </div>
        <div id="skills">
          <SkillsAndBlogs />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;