import React from 'react';

interface SectionHeaderProps {
    number: string;
    title: string;
    className?: string;
}

/**
 * Consistent section header component with numbered prefix
 * Used across all major sections for visual consistency
 */
const SectionHeader: React.FC<SectionHeaderProps> = ({
    number,
    title,
    className = 'mb-12'
}) => {
    return (
        <h2 className={`text-3xl font-bold text-white flex items-center gap-3 ${className}`}>
            <span className="text-blue-500">{number}.</span> {title}
        </h2>
    );
};

export default SectionHeader;
