import React from 'react';

interface AlertProps {
  className?: string;
  children: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({ className = '', children }) => (
  <div className={`border-l-4 p-4 ${className}`}>
    {children}
  </div>
);

interface AlertTitleProps {
  className?: string;
  children: React.ReactNode;
}

export const AlertTitle: React.FC<AlertTitleProps> = ({ className = '', children }) => (
  <p className={`font-bold mb-2 ${className}`}>{children}</p>
);

interface AlertDescriptionProps {
  className?: string;
  children: React.ReactNode;
}

export const AlertDescription: React.FC<AlertDescriptionProps> = ({ className = '', children }) => (
  <p className={className}>{children}</p>
);
