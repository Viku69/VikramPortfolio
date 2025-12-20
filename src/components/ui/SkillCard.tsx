import React from 'react';
import { Skill } from '../../types';
import { useTheme } from '../../contexts/ThemeContext';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`group relative border-2 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
      isDarkMode 
        ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
        : 'bg-white border-gray-200 hover:border-gray-400'
    }`} data-aos="fade-up" data-aos-delay={index * 100}>
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h3 className={`text-lg sm:text-xl font-semibold ${
          isDarkMode ? 'text-white' : 'text-gray-800'
        }`}>
          {skill.name}
        </h3>
        <span className={`text-xs sm:text-sm font-medium ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {skill.level}%
        </span>
      </div>
      
      <div className={`w-full rounded-full h-3 mb-4 overflow-hidden ${
        isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
      }`}>
        <div 
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
      
      <div className="flex items-center justify-center">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
          {skill.name.charAt(0)}
        </div>
      </div>
    </div>
  );
};

