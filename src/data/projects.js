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
    shortPitch: "Command-line tool that generates custom SVG logos through interactive prompts.",
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
    alt: "CLI Logo Generator"
  },
  {
    id: "code-quiz",
    title: "Code Quiz",
    shortPitch: "Interactive web-based quiz application for testing coding knowledge.",
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
    alt: "Code Quiz Application"
  },
  {
    id: "ecommerce-backend",
    title: "E-Commerce Back-End",
    shortPitch: "RESTful API backend for e-commerce platform with full CRUD operations.",
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
    mostRelevant: true // Top project for remote SWE roles
  },
  {
    id: "fund-my-farm",
    title: "Fund My Farm",
    shortPitch: "Full-stack e-commerce platform connecting investors with agricultural opportunities.",
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
    mostRelevant: true // Top project for remote SWE roles
  },
  {
    id: "note-taker",
    title: "Note Taker",
    shortPitch: "Express.js-powered note-taking application with persistent storage.",
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
    alt: "Note Taker Application"
  },
  {
    id: "pwa-text-editor",
    title: "PWA Text Editor",
    shortPitch: "Progressive Web Application for code snippets and notes with offline functionality.",
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
    mostRelevant: true // Top project for remote SWE roles
  },
  {
    id: "readme-generator",
    title: "README Generator",
    shortPitch: "CLI tool that generates professional README files from user prompts.",
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
    alt: "README Generator"
  },
  {
    id: "social-network-api",
    title: "Social Network API",
    shortPitch: "NoSQL-based RESTful API for social networking features including thoughts, reactions, and friends.",
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
    alt: "Social Network API"
  },
  {
    id: "weather-app",
    title: "Weather App",
    shortPitch: "Global weather application providing 6-day forecasts for any city worldwide.",
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
    alt: "Weather Application"
  },
  {
    id: "weather-ways",
    title: "WeatherWays",
    shortPitch: "Web application combining 7-day weather forecasts with current traffic information.",
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
    alt: "WeatherWays Application"
  }
];

