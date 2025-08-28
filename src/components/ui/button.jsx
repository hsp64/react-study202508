import React from 'react';
import './Button.css';

const Button = ({ children, type, className, onClick, disabled }) => {
    const cn = `button ${className ?? ''}`;

    return (
        <button
            type={type}
            className={cn}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
