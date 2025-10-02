import React from 'react'
import SkillsAvatar from "../../assets/images/SkillsAvatar.png";
import Title from '../../components/Title';
import { useTheme } from '../../contexts/ThemeContext';
import { portfolioData } from '../../data/portfolioData';

const skills = portfolioData.skills;

function Skill() {
    const { isDarkMode } = useTheme();

    return (
        <div className={`my-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
            {/* Section Header */}
            <div className='p-5 mx-4 sm:mx-6 lg:mx-10 my-auto max-w-screen-xxl'>
                <div className="text-center mb-12">
                    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                    }`} data-aos="fade-up" data-aos-duration="1000">
                        Technical Skills
                    </h2>
                    <div className={`w-24 h-1 mx-auto rounded-full ${
                        isDarkMode ? 'bg-gradient-to-r from-blue-400 to-purple-500' : 'bg-gradient-to-r from-blue-500 to-purple-600'
                    }`} data-aos="fade-up" data-aos-delay="200" data-aos-duration="800"></div>
                    <p className={`text-base sm:text-lg mt-6 max-w-2xl mx-auto px-4 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`} data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                        A comprehensive overview of my technical expertise across programming languages, frameworks, and modern development practices.
                    </p>
                </div>
            </div>
            
            <div className='p-5 mx-4 sm:mx-6 lg:mx-10 my-auto max-w-screen-xxl'>
                {/* Programming Languages */}
                <div className='mb-12 lg:mb-16'>
                    <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                    }`} data-aos="fade-up" data-aos-duration="1000">
                        Programming Languages
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {skills.programmingLanguages.map((skill, index) => (
                            <div key={skill.name} className={`group relative border-2 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
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
                        ))}
                    </div>
                </div>

                {/* Frameworks & Libraries */}
                <div className='mb-12 lg:mb-16'>
                    <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Frameworks & Libraries
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {skills.frameworks.map((skill, index) => (
                            <div key={skill.name} className={`group relative border-2 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                                isDarkMode 
                                    ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
                                    : 'bg-white border-gray-200 hover:border-gray-400'
                            }`} data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className={`text-xl font-semibold ${
                                        isDarkMode ? 'text-white' : 'text-gray-800'
                                    }`}>
                                        {skill.name}
                                    </h3>
                                    <span className={`text-sm font-medium ${
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
                        ))}
                    </div>
                </div>

                {/* Databases */}
                <div className='mb-12 lg:mb-16'>
                    <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Databases
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
                        {skills.databases.map((skill, index) => (
                            <div key={skill.name} className={`group relative border-2 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                                isDarkMode 
                                    ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
                                    : 'bg-white border-gray-200 hover:border-gray-400'
                            }`} data-aos="fade-up" data-aos-delay={index * 150}>
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className={`text-xl font-semibold ${
                                        isDarkMode ? 'text-white' : 'text-gray-800'
                                    }`}>
                                        {skill.name}
                                    </h3>
                                    <span className={`text-sm font-medium ${
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
                        ))}
                    </div>
                </div>

                {/* Cloud & DevOps */}
                <div className='mb-12 lg:mb-16'>
                    <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Cloud & DevOps
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {skills.cloudDevOps.map((skill, index) => (
                            <div key={skill.name} className={`group relative border-2 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                                isDarkMode 
                                    ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
                                    : 'bg-white border-gray-200 hover:border-gray-400'
                            }`} data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className={`text-xl font-semibold ${
                                        isDarkMode ? 'text-white' : 'text-gray-800'
                                    }`}>
                                        {skill.name}
                                    </h3>
                                    <span className={`text-sm font-medium ${
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
                        ))}
                    </div>
                </div>
                
                {/* Tools */}
                <div className='mb-12 lg:mb-16'>
                    <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Tools
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                        {skills.tools.map((tool, index) => (
                            <div key={tool} className={`border-2 rounded-full px-4 sm:px-6 py-2 sm:py-3 transition-all duration-300 cursor-pointer hover:scale-105 ${
                                isDarkMode 
                                    ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-gray-600' 
                                    : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200 hover:border-gray-400'
                            }`} data-aos="zoom-in" data-aos-delay={index * 50}>
                                <span className="font-medium text-sm sm:text-base">{tool}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Practices */}
                <div className='mb-12 lg:mb-16'>
                    <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Best Practices
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                        {skills.practices.map((practice, index) => (
                            <div key={practice} className={`border-2 rounded-full px-4 sm:px-6 py-2 sm:py-3 transition-all duration-300 cursor-pointer hover:scale-105 ${
                                isDarkMode 
                                    ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-gray-600' 
                                    : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200 hover:border-gray-400'
                            }`} data-aos="zoom-in" data-aos-delay={index * 50}>
                                <span className="font-medium text-sm sm:text-base">{practice}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill