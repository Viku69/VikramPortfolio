import React from 'react'
import ContactAvatar from '../../assets/images/ContactAvatar.png'
import Title from '../../components/Title'
import { useTheme } from '../../contexts/ThemeContext'
import { portfolioData } from '../../data/portfolioData'

function ContactMe() {
    const { isDarkMode } = useTheme();
    const { personalInfo } = portfolioData;

    const contactMethods = [
        {
            icon: "📧",
            title: "Email",
            value: personalInfo.email,
            link: `mailto:${personalInfo.email}`,
            color: "from-red-400 to-red-600"
        },
        {
            icon: "📱",
            title: "Phone",
            value: personalInfo.phone,
            link: `tel:${personalInfo.phone}`,
            color: "from-green-400 to-green-600"
        },
        {
            icon: "📍",
            title: "Location",
            value: personalInfo.location,
            link: "#",
            color: "from-blue-400 to-blue-600"
        }
    ];

    const socialLinks = [
        {
            name: "LinkedIn",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
            ),
            link: personalInfo.linkedin,
            color: "from-blue-500 to-blue-700"
        },
        {
            name: "GitHub",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
            ),
            link: personalInfo.github,
            color: "from-gray-600 to-gray-800"
        }
    ];

    return (
        <div className={`my-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
            {/* Section Header */}
            <div className='p-5 mx-10 my-auto max-w-screen-xxl'>
                <div className="text-center mb-12">
                    <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Contact Me
                    </h2>
                    <div className={`w-24 h-1 mx-auto rounded-full ${
                        isDarkMode ? 'bg-gradient-to-r from-blue-400 to-purple-500' : 'bg-gradient-to-r from-blue-500 to-purple-600'
                    }`}></div>
                    <p className={`text-lg mt-6 max-w-2xl mx-auto ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                        Let's connect and discuss opportunities, projects, or just have a conversation about technology and innovation.
                    </p>
                </div>
            </div>
            
            <div className='p-5 mx-10 my-auto max-w-screen-xxl'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div>
                        <h3 className={`text-3xl font-bold mb-8 ${
                            isDarkMode ? 'text-white' : 'text-gray-800'
                        }`}>
                            Get In Touch
                        </h3>
                        <p className={`text-lg mb-8 leading-relaxed ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                            I'm always open to discussing new opportunities, creative projects, or just having a chat about technology and innovation. Feel free to reach out!
                        </p>
                        
                        <div className="space-y-6">
                            {contactMethods.map((method, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center text-xl shadow-lg`}>
                                        {method.icon}
                                    </div>
                                    <div>
                                        <h4 className={`font-semibold ${
                                            isDarkMode ? 'text-white' : 'text-gray-800'
                                        }`}>
                                            {method.title}
                                        </h4>
                                        <a 
                                            href={method.link}
                                            className={`text-sm transition-colors duration-200 ${
                                                isDarkMode 
                                                    ? 'text-gray-400 hover:text-white' 
                                                    : 'text-gray-600 hover:text-gray-800'
                                            }`}
                                        >
                                            {method.value}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Social Links & Quick Actions */}
                    <div>
                        <h3 className={`text-3xl font-bold mb-8 ${
                            isDarkMode ? 'text-white' : 'text-gray-800'
                        }`}>
                            Connect With Me
                        </h3>
                        
                        <div className="space-y-6">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                                        isDarkMode 
                                            ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
                                            : 'bg-white border-gray-200 hover:border-gray-400'
                                    }`}
                                >
                                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center text-white shadow-lg`}>
                                        {social.icon}
                                    </div>
                                    <div>
                                        <h4 className={`font-semibold ${
                                            isDarkMode ? 'text-white' : 'text-gray-800'
                                        }`}>
                                            {social.name}
                                        </h4>
                                        <p className={`text-sm ${
                                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                            Follow me on {social.name}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Quick Actions */}
                        <div className="mt-8">
                            <h4 className={`text-xl font-semibold mb-4 ${
                                isDarkMode ? 'text-white' : 'text-gray-800'
                            }`}>
                                Quick Actions
                            </h4>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                                    isDarkMode 
                                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                                        : 'bg-blue-600 text-white hover:bg-blue-700'
                                }`}>
                                    📄 Download Resume
                                </button>
                                <button className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                                    isDarkMode 
                                        ? 'bg-gray-700 text-white hover:bg-gray-600 border border-gray-600' 
                                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300'
                                }`}>
                                    💼 Schedule Meeting
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className={`mt-16 pt-8 border-t text-center ${
                    isDarkMode ? 'border-gray-700' : 'border-gray-200'
                }`}>
                    <p className={`text-sm ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        © 2024 {personalInfo.name}. Built with React & Tailwind CSS. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactMe