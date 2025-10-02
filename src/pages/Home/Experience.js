import React from 'react';
import ExperienceAvatar from '../../assets/images/ExperienceAvatar.png';
import ExpCard from '../../components/ExpCard';
import CahsCryImg from '../../assets/images/cashcry1.png'
import EmbetterImg from '../../assets/images/EmbetterLogo.png'
import CogImage from '../../assets/images/CogImage.png'
import LJIImage from '../../assets/images/LJIImage.jpeg'  
import { useTheme } from '../../contexts/ThemeContext';

const ExperienceDetails = [
    {
        id: 1,
        role: "Product Engineer Trainee (iOS)",
        imageComponent: <img src={LJIImage} alt="LJIImage" className="w-full h-full object-cover" />,
        company: "Loyalty Juggernaut Inc.",
        location: "Hyderabad",
        duration: "Aug 2025 – Present",
        type: "Full-time",
        achievements: [
            "Engineered enterprise-grade iOS loyalty apps using Swift, SwiftUI, and UIKit, increasing app performance and reducing load time by 20%",
            "Implemented scalable MVVM architecture, cutting UI-related bugs by 30% and enabling faster feature rollouts",
            "Optimized RESTful API integrations with Combine & async/await, improving data throughput and reducing latency by 25%",
            "Delivered reusable UI components, accelerating sprint delivery by 15% and standardizing design"
        ],
        technologies: ["Swift", "SwiftUI", "UIKit", "Combine", "RESTful APIs", "MVVM"]
    },
    {
        id: 2,
        role: "Programmer Analyst Trainee (iOS)",
        imageComponent: <img src={CogImage} alt="CognizantImage" className="w-full h-full object-cover" />,
        company: "Cognizant Technology Solutions",
        location: "Remote",
        duration: "May 2025 – Jul 2025",
        type: "Full-time",
        achievements: [
            "Designed and deployed iOS apps leveraging Swift, SwiftUI, and UIKit, boosting modularity and code reuse by 35%",
            "Created adaptive UI layouts (Storyboard & programmatic), ensuring seamless cross-device experiences",
            "Integrated RESTful APIs with URLSession, reducing response time by 15% while enhancing reliability"
        ],
        technologies: ["Swift", "SwiftUI", "UIKit", "URLSession", "Storyboard"]
    },
    {
        id: 3,
        role: "Mobile App Developer Intern",
        imageComponent: <img src={EmbetterImg} alt="MlcoeImage" className="w-full h-full object-cover" />,
        company: "Embetter Technologies",
        location: "Remote",
        duration: "Jul 2024 – Feb 2025",
        type: "Internship",
        achievements: [
            "Built and deployed cross-platform apps using React Native for iOS & Android, reducing delivery cycle by 30%",
            "Created modular frameworks for AI-powered assistants using SwiftUI, UIKit, Combine, and Kotlin",
            "Improved backend API efficiency and query handling speed by 30%"
        ],
        technologies: ["React Native", "SwiftUI", "UIKit", "Combine", "Kotlin", "AI/ML"]
    },
    {
      id: 4,
      role: "iOS Developer Intern",
      imageComponent: <img src={CahsCryImg} alt="MlcoeImage" className="w-full h-full object-cover" />,
      company: "CashCry",
      location: "Remote",
      duration: "Oct 2023 – Dec 2023",
      type: "Internship",
      achievements: [
        "Optimized user navigation with SwiftUI and UIKit, increasing average session length by 15%.",
        "Developed a referral page using UIActivityViewController, which boosted user engagement by 20%.",
      ],
      technologies: ["SwiftUI", "UIKit", "Combine"],
      color: "from-green-500 to-green-700"
    },
    
    
];

function Experience() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`my-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Section Header */}
      <div className='p-5 mx-4 sm:mx-6 lg:mx-10 my-auto max-w-screen-xxl'>
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`} data-aos="fade-up" data-aos-duration="1000">
            Work Experience
          </h2>
          <div className={`w-24 h-1 mx-auto rounded-full ${
            isDarkMode ? 'bg-gradient-to-r from-blue-400 to-purple-500' : 'bg-gradient-to-r from-blue-500 to-purple-600'
          }`} data-aos="fade-up" data-aos-delay="200" data-aos-duration="800"></div>
          <p className={`text-base sm:text-lg mt-6 max-w-2xl mx-auto px-4 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`} data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            My professional journey in software development, showcasing growth and impact across different roles and technologies.
          </p>
        </div>
      </div>

      <div className='p-5 mx-4 sm:mx-6 lg:mx-10 my-auto max-w-screen-xxl'>
        {/* Responsive Cards Layout */}
        <div className="block lg:hidden">
          {/* Mobile/Tablet: Vertical Stack */}
          <div className="space-y-6">
            {ExperienceDetails.map((data, index) => (
              <div key={data.id} className="flex justify-center" data-aos="fade-up" data-aos-delay={index * 200} data-aos-duration="1000">
                <ExpCard 
                  Role={data.role} 
                  ImageComponent={data.imageComponent}
                  company={data.company}
                  location={data.location}
                  duration={data.duration}
                  type={data.type}
                  achievements={data.achievements}
                  technologies={data.technologies}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          {/* Desktop: Horizontal Scroll */}
          <div className={`flex overflow-x-auto w-full items-center scrollbar-hide pb-4 ${
            isDarkMode ? 'bg-gray-900' : 'bg-white'
          }`} style={{ scrollBehavior: 'smooth' }}>
            <div className="flex items-center gap-6 px-4">
              {ExperienceDetails.map((data, index) => (
                <div key={data.id} className="flex-none" data-aos="slide-right" data-aos-delay={index * 200} data-aos-duration="1000">
                  <ExpCard 
                    Role={data.role} 
                    ImageComponent={data.imageComponent}
                    company={data.company}
                    location={data.location}
                    duration={data.duration}
                    type={data.type}
                    achievements={data.achievements}
                    technologies={data.technologies}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;