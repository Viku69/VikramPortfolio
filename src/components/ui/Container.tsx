import React from 'react';
import { ContainerProps } from '../../types';

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`p-5 mx-auto my-auto max-w-screen-xxl w-full px-4 sm:px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  );
};

