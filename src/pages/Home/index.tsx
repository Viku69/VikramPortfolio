import React, { useEffect, useState, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Header } from "../../components/Header";
import { useTheme } from "../../contexts/ThemeContext";
import SplashImg from "../../assets/images/Splash.png";
import { Section } from "../../components/ui/Section";

// Lazy load page components
const AboutMe = React.lazy(() => import("./AboutMe"));
const Education = React.lazy(() => import("./Education"));
const Experience = React.lazy(() => import("./Experience"));
const Skill = React.lazy(() => import("./Skill"));
const Project = React.lazy(() => import("./Project"));
const Achievements = React.lazy(() => import("./Achievements"));
const ContactMe = React.lazy(() => import("./ContactMe"));

// Loading component
const LoadingSpinner: React.FC = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`flex items-center justify-center h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="flex flex-col items-center">
        <div className={`loader animate-spin rounded-full border-t-4 w-10 h-10 ${
          isDarkMode ? 'border-blue-400' : 'border-red-700'
        }`}></div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { isDarkMode } = useTheme();

    useEffect(() => {
        // Show the splash screen for 2 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Initialize AOS after a small delay to prevent layout shifts
        const timer = setTimeout(() => {
            AOS.init({
                duration: 1000,
                easing: 'ease-out-cubic',
                once: true,
                offset: 50,
                delay: 0,
                disable: false,
                startEvent: 'DOMContentLoaded',
                initClassName: 'aos-init',
                animatedClassName: 'aos-animate',
                useClassNames: false,
                disableMutationObserver: false,
                debounceDelay: 50,
                throttleDelay: 99,
            });
            
            document.body.classList.add('aos-ready');
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`w-full min-h-screen transition-colors duration-300 ${
            isDarkMode ? 'bg-gray-900' : 'bg-white'
        }`}>
            {isLoading ? (
                <div className={`w-full flex items-center justify-center h-screen animate-fadeInOut ${
                    isDarkMode ? 'bg-gray-900' : 'bg-white'
                }`}>
                    <div className="flex flex-col items-center">
                        <img src={SplashImg} alt="Splash" className="w-36 mb-4" />
                        <div className={`loader animate-spin rounded-full border-t-4 w-10 h-10 ${
                            isDarkMode ? 'border-blue-400' : 'border-red-700'
                        }`}></div>
                    </div>
                </div>
            ) : (
                <div className="w-full">
                    <Header />
                    <main className="w-full pt-16 sm:pt-20">
                        <Suspense fallback={<LoadingSpinner />}>
                            <Section id="home" className="w-full">
                                <AboutMe />
                            </Section>
                            <Section id="education" className="w-full" data-aos="fade-left">
                                <Education />
                            </Section>
                            <Section id="experience" className="w-full" data-aos="fade-right">
                                <Experience />
                            </Section>
                            <Section id="skills" className="w-full" data-aos="fade-up">
                                <Skill />
                            </Section>
                            <Section id="projects" className="w-full" data-aos="fade-left">
                                <Project />
                            </Section>
                            <Section id="achievements" className="w-full" data-aos="fade-right">
                                <Achievements />
                            </Section>
                            <Section id="contact" className="w-full" data-aos="fade-up">
                                <ContactMe />
                            </Section>
                        </Suspense>
                    </main>
                </div>
            )}
        </div>
    );
};

export default Home;

