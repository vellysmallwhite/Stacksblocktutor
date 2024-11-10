import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className = '', children }) => (
  <div className={`bg-white rounded-lg overflow-hidden shadow-md ${className}`}>
    {children}
  </div>
);

export const CardHeader: React.FC<CardProps> = ({ className = '', children }) => (
  <div className={`p-4 border-b ${className}`}>
    {children}
  </div>
);

export const CardTitle: React.FC<CardProps> = ({ className = '', children }) => (
  <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>
);

export const CardContent: React.FC<CardProps> = ({ className = '', children }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);
