import React, { useState } from 'react';
import { ExpCardProps } from '../types';
import { useTheme } from '../contexts/ThemeContext';

export const ExpCard: React.FC<ExpCardProps> = ({
  Role,
  ImageComponent,
  company,
  location,
  duration,
  type,
  achievements,
  technologies
}) => {
  const { isDarkMode } = useTheme();
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const toggleFlip = (): void => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative w-80 sm:w-96 h-96 sm:h-[28rem] perspective-1000">
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
        isFlipped ? 'rotate-y-180' : ''
      }`} onClick={toggleFlip}>
        
        {/* Front Side */}
        <div className={`absolute inset-0 w-full h-full backface-hidden rounded-3xl border-2 shadow-2xl p-6 sm:p-8 flex flex-col justify-between ${
          isDarkMode 
            ? 'border-gray-700 bg-gray-800 hover:border-gray-600' 
            : 'border-gray-300 bg-white hover:border-gray-400'
        }`}>
          {/* Company Logo */}
          <div className="flex justify-center mb-4">
            <div className={`w-20 h-20 sm:w-24 sm:h-24 border-2 rounded-2xl overflow-hidden shadow-lg ${
              isDarkMode ? 'border-gray-600' : 'border-gray-300'
            }`}>
              {ImageComponent ? (
                ImageComponent
              ) : (
                <div className={`h-full w-full rounded-2xl flex items-center justify-center ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    No Image
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Role and Company */}
          <div className='flex flex-col items-center text-center'>
            <h1 className={`font-bold text-lg sm:text-xl lg:text-2xl mb-2 leading-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {Role}
            </h1>
            <h2 className={`font-semibold text-base sm:text-lg mb-3 ${
              isDarkMode ? 'text-blue-400' : 'text-blue-600'
            }`}>
              {company}
            </h2>
            <div className={`flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                {location}
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                {duration}
              </span>
            </div>
            <span className={`mt-3 px-3 py-1 rounded-full text-xs font-medium ${
              type === 'Full-time'
                ? isDarkMode
                  ? 'bg-green-900 text-green-300 border border-green-700'
                  : 'bg-green-100 text-green-800 border border-green-200'
                : isDarkMode
                  ? 'bg-blue-900 text-blue-300 border border-blue-700'
                  : 'bg-blue-100 text-blue-800 border border-blue-200'
            }`}>
              {type}
            </span>
          </div>

          {/* Click to flip indicator */}
          <div className="flex justify-center mt-4">
            <div className={`px-4 py-2 rounded-full text-xs font-medium ${
              isDarkMode 
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                : 'bg-gradient-to-r from-blue-400 to-purple-500 text-white'
            } shadow-lg`}>
              Click to see details
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl border-2 shadow-2xl p-4 sm:p-6 flex flex-col ${
          isDarkMode 
            ? 'border-gray-700 bg-gray-800' 
            : 'border-gray-300 bg-white'
        }`}>
          
          {/* Back Header */}
          <div className="text-center mb-4">
            <h3 className={`text-lg sm:text-xl font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Experience Details
            </h3>
            <div className={`w-16 h-0.5 mx-auto mt-2 ${
              isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
            }`}></div>
          </div>

          {/* Achievements */}
          <div className="flex-1 overflow-y-auto">
            <h4 className={`text-sm sm:text-base font-semibold mb-3 ${
              isDarkMode ? 'text-gray-200' : 'text-gray-700'
            }`}>
              Key Achievements:
            </h4>
            <ul className="space-y-2 mb-4">
              {achievements?.slice(0, 3).map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                    isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                  }`}></span>
                  <span className={`text-xs sm:text-sm leading-relaxed ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>

            {/* Technologies */}
            <div className={`pt-3 border-t ${
              isDarkMode ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <h4 className={`text-sm sm:text-base font-semibold mb-3 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Technologies:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {technologies?.map((tech, idx) => (
                  <span key={idx} className={`px-2 py-1 rounded-full text-xs font-medium ${
                    isDarkMode 
                      ? 'bg-gray-700 text-gray-300' 
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Click to flip back indicator */}
          <div className="flex justify-center mt-3">
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
              isDarkMode 
                ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white' 
                : 'bg-gradient-to-r from-purple-400 to-blue-500 text-white'
            } shadow-lg`}>
              Click to go back
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpCard;

