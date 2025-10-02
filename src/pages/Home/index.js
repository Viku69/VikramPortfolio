// import React from "react";
// import Header from "../../components/Header";
// import Education from "./Education";
// import AboutMe from "./AboutMe";
// import Experience from "./Experience";

// function Home() {
//     return (
//         <div>
//             <Header />
//             <AboutMe/>
//             <Education />
//             <Experience/>
//        </div> 
//     )
// }

// export default Home;

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../components/Header";
import Education from "./Education";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import SplashImg from "../../assets/images/Splash.png";
import Skill from "./Skill";
import ContactMe from "./ContactMe";
import Project from "./Project";
import Achievements from "./Achievements";
import { useTheme } from "../../contexts/ThemeContext";

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const { isDarkMode } = useTheme();

    useEffect(() => {
        // Show the splash screen for 2 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2000ms = 2 seconds

        return () => clearTimeout(timer); // Clean up the timer
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
                        <section id="home" className="w-full">
                            <AboutMe />
                        </section>
                        <section id="education" className="w-full" data-aos="fade-left">
                            <Education />
                        </section>
                        <section id="experience" className="w-full" data-aos="fade-right">
                            <Experience />
                        </section>
                        <section id="skills" className="w-full" data-aos="fade-up">
                            <Skill />
                        </section>
                        <section id="projects" className="w-full" data-aos="fade-left">
                            <Project />
                        </section>
                        <section id="achievements" className="w-full" data-aos="fade-right">
                            <Achievements />
                        </section>
                        <section id="contact" className="w-full" data-aos="fade-up">
                            <ContactMe />
                        </section>
                    </main>
                </div>
            )}
        </div>
    );
}

export default Home;
