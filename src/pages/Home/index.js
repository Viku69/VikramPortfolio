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
import SplashImg from "../../assets/images/Splash.png"; // Your splash image
import Skill from "./Skill";
import ContactMe from "./ContactMe";

function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Show the splash screen for 2 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2000ms = 2 seconds

        AOS.init({ duration: 1000 });

        return () => clearTimeout(timer); // Clean up the timer
    }, []);

    return (
        <div>
            {isLoading ? (
                <div className="flex items-center justify-center h-screen bg-white animate-fadeInOut">
                    <div className="flex flex-col items-center">
                        <img src={SplashImg} alt="Splash" className="w-36 mb-4" />
                        <div className="loader animate-spin rounded-full border-t-4 border-red-700 w-10 h-10"></div>
                    </div>
                </div>
            ) : (
                <>
                    <Header />
                    <div data-aos="fade-up">
                        <AboutMe />
                    </div>
                    <div data-aos="fade-left">
                        <Education />
                    </div>
                    <div data-aos="fade-right">
                        <Experience />
                    </div>
                    <div >
                        <Skill />
                    </div>
                    <div>
                        <ContactMe />
                    </div>
                </>
            )}
        </div>
    );
}

export default Home;
