import React from 'react';
import { SKILLS, BLOGS } from '@/constants';
import { ExternalLink, BookOpen } from 'lucide-react';
import { SectionHeader, Badge } from '@/components/ui';

/**
 * Skills and Technical Writing section
 * Split layout: Skills grid on left, Blogs on right
 */
const SkillsAndBlogs: React.FC = () => {
    return (
        <section className="py-20 px-6 sm:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Skills Section */}
            <div>
                <SectionHeader number="05" title="Technical Arsenal" className="mb-8" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {SKILLS.map((category) => (
                        <div key={category.category} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800/50 hover:border-blue-500/20 transition-colors">
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

            {/* Technical Writing Section */}
            <div>
                <SectionHeader number="06" title="Technical Writing" className="mb-8" />
                <p className="text-slate-400 mb-6 text-sm">
                    I believe in sharing knowledge with the community. Here are some of my published articles on Medium.
                </p>

                <div className="space-y-6">
                    {BLOGS.map((blog) => (
                        <a
                            key={blog.url}
                            href={blog.url}
                            target="_blank"
                            rel="noreferrer"
                            className="block group bg-gradient-to-br from-slate-800/30 to-slate-900/40 hover:from-slate-800/50 hover:to-slate-800/60 border border-slate-700/50 hover:border-blue-500/30 p-6 rounded-xl transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <Badge variant="platform">{blog.platform}</Badge>
                                <ExternalLink size={16} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">
                                {blog.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{blog.summary}</p>

                            {/* Read indicator */}
                            <div className="mt-4 flex items-center gap-2 text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                <BookOpen size={14} />
                                Read on {blog.platform}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsAndBlogs;
