import React from 'react';
import { SectionHeaderProps } from '../../types';
import { useTheme } from '../../contexts/ThemeContext';

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  description, 
  delay = 100 
}) => {
  const { isDarkMode } = useTheme();

  return (
    <div className="text-center mb-12" data-aos="fade-up" data-aos-delay={delay}>
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
        isDarkMode ? 'text-white' : 'text-gray-800'
      }`}>
        {title}
      </h2>
      <div className={`w-24 h-1 mx-auto rounded-full ${
        isDarkMode ? 'bg-gradient-to-r from-blue-400 to-purple-500' : 'bg-gradient-to-r from-blue-500 to-purple-600'
      }`} data-aos="zoom-in" data-aos-delay={delay + 100}></div>
      {description && (
        <p className={`text-base sm:text-lg mt-6 max-w-2xl mx-auto px-4 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`} data-aos="fade-up" data-aos-delay={delay + 200}>
          {description}
        </p>
      )}
    </div>
  );
};

