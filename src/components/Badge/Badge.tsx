import React from 'react';
import { BadgeProps } from './Badge.types';

const variantClasses: Record<string, string> = {
  primary: 'bg-blue-600 text-white',
  secondary: 'bg-gray-500 text-white',
  success: 'bg-green-500 text-white',
  warning: 'bg-yellow-500 text-white',
  error: 'bg-red-500 text-white',
};

export const Badge: React.FC<BadgeProps> = ({ label, variant = 'primary' }) => {
  return (
    <span className={`inline-block px-3 py-1 text-sm rounded-full ${variantClasses[variant]}`}>
      {label}
    </span>
  );
};
