import React from 'react';

interface NavLink {
    href: string;
    label: string;
}

const navLinks: NavLink[] = [
    { href: '#case-study', label: 'Architecture' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
];

/**
 * Fixed navigation header with glassmorphism effect
 * Responsive - hides nav links on mobile
 */
const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="text-xl font-bold tracking-tighter text-white">
                    divya<span className="text-blue-500">.dev</span>
                </div>
                <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="hover:text-white transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
