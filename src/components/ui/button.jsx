import React from 'react';
import './Button.css';

const Button = ({ children, type, className, onClick }) => {
    const cn = `button ${className ?? ''}`;

    return (
        <button
            type={type}
            className={cn}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;