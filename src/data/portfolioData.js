// Portfolio data structure - ready for API integration
export const portfolioData = {
  personalInfo: {
    name: "Vikram Singh",
    title: "iOS Developer & Software Engineer",
    email: "viku9667@gmail.com",
    phone: "+91 9667244829",
    location: "Hyderabad, India",
    linkedin: "https://www.linkedin.com/in/vikram-singh-182a83222/",
    github: "https://github.com/Viku69",
    summary: "Passionate iOS Developer with expertise in Swift, SwiftUI, and React Native. Experienced in building scalable mobile applications and implementing clean architecture patterns."
  },

  education: [
    {
      id: 1,
      degree: "Bachelor of Technology",
      specialization: "Computer Science and Engineering",
      institute: "Ajay Kumar Garg Engineering College (A.K.T.U.)",
      duration: "2021 – 2025",
      marks: "81.3%",
      status: "Pursuing",
      color: "from-blue-500 to-blue-700",
      icon: "🎓"
    },
    {
      id: 2,
      degree: "Intermediate",
      specialization: "Science Stream",
      institute: "Maharishi Vidya Mandir (CBSE)",
      duration: "2020",
      marks: "93%",
      status: "Completed",
      color: "from-green-500 to-green-700",
      icon: "📚"
    },
    {
      id: 3,
      degree: "High School",
      specialization: "Regular",
      institute: "Maharishi Vidya Mandir (CBSE)",
      duration: "2018",
      marks: "90.8%",
      status: "Completed",
      color: "from-violet-500 to-pink-700",
      icon: "📚"
    }
  ],

  experience: [
    {
      id: 1,
      role: "Product Engineer Trainee (iOS)",
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
      technologies: ["Swift", "SwiftUI", "UIKit", "Combine", "RESTful APIs", "MVVM"],
      color: "from-purple-500 to-purple-700"
    },
    {
      id: 2,
      role: "Programmer Analyst Trainee (iOS)",
      company: "Cognizant Technology Solutions",
      location: "Remote",
      duration: "May 2025 – Jul 2025",
      type: "Full-time",
      achievements: [
        "Designed and deployed iOS apps leveraging Swift, SwiftUI, and UIKit, boosting modularity and code reuse by 35%",
        "Created adaptive UI layouts (Storyboard & programmatic), ensuring seamless cross-device experiences",
        "Integrated RESTful APIs with URLSession, reducing response time by 15% while enhancing reliability"
      ],
      technologies: ["Swift", "SwiftUI", "UIKit", "URLSession", "Storyboard"],
      color: "from-blue-500 to-blue-700"
    },
    {
      id: 3,
      role: "Mobile App Developer Intern",
      company: "Embetter Technologies",
      location: "Remote",
      duration: "Jul 2024 – Feb 2025",
      type: "Internship",
      achievements: [
        "Built and deployed cross-platform apps using React Native for iOS & Android, reducing delivery cycle by 30%",
        "Created modular frameworks for AI-powered assistants using SwiftUI, UIKit, Combine, and Kotlin",
        "Improved backend API efficiency and query handling speed by 30%"
      ],
      technologies: ["React Native", "SwiftUI", "UIKit", "Combine", "Kotlin", "AI/ML"],
      color: "from-green-500 to-green-700"
    },
    {
      id: 4,
      role: "iOS Developer Intern",
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
    }
  ],

  projects: [
    {
      id: 1,
      name: "EarthGuard",
      description: "Machine learning-powered environmental monitoring app for CO2 emissions and water quality prediction",
      technologies: ["Swift", "SwiftUI", "CreateML", "CoreML"],
      github: "https://github.com/vikram-singh/earthguard",
      features: [
        "Developed machine learning models with CreateML & CoreML to predict CO2 emissions and water quality scores, improving accuracy by 25%",
        "Built interactive SwiftUI dashboards with data visualization and real-time ML predictions"
      ],
      color: "from-green-500 to-green-700",
      category: "iOS/ML"
    },
    {
      id: 2,
      name: "TapCart",
      description: "QR-based self-checkout solution for retail stores with comprehensive cart management and payment workflows",
      technologies: ["React Native", "FastAPI", "MySQL", "Next.js"],
      github: "https://github.com/vikram-singh/tapcart",
      features: [
        "Engineered a QR-based self-checkout solution with cart management, order placement, and payment workflows for retail stores",
        "Integrated FastAPI backend with authentication, order processing, reporting, and invoice generation",
        "Leveraged Context API and state management for seamless cross-platform experience"
      ],
      color: "from-blue-500 to-blue-700",
      category: "Full Stack"
    },
    {
      id: 3,
      name: "TapCart",
      description: "QR-based self-checkout solution for retail stores with comprehensive cart management and payment workflows",
      technologies: ["React Native", "FastAPI", "MySQL", "Next.js"],
      github: "https://github.com/vikram-singh/tapcart",
      features: [
        "Engineered a QR-based self-checkout solution with cart management, order placement, and payment workflows for retail stores",
        "Integrated FastAPI backend with authentication, order processing, reporting, and invoice generation",
        "Leveraged Context API and state management for seamless cross-platform experience"
      ],
      color: "from-blue-500 to-blue-700",
      category: "Full Stack"
    }
  ],

  skills: {
    programmingLanguages: [
      { name: "Swift", level: 95, color: "from-orange-400 to-orange-600" },
      { name: "JavaScript", level: 85, color: "from-yellow-400 to-yellow-600" },
      { name: "C++", level: 80, color: "from-blue-400 to-blue-600" },
      { name: "Java", level: 75, color: "from-red-400 to-red-600" },
      { name: "C", level: 70, color: "from-gray-400 to-gray-600" }
    ],
    frameworks: [
      { name: "SwiftUI", level: 90, color: "from-blue-500 to-blue-700" },
      { name: "UIKit", level: 85, color: "from-blue-400 to-blue-600" },
      { name: "React Native", level: 80, color: "from-cyan-400 to-cyan-600" },
      { name: "Node.js", level: 75, color: "from-green-400 to-green-600" },
      { name: "Express.js", level: 70, color: "from-gray-400 to-gray-600" },
      { name: "Tailwind CSS", level: 85, color: "from-teal-400 to-teal-600" }
    ],
    databases: [
      { name: "MySQL", level: 80, color: "from-blue-600 to-blue-800" },
      { name: "MongoDB", level: 75, color: "from-green-500 to-green-700" }
    ],
    cloudDevOps: [
      { name: "AWS", level: 70, color: "from-orange-500 to-orange-700" },
      { name: "Docker", level: 65, color: "from-blue-500 to-blue-700" },
      { name: "CI/CD", level: 70, color: "from-purple-500 to-purple-700" }
    ],
    tools: ["Xcode", "VS Code", "GitHub", "Postman", "Jira", "Trello"],
    practices: ["Agile (Scrum)", "Test-Driven Development (TDD)", "Clean Architecture", "RESTful API Design", "MVVM", "Microservices"]
  },

  achievements: [
    {
      id: 1,
      title: "Published Research Paper",
      description: "Enhanced Sales Forecasting Using Machine Learning",
      publication: "IEEE Xplore (2025)",
      year: "2025",
      link: "#",
      icon: "📄"
    },
    {
      id: 2,
      title: "Competitive Programming",
      description: "Solved 500+ data structures & algorithms problems",
      platforms: "LeetCode, Codeforces, Coding Ninjas",
      year: "2023-2025",
      icon: "🏆"
    },
    {
      id: 3,
      title: "National Ranking",
      description: "Ranked in top 15% of national-level competitive coding contests",
      platforms: "LeetCode/Codeforces",
      year: "2023-2025",
      icon: "🥇"
    }
  ],

  positions: [
    {
      id: 1,
      title: "Machine Learning Center of Excellence (MLCOE)",
      organization: "Campus Organization",
      duration: "2023-2025",
      responsibilities: [
        "Collaborated on ML-powered MERN stack projects impacting 200+ students across campus",
        "Led peer-to-peer workshops on machine learning fundamentals, mentoring 50+ learners"
      ],
      icon: "🎓"
    }
  ]
};

// API integration functions (for future use)
export const fetchPortfolioData = async () => {
  // This will be replaced with actual API calls
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(portfolioData);
    }, 1000);
  });
};

export const updatePortfolioData = async (data) => {
  // This will be replaced with actual API calls
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, data });
    }, 1000);
  });
};



