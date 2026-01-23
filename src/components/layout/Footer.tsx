import React from 'react';
import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';
import { GITHUB, LINKEDIN, EMAIL } from '@/constants';

/**
 * Enhanced site footer with social links and dynamic year
 */
const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-slate-800/50 bg-gradient-to-b from-slate-950 to-slate-900/50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Social Links */}
                <div className="flex justify-center gap-6 mb-6">
                    <a
                        href={GITHUB}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 text-slate-500 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href={LINKEDIN}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 text-slate-500 hover:text-blue-400 hover:bg-slate-800 rounded-lg transition-all"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href={`mailto:${EMAIL}`}
                        className="p-2 text-slate-500 hover:text-green-400 hover:bg-slate-800 rounded-lg transition-all"
                        aria-label="Email"
                    >
                        <Mail size={20} />
                    </a>
                </div>

                {/* Tagline */}
                <p className="text-center text-slate-400 text-sm mb-4">
                    Crafted with <Heart size={14} className="inline text-red-500 mx-1" fill="currentColor" />
                    using <Code2 size={14} className="inline text-blue-400 mx-1" /> React, TypeScript & Tailwind CSS
                </p>

                {/* Copyright */}
                <p className="text-center text-slate-600 text-xs">
                    © {currentYear} Divya Sonara • Senior Frontend Engineer
                </p>
            </div>
        </footer>
    );
};

export default Footer;
