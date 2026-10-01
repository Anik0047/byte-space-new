import React from 'react';

const Button = ({ children, className = '', ...props }) => {
    return (
        <button 
            className={`bg-accent-lime-300 py-3 px-6 rounded-3xl text-dark-700 text-lg font-medium font-satoshi transition-colors duration-200 hover:bg-accent-lime-200 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
