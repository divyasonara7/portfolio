import React, { useMemo } from 'react';
import { Mail, Linkedin, Download, Github } from 'lucide-react';
import { LOCATION, EMAIL, LINKEDIN, CV_PATH, GITHUB, CAREER_START_DATE } from '@/constants';
import { Button } from '@/components/ui';

/**
 * Calculate real-time years of experience from start date
 */
const useYearsOfExperience = (startDate: Date): string => {
    return useMemo(() => {
        const now = new Date();
        const years = (now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
        const fullYears = Math.floor(years);
        const months = Math.round((years - fullYears) * 12);

        if (months >= 6) {
            return `${fullYears}.5+`;
        }
        return `${fullYears}+`;
    }, [startDate]);
};

/**
 * Hero section - Landing area with name, title, summary and CTAs
 * Features animated status badge, real-time experience, and decorative gradient blurs
 */
const Hero: React.FC = () => {
    const yearsOfExperience = useYearsOfExperience(CAREER_START_DATE);

    return (
        <section className="relative pt-32 pb-20 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col items-start gap-8">
            {/* Background Decor */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute top-40 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10" />

            <div className="space-y-4">
                {/* Status Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-300 text-sm font-medium">
                    <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Open to Opportunities
                </div>

                {/* Main Content */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                    Divya Sonara
                </h1>
                <h2 className="text-2xl md:text-4xl font-light text-slate-400">
                    Senior Frontend Engineer
                </h2>
                <p className="max-w-2xl text-lg text-slate-400 leading-relaxed">
                    {yearsOfExperience} years engineering enterprise-grade <strong className="text-white">React & Vue</strong> platforms.
                    I specialize in scalable <strong className="text-white">System Design</strong>, AI-assisted development,
                    and delivering high-quality software solutions for complex business domains.
                    Currently based in <span className="text-white">{LOCATION}</span>.
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                    {['React', 'Vue 3', 'TypeScript', 'Node.js', 'GraphQL', 'System Design'].map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-slate-800/60 text-slate-300 text-sm rounded-full border border-slate-700/50"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
                <Button
                    href={CV_PATH}
                    download="Divya_Sonara_CV.pdf"
                    variant="primary"
                    icon={<Download size={18} />}
                >
                    Download CV
                </Button>
                <Button
                    href={`mailto:${EMAIL}`}
                    variant="secondary"
                    icon={<Mail size={18} />}
                >
                    Contact Me
                </Button>
                <Button
                    href={LINKEDIN}
                    target="_blank"
                    rel="noreferrer"
                    variant="ghost"
                    icon={<Linkedin size={18} />}
                >
                    LinkedIn
                </Button>
                <Button
                    href={GITHUB}
                    target="_blank"
                    rel="noreferrer"
                    variant="ghost"
                    icon={<Github size={18} />}
                >
                    GitHub
                </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-4 border-t border-slate-800/50">
                <div>
                    <span className="block text-3xl font-bold text-white">{yearsOfExperience}</span>
                    <span className="text-sm text-slate-500">Years Experience</span>
                </div>
                <div>
                    <span className="block text-3xl font-bold text-white">6+</span>
                    <span className="text-sm text-slate-500">Projects Delivered</span>
                </div>
                <div>
                    <span className="block text-3xl font-bold text-white">React & Vue</span>
                    <span className="text-sm text-slate-500">Cross-Framework Fluency</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
