import React from 'react';
import { Code2 } from 'lucide-react';

type BadgeVariant = 'tech' | 'platform' | 'topic' | 'default';

interface BadgeProps {
    children: React.ReactNode;
    variant?: BadgeVariant;
    showIcon?: boolean;
    className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
    tech: 'flex items-center gap-1.5 px-2.5 py-1 bg-slate-800/50 text-slate-400 text-xs rounded-md border border-slate-700/50',
    platform: 'text-xs font-mono text-blue-400 px-2 py-0.5 rounded bg-blue-500/10',
    topic: 'px-2 py-1 bg-slate-900 text-slate-500 text-[10px] uppercase tracking-wider font-semibold rounded border border-slate-800',
    default: 'px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700',
};

/**
 * Versatile badge component for tech stacks, platforms, and topic tags
 */
const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'default',
    showIcon = false,
    className = ''
}) => {
    return (
        <span className={`${variantStyles[variant]} ${className}`}>
            {showIcon && variant === 'tech' && <Code2 size={10} />}
            {children}
        </span>
    );
};

export default Badge;
