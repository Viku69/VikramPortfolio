import React from 'react'
import ProjectAvatar from '../../assets/images/ProjectAvatar.png'
import { useTheme } from '../../contexts/ThemeContext'
import { portfolioData } from '../../data/portfolioData'

const ProjectDetails = portfolioData.projects;

function Project() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`my-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Section Header */}
      <div className='p-5 mx-10 my-auto max-w-screen-xxl'>
        <div className="text-center mb-12">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`} data-aos="fade-up" data-aos-duration="1000">
            Featured Projects
          </h2>
          <div className={`w-24 h-1 mx-auto rounded-full ${
            isDarkMode ? 'bg-gradient-to-r from-blue-400 to-purple-500' : 'bg-gradient-to-r from-blue-500 to-purple-600'
          }`} data-aos="fade-up" data-aos-delay="200" data-aos-duration="800"></div>
          <p className={`text-lg mt-6 max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`} data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            Showcasing innovative projects that demonstrate technical expertise, problem-solving skills, and real-world impact.
          </p>
        </div>
      </div>
      
      <div className='p-2 sm:p-4 lg:p-5 mx-2 sm:mx-4 lg:mx-10 my-auto max-w-screen-xxl'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {ProjectDetails.map((project, index) => (
            <div key={project.id} className="group" data-aos="fade-up" data-aos-delay={index * 200} data-aos-duration="1000">
              <div className={`border-2 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
                  : 'bg-white border-gray-200 hover:border-gray-400'
              }`}>
                {/* Project Header */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center text-lg sm:text-2xl shadow-lg`}>
                    {project.category === 'iOS/ML' ? '📱' : '🌐'}
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-1 ${
                      isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                      {project.name}
                    </h3>
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                      project.category === 'iOS/ML'
                        ? isDarkMode
                          ? 'bg-blue-900 text-blue-300 border border-blue-700'
                          : 'bg-blue-100 text-blue-800 border border-blue-200'
                        : isDarkMode
                          ? 'bg-green-900 text-green-300 border border-green-700'
                          : 'bg-green-100 text-green-800 border border-green-200'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Description */}
                <p className={`text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4 sm:mb-6">
                  <h5 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Key Features:
                  </h5>
                  <ul className="space-y-2 sm:space-y-3">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3">
                        <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 ${
                          isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                        }`}></span>
                        <span className={`text-xs sm:text-sm leading-relaxed ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className={`pt-4 sm:pt-6 border-t mb-4 sm:mb-6 ${
                  isDarkMode ? 'border-gray-700' : 'border-gray-200'
                }`}>
                  <h5 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Technologies:
                  </h5>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                        isDarkMode 
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      } transition-colors duration-200`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub Link */}
                <div className="flex justify-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 ${
                      isDarkMode
                        ? 'bg-gray-700 text-white hover:bg-gray-600 border border-gray-600'
                        : 'bg-gray-800 text-white hover:bg-gray-900 border border-gray-800'
                    }`}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    <span className="hidden sm:inline">View on GitHub</span>
                    <span className="sm:hidden">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Summary section */}
        <div className={`mt-8 sm:mt-12 lg:mt-16 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border-2 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600' 
            : 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200'
        }`}>
          <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-center ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>
            Project Highlights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">2</div>
              <div className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Featured Projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">25%</div>
              <div className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Avg. Performance Improvement
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">10+</div>
              <div className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Technologies Used
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project