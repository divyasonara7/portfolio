import React from 'react';
import { SKILLS, BLOGS, SESSIONS } from '@/constants';
import { ExternalLink, BookOpen, Presentation } from 'lucide-react';
import { SectionHeader, Badge } from '@/components/ui';

/**
 * Skills and Knowledge Sharing section
 * Split layout: Skills grid on left, Blogs and Talks on right
 */
const SkillsAndBlogs: React.FC = () => {
    return (
        <section className="py-20 px-6 sm:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Skills Section */}
            <div>
                <SectionHeader number="03" title="Technical Arsenal" className="mb-8" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {SKILLS.map((category) => (
                        <div key={category.category} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800/50">
                            <h3 className="text-blue-400 font-medium mb-4">{category.category}</h3>
                            <ul className="space-y-2">
                                {category.skills.map(skill => (
                                    <li key={skill} className="text-slate-400 text-sm flex items-center gap-2">
                                        <span className="h-px w-3 bg-slate-600"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Blogs & Talks Section */}
            <div>
                <SectionHeader number="04" title="Knowledge Sharing" className="mb-8" />

                {/* Blogs */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-slate-300 mb-6 flex items-center gap-2">
                        <BookOpen size={20} className="text-blue-500" />
                        Technical Writing
                    </h3>
                    <div className="space-y-6">
                        {BLOGS.map((blog) => (
                            <a
                                key={blog.url}
                                href={blog.url}
                                target="_blank"
                                rel="noreferrer"
                                className="block group bg-slate-800/20 hover:bg-slate-800/40 border border-slate-700/50 hover:border-blue-500/30 p-6 rounded-xl transition-all"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <Badge variant="platform">{blog.platform}</Badge>
                                    <ExternalLink size={16} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-100">{blog.title}</h3>
                                <p className="text-slate-400 text-sm line-clamp-2">{blog.summary}</p>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Sessions */}
                <div>
                    <h3 className="text-xl font-semibold text-slate-300 mb-6 flex items-center gap-2">
                        <Presentation size={20} className="text-purple-500" />
                        Mentorship & Talks
                    </h3>
                    <div className="space-y-6">
                        {SESSIONS.map((session) => (
                            <div
                                key={session.title}
                                className="bg-slate-800/20 border border-slate-700/50 p-6 rounded-xl hover:border-purple-500/30 transition-all"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-mono text-purple-400 px-2 py-0.5 rounded bg-purple-500/10">
                                            {session.type}
                                        </span>
                                        {session.link && (
                                            <a
                                                href={session.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                                            >
                                                View Slides <ExternalLink size={10} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{session.title}</h3>
                                <p className="text-slate-400 text-sm mb-4">{session.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {session.topics.map((topic) => (
                                        <Badge key={topic} variant="topic">{topic}</Badge>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsAndBlogs;
