// File: src/components/ui/button.jsx
import React from 'react';

export const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-xl font-medium bg-gradient-to-r from-purple-400 to-pink-500 text-white hover:opacity-90 transition ${className}`}
    >
      {children}
    </button>
  );
};
