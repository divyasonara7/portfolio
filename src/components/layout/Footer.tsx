import React from 'react';

/**
 * Site footer with copyright information
 */
const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-800/50 bg-slate-950">
            <p>© {currentYear} Divya Sonara. Built with React & Tailwind CSS.</p>
        </footer>
    );
};

export default Footer;
