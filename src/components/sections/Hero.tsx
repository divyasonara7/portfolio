import React from 'react';
import { Mail, Linkedin, Cpu } from 'lucide-react';
import { LOCATION, EMAIL, LINKEDIN } from '@/constants';
import { Button } from '@/components/ui';

/**
 * Hero section - Landing area with name, title, summary and CTAs
 * Features animated status badge and decorative gradient blurs
 */
const Hero: React.FC = () => {
    return (
        <section className="relative pt-32 pb-20 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col items-start gap-8">
            {/* Background Decor */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute top-40 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10" />

            <div className="space-y-4">
                {/* Status Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium">
                    <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Open to Opportunities
                </div>

                {/* Main Content */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                    Divya Sonara
                </h1>
                <h2 className="text-2xl md:text-4xl font-light text-slate-400">
                    Senior Frontend Architect & <span className="text-blue-400 font-normal">System Design</span> Expert
                </h2>
                <p className="max-w-2xl text-lg text-slate-400 leading-relaxed">
                    I build scalable <strong>React & Vue</strong> architectures by bridging the gap between complex backend logic and intuitive UI.
                    Expert in leveraging <strong>CodeGen AI</strong> to accelerate delivery without compromising engineering standards.
                    Currently based in <span className="text-white">{LOCATION}</span>.
                </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
                <Button
                    href={`mailto:${EMAIL}`}
                    variant="primary"
                    icon={<Mail size={18} />}
                >
                    Contact Me
                </Button>
                <Button
                    href={LINKEDIN}
                    target="_blank"
                    rel="noreferrer"
                    variant="secondary"
                    icon={<Linkedin size={18} />}
                >
                    LinkedIn
                </Button>
                <Button
                    href="#case-study"
                    variant="ghost"
                    icon={<Cpu size={18} />}
                >
                    View Architecture
                </Button>
            </div>
        </section>
    );
};

export default Hero;
