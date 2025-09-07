import React from 'react'
import EducationAvatar from '../../assets/images/EducationAvatar.png'
import Title from '../../components/Title'
import { useTheme } from '../../contexts/ThemeContext'
import { portfolioData } from '../../data/portfolioData'

const EducationDetails = portfolioData.education;

function Education() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`my-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Section Header */}
      <div className='p-5 mx-10 my-auto max-w-screen-xxl'>
        <div className="text-center mb-12">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`} data-aos="fade-up" data-aos-duration="1000">
            Education
          </h2>
          <div className={`w-24 h-1 mx-auto rounded-full ${
            isDarkMode ? 'bg-gradient-to-r from-blue-400 to-purple-500' : 'bg-gradient-to-r from-blue-500 to-purple-600'
          }`} data-aos="fade-up" data-aos-delay="200" data-aos-duration="800"></div>
          <p className={`text-lg mt-6 max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`} data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            My academic journey in computer science, highlighting key achievements and continuous learning in technology.
          </p>
        </div>
      </div>
      
      <div className='p-5 mx-10 my-auto max-w-screen-xxl'>
        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-8 top-0 bottom-0 w-1 rounded-full ${
            isDarkMode ? 'bg-gradient-to-b from-blue-400 via-green-400 to-purple-400' : 'bg-gradient-to-b from-blue-500 via-green-500 to-purple-500'
          }`}></div>
          
          <div className="space-y-12">
            {EducationDetails.map((education, index) => (
              <div key={education.id} className="relative flex items-center" data-aos="fade-up" data-aos-delay={index * 200} data-aos-duration="1000">
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${education.color} rounded-full border-4 shadow-lg z-10 ${
                  isDarkMode ? 'border-gray-800' : 'border-white'
                }`} data-aos="zoom-in" data-aos-delay={index * 200 + 300}></div>
                
                {/* Education card */}
                <div className={`ml-16 w-full max-w-4xl group`} data-aos="slide-left" data-aos-delay={index * 200 + 100} data-aos-duration="1000">
                  <div className={`border-2 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
                      : 'bg-white border-gray-200 hover:border-gray-400'
                  }`}>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      {/* Left side - Main info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${education.color} flex items-center justify-center text-2xl shadow-lg`}>
                            {education.icon}
                          </div>
                          <div>
                            <h3 className={`text-2xl font-bold mb-1 ${
                              isDarkMode ? 'text-white' : 'text-gray-800'
                            }`}>
                              {education.degree}
                            </h3>
                            <p className={`text-lg font-medium ${
                              isDarkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              {education.specialization}
                            </p>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className={`text-xl font-semibold mb-2 ${
                            isDarkMode ? 'text-gray-200' : 'text-gray-700'
                          }`}>
                            {education.institute}
                          </h4>
                          <div className="flex flex-wrap gap-4 text-gray-600">
                            <span className={`flex items-center gap-2 ${
                              isDarkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                              {education.duration}
                            </span>
                            <span className={`flex items-center gap-2 ${
                              isDarkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                              {education.marks} {education.degree.includes('Bachelor') ? 'CGPA' : 'Marks'}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Right side - Status and progress */}
                      <div className="lg:ml-8 flex flex-col items-center lg:items-end">
                        <div className={`px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                          education.status === 'Pursuing' 
                            ? isDarkMode
                              ? 'bg-blue-900 text-blue-300 border-2 border-blue-700'
                              : 'bg-blue-100 text-blue-800 border-2 border-blue-200'
                            : isDarkMode
                              ? 'bg-green-900 text-green-300 border-2 border-green-700'
                              : 'bg-green-100 text-green-800 border-2 border-green-200'
                        }`}>
                          {education.status}
                        </div>
                        
                        {/* Progress bar for marks */}
                        <div className="w-32">
                          <div className={`flex justify-between text-sm mb-1 ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            <span>Performance</span>
                            <span>{education.marks}</span>
                          </div>
                          <div className={`w-full rounded-full h-3 overflow-hidden ${
                            isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                          }`}>
                            <div 
                              className={`h-full bg-gradient-to-r ${education.color} rounded-full transition-all duration-1000 ease-out`}
                              style={{ width: `${parseFloat(education.marks)}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Additional details */}
                    <div className={`mt-6 pt-6 border-t ${
                      isDarkMode ? 'border-gray-700' : 'border-gray-200'
                    }`}>
                      <div className={`flex flex-wrap gap-4 text-sm ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <span className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${
                            isDarkMode ? 'bg-gray-500' : 'bg-gray-400'
                          }`}></span>
                          {education.duration.includes('2021') ? '4 Year Program' : education.duration.includes('2019') ? '2 Year Program' : '2 Year Program'}
                        </span>
                        <span className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${
                            isDarkMode ? 'bg-gray-500' : 'bg-gray-400'
                          }`}></span>
                          {education.status === 'Pursuing' ? 'Expected Graduation: 2025' : 'Completed Successfully'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
            Academic Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
              <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Educational Milestones
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">90.6%</div>
              <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Average Performance
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">4+</div>
              <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Years of Learning
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education