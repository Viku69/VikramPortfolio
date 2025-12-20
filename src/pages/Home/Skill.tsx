import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { portfolioData } from '../../data/portfolioData';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Container } from '../../components/ui/Container';
import { SkillCard } from '../../components/ui/SkillCard';

const Skill: React.FC = () => {
    const { isDarkMode } = useTheme();
    const skills = portfolioData.skills;

    return (
        <div className={`my-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <Container>
                <SectionHeader 
                    title="Technical Skills"
                    description="A comprehensive overview of my technical expertise across programming languages, frameworks, and modern development practices."
                />
            </Container>
            
            <Container>
                {/* Programming Languages */}
                <div className='mb-12 lg:mb-16'>
                    <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                    }`} data-aos="fade-up" data-aos-duration="1000">
                        Programming Languages
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {skills.programmingLanguages.map((skill, index) => (
                            <SkillCard key={skill.name} skill={skill} index={index} />
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
                            <SkillCard key={skill.name} skill={skill} index={index} />
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
                            <SkillCard key={skill.name} skill={skill} index={index} />
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
                            <SkillCard key={skill.name} skill={skill} index={index} />
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
            </Container>
        </div>
    );
};

export default Skill;

