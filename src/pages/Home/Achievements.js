import React from 'react'
import Title from '../../components/Title'
import { useTheme } from '../../contexts/ThemeContext'
import { portfolioData } from '../../data/portfolioData'

const AchievementDetails = portfolioData.achievements;
const PositionDetails = portfolioData.positions;

function Achievements() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`my-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Section Header */}
      <div className='p-5 mx-10 my-auto max-w-screen-xxl'>
        <div className="text-center mb-12">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>
            Achievements & Leadership
          </h2>
          <div className={`w-24 h-1 mx-auto rounded-full ${
            isDarkMode ? 'bg-gradient-to-r from-blue-400 to-purple-500' : 'bg-gradient-to-r from-blue-500 to-purple-600'
          }`}></div>
          <p className={`text-lg mt-6 max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Recognition for academic excellence, research contributions, and leadership roles in technology communities.
          </p>
        </div>
      </div>
      
      <div className='p-5 mx-10 my-auto max-w-screen-xxl'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {AchievementDetails.map((achievement) => (
            <div key={achievement.id} className="group">
              <div className={`border-2 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
                  : 'bg-white border-gray-200 hover:border-gray-400'
              }`}>
                {/* Achievement Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-2xl shadow-lg">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold mb-1 ${
                      isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                      {achievement.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      isDarkMode
                        ? 'bg-yellow-900 text-yellow-300 border border-yellow-700'
                        : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                    }`}>
                      {achievement.year}
                    </span>
                  </div>
                </div>

                {/* Achievement Description */}
                <p className={`text-lg mb-4 leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {achievement.description}
                </p>

                {/* Additional Info */}
                {achievement.publication && (
                  <div className={`mb-4 p-4 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                  }`}>
                    <p className={`text-sm font-medium ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <span className="font-semibold">Publication:</span> {achievement.publication}
                    </p>
                  </div>
                )}

                {achievement.platforms && (
                  <div className={`mb-4 p-4 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                  }`}>
                    <p className={`text-sm font-medium ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <span className="font-semibold">Platforms:</span> {achievement.platforms}
                    </p>
                  </div>
                )}

                {/* Link Button */}
                {achievement.link && (
                  <div className="flex justify-center">
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                        isDarkMode
                          ? 'bg-gray-700 text-white hover:bg-gray-600 border border-gray-600'
                          : 'bg-gray-800 text-white hover:bg-gray-900 border border-gray-800'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                      </svg>
                      View Details
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Positions of Responsibility Section */}
      <div className='p-5 mx-10 my-auto max-w-screen-xxl'>
        <div className="text-center mb-12">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>
            Positions of Responsibility
          </h2>
          <div className={`w-24 h-1 mx-auto rounded-full ${
            isDarkMode ? 'bg-gradient-to-r from-blue-400 to-purple-500' : 'bg-gradient-to-r from-blue-500 to-purple-600'
          }`}></div>
          <p className={`text-lg mt-6 max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Leadership roles and community involvement that demonstrate commitment to mentoring, knowledge sharing, and collaborative growth.
          </p>
        </div>
      </div>
      
      <div className='p-5 mx-10 my-auto max-w-screen-xxl'>
        <div className="space-y-8">
          {PositionDetails.map((position) => (
            <div key={position.id} className="group">
              <div className={`border-2 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
                  : 'bg-white border-gray-200 hover:border-gray-400'
              }`}>
                {/* Position Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-2xl shadow-lg">
                    {position.icon}
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold mb-1 ${
                      isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                      {position.title}
                    </h3>
                    <p className={`text-lg font-medium ${
                      isDarkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {position.organization}
                    </p>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      isDarkMode
                        ? 'bg-blue-900 text-blue-300 border border-blue-700'
                        : 'bg-blue-100 text-blue-800 border border-blue-200'
                    }`}>
                      {position.duration}
                    </span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h5 className={`text-lg font-semibold mb-4 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Key Responsibilities:
                  </h5>
                  <ul className="space-y-3">
                    {position.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                        }`}></span>
                        <span className={`text-sm leading-relaxed ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Summary section */}
        <div className={`mt-16 rounded-2xl p-8 border-2 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600' 
            : 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200'
        }`}>
          <h3 className={`text-2xl font-bold mb-4 text-center ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>
            Achievement Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">1</div>
              <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Research Paper Published
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Problems Solved
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">15%</div>
              <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Top National Ranking
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">250+</div>
              <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Students Impacted
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievements


