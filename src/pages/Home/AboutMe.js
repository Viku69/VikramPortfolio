import React from 'react'
import AboutAvatar from '../../assets/images/AboutAvatar.png'
import { useTheme } from '../../contexts/ThemeContext'
import { portfolioData } from '../../data/portfolioData'

function AboutMe() {
    const { isDarkMode } = useTheme();
    const { personalInfo } = portfolioData;

    return (
        <div className={`min-h-screen flex flex-col lg:flex-row justify-between items-stretch p-5 mx-4 lg:mx-10 my-auto max-w-screen-xxl relative gap-6 ${
            isDarkMode ? 'bg-gray-900' : 'bg-white'
        }`}>
            {/* Main Content */}
            <div className={`w-full lg:w-8/12 border-2 rounded-3xl flex flex-col justify-between px-6 lg:px-10 py-8 lg:py-16 relative ${
                isDarkMode ? 'border-gray-600 bg-gray-800' : 'border-gray-400 bg-white'
            }`} data-aos="fade-right" data-aos-duration="1200" data-aos-easing="ease-out-cubic">
                <div className='flex flex-col gap-y-6 lg:gap-y-10'>
                    <h1 className={`text-4xl lg:text-8xl font-bold ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                    }`} data-aos="fade-up" data-aos-delay="200">
                        Hello !
                    </h1>
                    <h1 className='text-3xl lg:text-7xl p-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-3xl font-bold' data-aos="fade-up" data-aos-delay="400">
                        I'm {personalInfo.name}
                    </h1>
                    <h2 className='text-2xl lg:text-5xl p-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-3xl font-bold' data-aos="fade-up" data-aos-delay="600">
                        {personalInfo.title}
                    </h2>
                    
                    {/* Summary */}
                    <p className={`text-lg lg:text-xl leading-relaxed mt-6 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`} data-aos="fade-up" data-aos-delay="800">
                        {personalInfo.summary}
                    </p>
                </div>

                {/* Action Buttons */}
                <div className='flex flex-col sm:flex-row gap-4 lg:gap-8 text-lg lg:text-3xl mt-8' data-aos="fade-up" data-aos-delay="1000">
                    <button className={`border-4 rounded-3xl px-6 lg:px-10 py-3 lg:py-4 shadow-2xl transition-all duration-300 hover:scale-105 ${
                        isDarkMode 
                            ? 'bg-gray-700 border-gray-500 text-white hover:bg-gray-600' 
                            : 'bg-white border-black text-black hover:bg-gray-100'
                    }`}>
                        📄 Resume
                    </button>
                    <button className={`border-4 rounded-3xl px-6 lg:px-10 py-3 lg:py-4 shadow-2xl transition-all duration-300 hover:scale-105 ${
                        isDarkMode 
                            ? 'bg-blue-600 border-blue-500 text-white hover:bg-blue-700' 
                            : 'bg-blue-600 border-blue-500 text-white hover:bg-blue-700'
                    }`}>
                        💼 Hire Me
                    </button>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 mt-6" data-aos="fade-up" data-aos-delay="1200">
                    <a 
                        href={personalInfo.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                            isDarkMode 
                                ? 'bg-gray-700 text-blue-400 hover:bg-gray-600' 
                                : 'bg-gray-100 text-blue-600 hover:bg-gray-200'
                        }`}
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                        </svg>
                    </a>
                    <a 
                        href={personalInfo.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                            isDarkMode 
                                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Right Side - Avatar and Animation */}
            <div className={`w-full lg:w-3/12 border-2 rounded-3xl relative flex flex-col items-center justify-center ${
                isDarkMode ? 'border-gray-600 bg-gray-800' : 'border-gray-400 bg-white'
            }`} data-aos="fade-left" data-aos-duration="1200" data-aos-easing="ease-out-cubic" data-aos-delay="300">
                {/* Lottie Animation */}
                <div className='absolute top-4 right-4 w-16 h-16 lg:w-20 lg:h-20' data-aos="zoom-in" data-aos-delay="800">
                    <dotlottie-player 
                        src="https://lottie.host/cc7fa89e-306b-4c00-a9e0-49aa71bc9bfa/czcrgUDhRF.json" 
                        background="transparent"
                        speed="1"
                        loop 
                        autoplay
                        className="w-full h-full"
                    >
                    </dotlottie-player>
                </div>
                
                {/* Avatar */}
                <div className="flex flex-col items-center justify-center h-full px-4">
                    <img 
                        src={AboutAvatar} 
                        alt="Avatar About" 
                        className='w-48 h-48 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-white shadow-2xl mb-6' 
                        data-aos="zoom-in" 
                        data-aos-delay="600"
                    />
                    <div className="text-center">
                        <h3 className={`text-2xl lg:text-3xl font-bold mb-3 ${
                            isDarkMode ? 'text-white' : 'text-gray-800'
                        }`} data-aos="fade-up" data-aos-delay="1000">
                            {personalInfo.name}
                        </h3>
                        <div className={`inline-block px-4 py-2 rounded-full text-sm lg:text-base font-semibold ${
                            isDarkMode 
                                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                                : 'bg-gradient-to-r from-blue-600 to-purple-700 text-white'
                        }`} data-aos="fade-up" data-aos-delay="1200">
                            {personalInfo.title}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe