import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: ButtonVariant;
    icon?: React.ReactNode;
    children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-white text-slate-900 hover:bg-slate-200',
    secondary: 'border border-slate-700 bg-slate-800/50 text-white hover:bg-slate-800',
    ghost: 'border border-slate-700 bg-transparent text-slate-300 hover:text-white hover:border-slate-500',
};

/**
 * Consistent button component with three visual variants
 * Renders as an anchor tag for navigation purposes
 */
const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    icon,
    children,
    className = '',
    ...props
}) => {
    return (
        <a
            className={`
        flex items-center gap-2 px-6 py-3 rounded-lg font-semibold 
        transition-colors cursor-pointer
        ${variantStyles[variant]}
        ${className}
      `}
            {...props}
        >
            {icon}
            {children}
        </a>
    );
};

export default Button;
