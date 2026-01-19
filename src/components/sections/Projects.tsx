import React from 'react';
import { PROJECTS } from '@/constants';
import { Layers, Zap, ExternalLink, Github, Lock, Globe } from 'lucide-react';
import { SectionHeader, Badge, Card } from '@/components/ui';

/**
 * Projects section - Featured project showcase
 * Uses Card primitive with project-specific content
 */
const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto">
            <SectionHeader number="02" title="Featured Projects" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {PROJECTS.map((project, index) => (
                    <Card key={index}>
                        {/* Icon Header */}
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-blue-900/20 group-hover:text-blue-400 transition-colors">
                                <Layers size={24} className="text-slate-400 group-hover:text-blue-400" />
                            </div>
                        </div>

                        {/* Project Info */}
                        <div className="mb-4">
                            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-100 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-sm font-mono text-blue-400">{project.role}</p>
                        </div>

                        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                            {project.description}
                        </p>

                        <div className="space-y-6">
                            {/* Key Features */}
                            <ul className="space-y-2">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                                        <Zap size={12} className="mt-0.5 text-blue-500 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <Badge key={tech} variant="tech" showIcon>
                                        {tech}
                                    </Badge>
                                ))}
                            </div>

                            {/* Action Links */}
                            <div className="flex flex-wrap items-center gap-4 pt-5 border-t border-slate-800/60">
                                {/* GitHub - Client Proprietary */}
                                <div
                                    className="flex items-center gap-2 px-3 py-2 bg-slate-800/30 rounded-lg border border-slate-800 text-slate-600 text-xs font-medium cursor-not-allowed select-none transition-colors"
                                    title="Source code is proprietary property of the client"
                                >
                                    <Github size={14} />
                                    <span>Private Repo</span>
                                    <Lock size={12} className="text-slate-600" />
                                </div>

                                {/* Live Demo */}
                                {project.link ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 px-3 py-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-medium rounded-lg transition-colors"
                                    >
                                        <Globe size={14} />
                                        <span>Live Demo</span>
                                        <ExternalLink size={12} />
                                    </a>
                                ) : (
                                    <div
                                        className="flex items-center gap-2 px-3 py-2 bg-slate-800/30 rounded-lg border border-slate-800 text-slate-600 text-xs font-medium cursor-not-allowed select-none"
                                        title="Access restricted to internal client network"
                                    >
                                        <Globe size={14} />
                                        <span>Client Only / Internal</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Projects;
