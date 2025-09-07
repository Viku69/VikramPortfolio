import React, { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'

function ExpCard(props) {
  const { isDarkMode } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative">
      <div className={`flex flex-col w-[50vw] min-h-[50vh] border-2 rounded-3xl shadow-2xl justify-between p-10 transition-all duration-500 cursor-pointer ${
        isDarkMode 
          ? 'border-gray-700 bg-gray-800 hover:border-gray-600' 
          : 'border-gray-300 bg-white hover:border-gray-400'
      } ${isExpanded ? 'min-h-[80vh]' : ''}`}
      onClick={toggleExpanded}>
        
        {/* Header Section */}
        <div className='flex flex-row justify-between items-center mb-8'>
          <div className={`w-32 h-24 rounded-full ${
            isDarkMode ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-blue-400 to-purple-500'
          } shadow-lg`}>
            {/* Empty capsule - no text */}
          </div>
          <div className={`w-32 h-32 border-2 rounded-2xl overflow-hidden shadow-lg ${
            isDarkMode ? 'border-gray-600' : 'border-gray-300'
          }`}>
            {props.ImageComponent ? (
              props.ImageComponent
            ) : (
              <div className={`h-full w-full rounded-2xl flex items-center justify-center ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  No Image
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Role and Company */}
        <div className='flex flex-col items-center mb-8'>
          <h1 className={`text-center font-extrabold text-4xl mb-3 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {props.Role}
          </h1>
          <h2 className={`text-center font-bold text-2xl mb-4 ${
            isDarkMode ? 'text-blue-400' : 'text-blue-600'
          }`}>
            {props.company}
          </h2>
          <div className={`flex items-center gap-6 mt-2 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              {props.location}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              {props.duration}
            </span>
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${
              props.type === 'Full-time'
                ? isDarkMode
                  ? 'bg-green-900 text-green-300 border border-green-700'
                  : 'bg-green-100 text-green-800 border border-green-200'
                : isDarkMode
                  ? 'bg-blue-900 text-blue-300 border border-blue-700'
                  : 'bg-blue-100 text-blue-800 border border-blue-200'
            }`}>
              {props.type}
            </span>
          </div>
        </div>

        {/* Expandable Content */}
        <div className={`transition-all duration-500 overflow-hidden ${
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          {/* Achievements */}
          <div className="mb-8">
            <h3 className={`text-xl font-semibold mb-6 ${
              isDarkMode ? 'text-gray-200' : 'text-gray-700'
            }`}>
              Key Achievements:
            </h3>
            <ul className="space-y-4">
              {props.achievements?.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                  }`}></span>
                  <span className={`text-sm leading-relaxed ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className={`pt-6 border-t ${
            isDarkMode ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <h3 className={`text-xl font-semibold mb-6 ${
              isDarkMode ? 'text-gray-200' : 'text-gray-700'
            }`}>
              Technologies Used:
            </h3>
            <div className="flex flex-wrap gap-3">
              {props.technologies?.map((tech, idx) => (
                <span key={idx} className={`px-4 py-2 rounded-full text-sm font-medium ${
                  isDarkMode 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition-colors duration-200`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Expand/Collapse Indicator */}
        <div className="flex justify-center mt-8">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700' 
              : 'bg-gradient-to-r from-blue-400 to-purple-500 text-white hover:from-blue-500 hover:to-purple-600'
          } ${isExpanded ? 'rotate-180' : ''} shadow-lg hover:shadow-xl`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpCard