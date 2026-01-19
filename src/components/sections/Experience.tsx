import React from 'react';
import { EXPERIENCE } from '@/constants';
import { SectionHeader, Badge } from '@/components/ui';

/**
 * Experience section - Professional timeline
 * Features vertical timeline with hover effects
 */
const Experience: React.FC = () => {
    return (
        <section className="py-20 px-6 sm:px-12 max-w-5xl mx-auto">
            <SectionHeader number="04" title="Professional Experience" />

            <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
                {EXPERIENCE.map((job) => (
                    <div key={job.id} className="relative pl-8 md:pl-12 group">
                        {/* Timeline Dot */}
                        <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-slate-600 border border-slate-900 group-hover:bg-blue-500 transition-colors" />

                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                {job.role}
                            </h3>
                            <span className="text-sm font-mono text-slate-500">{job.period}</span>
                        </div>

                        {/* Company Info */}
                        <div className="mb-4">
                            <span className="text-slate-300 font-medium">{job.company}</span>
                            <span className="text-slate-500 text-sm mx-2">•</span>
                            <span className="text-slate-500 text-sm">{job.location}</span>
                        </div>

                        {/* Description */}
                        <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                            {job.description}
                        </p>

                        {/* Highlights */}
                        <ul className="space-y-2 mb-6">
                            {job.highlights.map((highlight, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm text-slate-400">
                                    <span className="mt-1.5 h-1 w-1 rounded-full bg-blue-500 shrink-0" />
                                    {highlight}
                                </li>
                            ))}
                        </ul>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech) => (
                                <Badge key={tech}>{tech}</Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
