import React, { useState, useEffect } from 'react'
import HomeAvatar from '../assets/images/HomeAvatar.png'
import { useTheme } from '../contexts/ThemeContext'

function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'education', 'experience', 'skills', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isDarkMode ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-700' : 'bg-white/95 backdrop-blur-md border-b border-gray-200'
    }`}>
      <nav className='flex flex-row justify-between items-center p-4 mx-4 lg:mx-10 max-w-screen-xxl'>
        {/* Logo */}
        <div 
          className="h-16 w-16 bg-white rounded-full border-2 border-black overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300" 
          onClick={() => scrollToSection('home')}
        >
          <img src={HomeAvatar} alt="HomeAvatar" className='h-16 w-16 object-cover' />
        </div>

        {/* Desktop Navigation */}
        <ul className='hidden lg:flex justify-center items-center gap-6'>
          {navItems.map((item) => (
            <li 
              key={item.id}
              className={`text-lg font-medium cursor-pointer transition-all duration-300 hover:scale-105 ${
                activeSection === item.id 
                  ? isDarkMode 
                    ? 'text-blue-400 border-b-2 border-blue-400' 
                    : 'text-blue-600 border-b-2 border-blue-600'
                  : isDarkMode 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-700 hover:text-gray-900'
              }`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Theme Toggle & Mobile Menu */}
        <div className='flex items-center gap-4'>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
              isDarkMode 
                ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200' 
                : 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
            }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
            }`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`lg:hidden border-t transition-all duration-300 ${
          isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          <ul className='flex flex-col p-4 space-y-2'>
            {navItems.map((item) => (
              <li 
                key={item.id}
                className={`text-lg font-medium cursor-pointer p-3 rounded-lg transition-all duration-300 ${
                  activeSection === item.id 
                    ? isDarkMode 
                      ? 'bg-blue-900 text-blue-400' 
                      : 'bg-blue-100 text-blue-600'
                    : isDarkMode 
                      ? 'text-gray-300 hover:bg-gray-800' 
                      : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header;