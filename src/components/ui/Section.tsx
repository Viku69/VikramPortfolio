import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  [key: string]: any; // For data-aos and other attributes
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '',
  id,
  ...props
}) => {
  return (
    <section id={id} className={`w-full ${className}`} {...props}>
      {children}
    </section>
  );
};

