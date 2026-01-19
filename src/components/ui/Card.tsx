import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    gradient?: boolean;
}

/**
 * Generic card component with optional hover effects and gradient overlay
 * Used as the base for project cards, blog cards, and session cards
 */
const Card: React.FC<CardProps> = ({
    children,
    className = '',
    hover = true,
    gradient = true,
}) => {
    return (
        <div
            className={`
        group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 
        ${hover ? 'hover:bg-slate-800/80 transition-all duration-300 hover:border-blue-500/30' : ''}
        flex flex-col
        ${className}
      `}
        >
            {/* Hover Gradient Effect */}
            {gradient && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
            )}
            {children}
        </div>
    );
};

export default Card;
