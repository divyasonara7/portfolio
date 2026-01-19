import React from 'react';
import { SESSIONS, INNOVATIONS } from '@/constants';
import {
    ExternalLink,
    Download,
    Bot,
    Workflow,
    Sparkles,
    Code2,
    Presentation,
    Zap,
    Users,
    Github
} from 'lucide-react';
import { SectionHeader, Badge } from '@/components/ui';

const iconMap = {
    code: Code2,
    workflow: Workflow,
    robot: Bot,
    presentation: Presentation,
    sparkles: Sparkles,
    github: Github,
};

/**
 * Innovation Lab Section - Showcases workshops, talks, and AI/automation innovations
 * Features interactive cards with slides downloads and impact metrics
 */
const InnovationLab: React.FC = () => {
    return (
        <section id="innovation" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto">
            <SectionHeader number="03" title="Innovation Lab" className="mb-4" />
            <p className="text-slate-400 mb-12 max-w-3xl">
                Beyond shipping features, I actively contribute to team growth through workshops,
                explore cutting-edge AI workflows, and build automation tools that multiply productivity.
            </p>

            {/* Workshops & Talks Grid */}
            <div className="mb-16">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <Presentation size={20} className="text-blue-500" />
                    Workshops & Tech Talks
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SESSIONS.map((session) => {
                        const IconComponent = iconMap[session.icon || 'presentation'];
                        return (
                            <div
                                key={session.title}
                                className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/40 border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300"
                            >
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

                                {/* Header with Type Badge */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-500/10 rounded-lg">
                                            <IconComponent size={20} className="text-blue-400" />
                                        </div>
                                        <div>
                                            <span className="text-xs font-mono text-blue-400 px-2 py-0.5 rounded bg-blue-500/10">
                                                {session.type}
                                            </span>
                                            <p className="text-xs text-slate-500 mt-1">{session.platform}</p>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex items-center gap-2">
                                        {session.slidesUrl && (
                                            <a
                                                href={session.slidesUrl}
                                                download
                                                className="p-2 bg-slate-800 hover:bg-blue-500/20 rounded-lg transition-colors group/btn"
                                                title="Download Slides"
                                            >
                                                <Download size={14} className="text-slate-400 group-hover/btn:text-blue-400" />
                                            </a>
                                        )}
                                        {session.link && (
                                            <a
                                                href={session.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="p-2 bg-slate-800 hover:bg-blue-500/20 rounded-lg transition-colors group/btn"
                                                title="View Content"
                                            >
                                                <ExternalLink size={14} className="text-slate-400 group-hover/btn:text-blue-400" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-100">
                                    {session.title}
                                </h4>
                                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                                    {session.description}
                                </p>

                                {/* Topics */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {session.topics.slice(0, 3).map((topic) => (
                                        <Badge key={topic} variant="topic">{topic}</Badge>
                                    ))}
                                    {session.topics.length > 3 && (
                                        <span className="text-xs text-slate-500">+{session.topics.length - 3} more</span>
                                    )}
                                </div>

                                {/* Impact Metric */}
                                {session.impact && (
                                    <div className="flex items-center gap-2 pt-3 border-t border-slate-700/50">
                                        <Users size={14} className="text-green-400" />
                                        <span className="text-xs text-green-400 font-medium">{session.impact}</span>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* AI & Automation Innovations */}
            <div>
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <Bot size={20} className="text-purple-500" />
                    AI & Automation Innovations
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {INNOVATIONS.map((innovation) => {
                        const IconComponent = iconMap[innovation.icon];
                        return (
                            <div
                                key={innovation.title}
                                className="group relative bg-gradient-to-br from-purple-900/20 to-slate-900/60 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300"
                            >
                                {/* Animated gradient border effect */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm -z-10" />

                                {/* Header */}
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="p-2.5 bg-purple-500/10 rounded-xl border border-purple-500/20">
                                        <IconComponent size={24} className="text-purple-400" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-mono text-purple-400 px-2 py-0.5 rounded bg-purple-500/10">
                                            {innovation.category}
                                        </span>
                                    </div>
                                </div>

                                <h4 className="text-lg font-bold text-white mb-2">{innovation.title}</h4>
                                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                                    {innovation.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {innovation.tech.map((tech) => (
                                        <Badge key={tech} variant="tech" showIcon>{tech}</Badge>
                                    ))}
                                </div>

                                {/* Impact */}
                                <div className="flex items-center gap-2 pt-3 border-t border-purple-500/20">
                                    <Zap size={14} className="text-yellow-400" />
                                    <span className="text-xs text-yellow-400 font-medium">{innovation.impact}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default InnovationLab;
