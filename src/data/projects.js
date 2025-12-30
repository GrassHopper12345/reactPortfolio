// Project data for case studies
import cliLogoGen from "../assets/projectPics/cliLogoGenerator.png";
import codeQuiz from "../assets/projectPics/CodeQuiz.png";
import eCommerce from "../assets/projectPics/E-Commerce-Back-End.png";
import fundMyFarm from "../assets/projectPics/Fund_My_Farm.png";
import noteTaker from "../assets/projectPics/NoteTaker.png";
import pwa from "../assets/projectPics/PWA-TextEditor.png";
import readmeGen from "../assets/projectPics/ReadMEGenerator.png";
import socialNetwork from "../assets/projectPics/Social-Network-API.png";
import weatherApp from "../assets/projectPics/weatherApp.png";
import weatherWays from "../assets/projectPics/WeatherWays.png";

export const projects = [
  {
    id: "cli-logo-generator",
    title: "CLI Logo Generator",
    roleLabel: "CLI",
    shortPitch: "Command-line tool that generates custom SVG logos through interactive prompts. Demonstrates Node.js CLI development, file system operations, and input validation.",
    problem: "Designers and developers needed a quick way to generate simple SVG logos without opening design software.",
    whatIBuilt: [
      "Interactive CLI using Inquirer.js for user input collection",
      "SVG generation engine with customizable shapes, colors, and text",
      "File system integration to save generated logos",
      "Input validation and error handling"
    ],
    techStack: ["Node.js", "Inquirer.js", "SVG", "File System"],
    impact: [
      "Enables rapid logo prototyping for projects"
    ],
    links: {
      github: "https://github.com/GrassHopper12345/logoGenerator",
      live: null
    },
    image: cliLogoGen,
    alt: "CLI Logo Generator",
    relevanceTier: "experimental",
    status: "Legacy",
    highlights: [
      "CLI development with Inquirer.js for structured user input",
      "SVG generation with dynamic shape and color configuration",
      "File system operations and input validation"
    ]
  },
  {
    id: "code-quiz",
    title: "Code Quiz",
    roleLabel: "Frontend",
    shortPitch: "Interactive web-based quiz application for testing coding knowledge. Demonstrates DOM manipulation, state management, and client-side data persistence.",
    problem: "Students needed a way to test their web development knowledge with immediate feedback.",
    whatIBuilt: [
      "Timer-based quiz system with score tracking",
      "Dynamic question rendering with multiple choice answers",
      "Score persistence using localStorage",
      "Responsive design for mobile and desktop"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
    impact: [
      "Helps students assess their coding knowledge"
    ],
    links: {
      github: "https://github.com/GrassHopper12345/codeQuiz",
      live: null
    },
    image: codeQuiz,
    alt: "Code Quiz Application",
    relevanceTier: "experimental",
    status: "Legacy",
    highlights: [
      "Timer-based state management and score tracking",
      "Dynamic DOM manipulation for question rendering",
      "Client-side data persistence with localStorage"
    ]
  },
  {
    id: "ecommerce-backend",
    title: "E-Commerce Back-End",
    roleLabel: "Backend",
    shortPitch: "RESTful API backend for e-commerce platform with full CRUD operations. Demonstrates SQL database design, ORM integration, and REST API architecture.",
    problem: "E-commerce applications require robust backend systems to manage products, categories, and inventory.",
    whatIBuilt: [
      "RESTful API with Express.js and Sequelize ORM",
      "Database models for products, categories, tags, and product tags",
      "CRUD endpoints for all entities",
      "MySQL database integration with environment variable configuration"
    ],
    techStack: ["Node.js", "Express.js", "Sequelize", "MySQL", "dotenv"],
    impact: [
      "Provides scalable foundation for e-commerce operations"
    ],
    links: {
      github: "https://github.com/GrassHopper12345/ORM-E-Commerce-BE",
      live: null
    },
    image: eCommerce,
    alt: "E-Commerce Back-End API",
    relevanceTier: "primary",
    status: "Production-style",
    featured: true,
    lastUpdated: "2024",
    highlights: [
      "RESTful API architecture with Express.js and Sequelize ORM",
      "SQL database design with relational models (products, categories, tags)",
      "Full CRUD operations with proper error handling"
    ]
  },
  {
    id: "fund-my-farm",
    title: "Fund My Farm",
    roleLabel: "Full-stack",
    shortPitch: "Full-stack e-commerce platform connecting investors with agricultural opportunities. Demonstrates MERN stack, JWT authentication, and full-stack data flow.",
    problem: "Farmers needed a modern platform to showcase their agriculture and accept investments online.",
    whatIBuilt: [
      "Full-stack MERN application with user authentication",
      "Product catalog with search and filtering capabilities",
      "Shopping cart and checkout functionality",
      "Investment reservation system",
      "Team collaboration using Git workflow"
    ],
    techStack: ["MERN Stack", "MongoDB", "Express.js", "React", "Node.js", "JWT", "Bcrypt"],
    impact: [
      "Enables farmers to reach broader investor base"
    ],
    links: {
      github: "https://github.com/GrassHopper12345/fund-my-farm",
      live: null
    },
    image: fundMyFarm,
    alt: "Fund My Farm E-Commerce Platform",
    relevanceTier: "primary",
    status: "Production-style",
    featured: true,
    lastUpdated: "2024",
    highlights: [
      "Full-stack MERN application with JWT authentication and password hashing",
      "REST API with MongoDB for product catalog and cart management",
      "React frontend with search, filtering, and checkout functionality"
    ]
  },
  {
    id: "note-taker",
    title: "Note Taker",
    roleLabel: "Backend",
    shortPitch: "Express.js-powered note-taking application with persistent storage. Demonstrates REST API development, file-based data persistence, and route handling.",
    problem: "Users needed a simple, fast way to create and manage notes without complex features.",
    whatIBuilt: [
      "RESTful API for note CRUD operations",
      "JSON-based file storage system",
      "Express.js server with route handling",
      "Frontend interface for note management"
    ],
    techStack: ["Node.js", "Express.js", "JSON", "File System"],
    impact: [
      "Provides lightweight alternative to complex note apps"
    ],
    links: {
      github: "https://github.com/GrassHopper12345/NoteTaker",
      live: null
    },
    image: noteTaker,
    alt: "Note Taker Application",
    relevanceTier: "experimental",
    status: "Legacy",
    highlights: [
      "RESTful API with Express.js for CRUD operations",
      "JSON-based file storage for data persistence",
      "Route handling and error management"
    ]
  },
  {
    id: "pwa-text-editor",
    title: "PWA Text Editor",
    roleLabel: "Frontend",
    shortPitch: "Progressive Web Application for code snippets and notes with offline functionality. Demonstrates service workers, client-side storage, and PWA architecture.",
    problem: "Developers needed a text editor that works offline and syncs when connection is restored.",
    whatIBuilt: [
      "Service Worker implementation for offline functionality",
      "Cache API integration for asset storage",
      "IndexedDB for local data persistence",
      "Installable PWA with manifest.json",
      "Code syntax highlighting support"
    ],
    techStack: ["JavaScript", "Service Workers", "Cache API", "IndexedDB", "Webpack", "PWA"],
    impact: [
      "Enables productivity without internet connection"
    ],
    links: {
      github: "https://github.com/GrassHopper12345/progressiveWebApplication-TextEditor",
      live: null
    },
    image: pwa,
    alt: "PWA Text Editor",
    relevanceTier: "secondary",
    status: "Polishing",
    highlights: [
      "Service Worker implementation for offline functionality and asset caching",
      "IndexedDB for local data persistence and sync",
      "PWA manifest and installable web app architecture"
    ]
  },
  {
    id: "readme-generator",
    title: "README Generator",
    roleLabel: "CLI",
    shortPitch: "CLI tool that generates professional README files from user prompts. Demonstrates Node.js CLI development, template generation, and file system operations.",
    problem: "Developers spend significant time writing README files, often with inconsistent formatting.",
    whatIBuilt: [
      "Interactive CLI with Inquirer.js for structured input",
      "Template-based README generation",
      "Automatic badge and license section generation",
      "Markdown formatting with proper structure"
    ],
    techStack: ["Node.js", "Inquirer.js", "File System", "Markdown"],
    impact: [
      "Standardizes README quality across projects"
    ],
    links: {
      github: "https://github.com/GrassHopper12345/readMeGenerator",
      live: null
    },
    image: readmeGen,
    alt: "README Generator",
    relevanceTier: "experimental",
    status: "Legacy",
    highlights: [
      "Interactive CLI with Inquirer.js for structured user input",
      "Template-based file generation with Markdown formatting",
      "File system operations for README creation"
    ]
  },
  {
    id: "social-network-api",
    title: "Social Network API",
    roleLabel: "Backend",
    shortPitch: "NoSQL-based RESTful API for social networking features including thoughts, reactions, and friends. Demonstrates MongoDB data modeling, REST API design, and NoSQL database operations.",
    problem: "Social applications need scalable APIs to handle user interactions, thoughts, and relationships.",
    whatIBuilt: [
      "MongoDB database with Mongoose ODM",
      "RESTful API endpoints for users, thoughts, reactions, and friends",
      "Date formatting with Moment.js",
      "CRUD operations for all entities",
      "Data seeding capabilities"
    ],
    techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Moment.js"],
    impact: [
      "Provides foundation for social networking features"
    ],
    links: {
      github: "https://github.com/GrassHopper12345/Social-Network-API",
      live: null
    },
    image: socialNetwork,
    alt: "Social Network API",
    relevanceTier: "primary",
    status: "Production-style",
    featured: true,
    lastUpdated: "2024",
    highlights: [
      "RESTful API with MongoDB and Mongoose ODM for data modeling",
      "CRUD operations for users, thoughts, reactions, and friend relationships",
      "NoSQL database design with proper schema relationships"
    ]
  },
  {
    id: "weather-app",
    title: "Weather App",
    roleLabel: "Frontend",
    shortPitch: "Global weather application providing 6-day forecasts for any city worldwide. Demonstrates third-party API integration, data visualization, and error handling.",
    problem: "Users needed quick access to weather information for multiple cities with extended forecasts.",
    whatIBuilt: [
      "Weather API integration for global city data",
      "6-day forecast display with current conditions",
      "Quick links for major U.S. cities",
      "Responsive design for mobile and desktop",
      "Error handling for invalid city searches"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Weather API", "LocalStorage"],
    impact: [
      "Provides accessible weather information globally"
    ],
    links: {
      github: "https://github.com/GrassHopper12345/weatherApp",
      live: null
    },
    image: weatherApp,
    alt: "Weather Application",
    relevanceTier: "experimental",
    status: "Legacy",
    highlights: [
      "Third-party API integration for weather data retrieval",
      "Data visualization for 6-day forecasts and current conditions",
      "Error handling and responsive design implementation"
    ]
  },
  {
    id: "weather-ways",
    title: "WeatherWays",
    roleLabel: "Frontend",
    shortPitch: "Web application combining 7-day weather forecasts with current traffic information. Demonstrates multiple API integrations, data aggregation, and user interface design.",
    problem: "Travelers need both weather and traffic data to plan trips effectively.",
    whatIBuilt: [
      "Dual API integration for weather and traffic data",
      "7-day forecast visualization",
      "Traffic condition display",
      "City search functionality",
      "Simple, user-friendly interface"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Weather API", "Traffic API"],
    impact: [
      "Combines essential travel planning information"
    ],
    links: {
      github: "https://github.com/GrassHopper12345/WeatherWays",
      live: null
    },
    image: weatherWays,
    alt: "WeatherWays Application",
    relevanceTier: "secondary",
    status: "Polishing",
    highlights: [
      "Multiple API integrations for weather and traffic data aggregation",
      "Data visualization for 7-day forecasts and traffic conditions",
      "Search functionality and responsive user interface"
    ]
  }
];

