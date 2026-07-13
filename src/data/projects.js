// Project data for case studies
import cityTeleCoinInmateTablet from "../assets/projectPics/cityTeleCoinInmateTablet.svg";
import cityTeleCoinPhoneManagerAdmin from "../assets/projectPics/cityTeleCoinPhoneManagerAdmin.svg";
import cityTeleCoinPhoneManager from "../assets/projectPics/cityTeleCoinPhoneManager.png";
import fairShakeEstimateEngine from "../assets/projectPics/fairShakeEstimateEngine.svg";
import labReferenceFlagApi from "../assets/projectPics/labReferenceFlagApi.svg";
import wellnessProtocolTracker from "../assets/projectPics/wellnessProtocolTracker.svg";
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
    id: "citytelecoin-inmate-tablet",
    title: "City Tele Coin — Inmate Tablet (Android Kiosk)",
    roleLabel: "Production · Android UI & Accessibility",
    shortPitch:
      "Native Android (Kotlin) kiosk app deployed on locked-down tablets inside correctional facilities — the sole interface inmates use for VoIP calls, video visits, messaging, commissary, biometric login, and prepaid apps. Modernized the UI layer and improved accessibility for assistive-technology and Spanish-speaking users.",
    problem:
      "Mission-critical kiosk app needed Android UI modernization, bilingual support, and production bug fixes across VoIP calling, biometric login, billing services, and three generations of facility tablet hardware — all without standard Android navigation.",
    whatIBuilt: [
      "Modernized main menu and free apps screens from legacy GridView to RecyclerView + ViewHolder, eliminating visual rendering bugs on facility tablets",
      "Migrated 6+ major screens from findViewById to type-safe View Binding, reducing view lookup errors across Menu, FreeApps, AdminOptions, and related flows",
      "Implemented full English/Spanish localization with runtime language toggle via LanguageHelper — fixed locale propagation bugs across Activities and background Services (notifications, inactivity timer)",
      "Added Android accessibility support: TalkBack-ready contentDescription labels on phone dialer and app-wide interactive elements, plus focus management on key screens",
      "Resolved production bugs on multi-generation tablet hardware, including gen-2 VoIP audio routing, context/locale regressions after login, and anti-fraud session integrity (rapid app-switching detection)",
      "Improved kiosk UX with custom WebView navigation controls so users can return to the main menu without system navigation bar access",
    ],
    techStack: [
      "Kotlin",
      "Android SDK",
      "RecyclerView",
      "View Binding",
      "Material Design",
      "CameraX",
      "Android SIP/VoIP",
      "WebView",
      "Volley",
      "Kotlin Coroutines",
      "Foreground Services",
      "TalkBack",
      "i18n",
    ],
    impact: [
      "Maintained and improved a mission-critical kiosk app serving incarcerated users in correctional facilities nationwide",
      "Modernized UI layer across menu, apps, and WebView-based features (video visits, messaging, commissary, education)",
      "Improved accessibility for Spanish-speaking users and assistive-technology users in a locked-down kiosk environment",
    ],
    links: { github: null, live: null },
    image: cityTeleCoinInmateTablet,
    alt: "Generic Android kiosk tablet interface illustration for Inmate Tablet app",
    proprietary: true,
    relevanceTier: "primary",
    status: "Production",
    featured: true,
    lastUpdated: "2025",
    highlights: [
      "Migrated legacy GridView layouts to RecyclerView + View Binding across 6+ major screens",
      "Built English/Spanish i18n with runtime toggle and locale fixes across Activities and Services",
      "Added TalkBack labels and focus management; resolved multi-generation hardware production bugs",
    ],
  },
  {
    id: "citytelecoin-phone-manager-admin",
    title: "City Tele Coin — Phone Manager (Internal Admin)",
    roleLabel: "Production · React Enterprise UI",
    shortPitch:
      "Staff-facing React admin dashboard for correctional facility operations — tablet app management, website allowlists, 3rd-party APK configuration, Direct Pay tooling, and SIP/VoIP utilities. Built and extended production modules on an existing enterprise codebase.",
    problem:
      "Facility administrators need centralized control over inmate tablet apps, website access, payment transactions, and telecom infrastructure — all within a role-protected enterprise dashboard serving staff nationwide.",
    whatIBuilt: [
      "Built tablet app management suite: tabbed hub for facility-scoped app config, website allowlists, 3rd-party APK upload/edit, category CRUD, and religious books content per facility",
      "Implemented global enable/disable workflows with confirmation modals for 3rd-party apps and websites across all facilities",
      "Delivered Direct Pay admin modules — online customer account search with CSV export and transaction edit/void flows with payment and transaction-type mapping",
      "Built SIP registration search and Kamailio trusted-IP CRUD pages for corrections VoIP infrastructure troubleshooting",
      "Extended shared components (Search, AddEdit, file uploader) and wired lazy-loaded routes into existing role-based routing (RouteManager.js)",
      "Shipped admin UX improvements: phone on/off confirmation modals, message attachment image zoom, facility form escalation logic, and printable commission report styling",
    ],
    techStack: [
      "React 18",
      "JavaScript",
      "Axios",
      "React Router v5",
      "Create React App",
      "Docker",
      "nginx",
    ],
    impact: [
      "~99 commits across production modules (Feb 2024 – Dec 2025) serving correctional facility staff nationwide",
      "Tablet management modules control what incarcerated users access on facility kiosk hardware",
      "Direct Pay tools support real financial transaction administration in a production payment system",
    ],
    links: { github: null, live: null },
    image: cityTeleCoinPhoneManagerAdmin,
    alt: "CTC Phone Manager internal admin dashboard illustration",
    proprietary: true,
    relevanceTier: "primary",
    status: "Production",
    featured: true,
    lastUpdated: "2025",
    highlights: [
      "Built tablet app management suite — facility apps, website allowlists, 3rd-party APKs, and categories",
      "Delivered Direct Pay account search and transaction edit/void for live financial transactions",
      "SIP/Kamailio admin pages, role-based routing, and confirmation modals for destructive actions",
    ],
  },
  {
    id: "citytelecoin-phone-manager",
    title: "City Tele Coin — Phone Manager (Customer Portal)",
    roleLabel: "Production · Accessibility & UX",
    shortPitch:
      "Internal enterprise telecom portal where facility visitors fund inmate phone accounts, purchase calling cards, and buy messaging/tablet time. Led WCAG remediation and payment-flow reliability across 15+ production PHP pages.",
    problem:
      "Legacy customer portal needed WCAG compliance and payment-flow stability for real financial transactions serving visitors nationwide.",
    whatIBuilt: [
      "Led accessibility remediation across 15+ customer-facing pages — ARIA labeling, WCAG AA contrast fixes, keyboard navigation, semantic HTML, and alt text",
      "Validated compliance with Google Lighthouse (100% accessibility scores) and WAVE accessibility checker",
      "Modernized UI with Materialize CSS — responsive layout, typography, mobile navigation, and Google Translate integration",
      "Resolved production payment-flow bugs in multi-step checkout (calling cards, account funding, messaging/tablet time) including null facility IDs, session/redirect issues, and declined-payment handling",
      "Added PayPal vs. credit card payment option UI and rebranded Tablet Time to Messaging & Tablet Time across flows",
    ],
    techStack: [
      "PHP",
      "PostgreSQL",
      "jQuery",
      "Materialize CSS",
      "WCAG 2.1",
      "ARIA",
      "Lighthouse",
      "WAVE",
      "NMI/Heartland",
      "Docker",
      "Ansible",
    ],
    impact: [
      "15+ pages brought to WCAG accessibility compliance with 100% Lighthouse accessibility scores",
      "114+ production commits across customer payment flows",
      "3 multi-step payment flows stabilized (account funding, calling cards, messaging/tablet time)",
    ],
    links: { github: null, live: null },
    image: cityTeleCoinPhoneManager,
    alt: "City Tele Coin customer portal landing page",
    proprietary: true,
    relevanceTier: "primary",
    status: "Production",
    featured: true,
    lastUpdated: "2023",
    highlights: [
      "Led WCAG remediation across 15+ customer-facing PHP pages with Lighthouse 100% accessibility scores",
      "Stabilized 3 multi-step payment flows processing real financial transactions",
      "Modernized legacy portal UX with Materialize CSS, mobile fixes, and Google Translate",
    ],
  },
  {
    id: "lab-reference-flag-api",
    title: "Lab Reference Flag API",
    roleLabel: "Backend · Healthcare",
    shortPitch:
      "REST API for clinical lab value interpretation — accepts panel results and returns reference ranges, abnormal flags (Low/Normal/High/Critical), and clinical context across CBC, CMP, lipid, thyroid, and vitamin panels. Built on .NET 9 with a real healthcare data domain.",
    problem:
      "Lab results need consistent interpretation against evidence-based reference ranges with age/sex adjustments, unit conversion, and actionable flagging — a natural fit for structured API design in a regulated data domain.",
    whatIBuilt: [
      "ASP.NET Core REST API with single and batch lab result interpretation endpoints",
      "Domain models and seed data for 30+ biomarkers across CBC, CMP, lipid, thyroid, inflammatory, and vitamin/mineral panels",
      "Entity Framework Core migrations with PostgreSQL for biomarker and reference range persistence",
      "Flag logic (Low, Normal, High, Critical) with age/sex-based range adjustments and conventional/SI unit conversion",
      "FluentValidation for request models, xUnit tests for interpretation and validation services, and Scalar API documentation",
      "Docker Compose setup for local PostgreSQL development",
    ],
    techStack: [
      ".NET 9",
      "ASP.NET Core",
      "C#",
      "Entity Framework Core",
      "PostgreSQL",
      "FluentValidation",
      "OpenAPI",
      "Scalar",
      "xUnit",
      "Docker",
    ],
    impact: [
      "Demonstrates clean .NET 9 API architecture with a healthcare/life-sciences domain model",
      "Covers common clinical panels with evidence-based reference ranges and critical value flagging",
      "Production-ready patterns: validation, migrations, tests, and interactive API docs",
    ],
    links: {
      github: "https://github.com/GrassHopper12345/Lab-Reference-Flag-API",
      live: null,
    },
    image: labReferenceFlagApi,
    alt: "Lab Reference Flag API — lab result interpretation interface illustration",
    relevanceTier: "primary",
    status: "Production-style",
    featured: true,
    lastUpdated: "2026",
    highlights: [
      "REST API interprets 30+ biomarkers with Low/Normal/High/Critical flagging",
      ".NET 9 + EF Core + PostgreSQL with seeded reference ranges and unit conversion",
      "FluentValidation, xUnit tests, and Scalar interactive API documentation",
    ],
  },
  {
    id: "wellness-protocol-tracker",
    title: "Wellness Protocol Tracker",
    roleLabel: "Full-stack · HealthTech",
    shortPitch:
      "Full-stack longitudinal health tracking app for supplement protocols, symptom logs, lab values, and medical documents — built for individuals with complex medical histories who need structured, evidence-based health records over time.",
    problem:
      "People managing multi-stage supplement protocols, lab panels, and medical records need a single system to track stages, dosing, daily symptoms, lab trends, and private document storage — not a generic wellness app.",
    whatIBuilt: [
      "Next.js 14 App Router application with TypeScript, Tailwind CSS, and shadcn/ui components",
      "Protocol management with sequential stages, supplement schedules (dosage, frequency, timing), and dashboard overview",
      "Lab value tracking with custom reference ranges, out-of-range flagging, and Recharts line visualizations over time",
      "Symptom and daily log entries tied to protocol stages with timeline views for trend identification",
      "Private medical document storage via Google Cloud Storage with signed URL access (15-minute expiry)",
      "Prisma ORM + PostgreSQL schema, TanStack Query for server state, React Hook Form + Zod validation, and Vitest unit tests",
    ],
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Recharts",
      "Prisma",
      "PostgreSQL",
      "Google Cloud Storage",
      "Vitest",
      "Docker",
    ],
    impact: [
      "End-to-end full-stack app aligning with current production stack (Next.js, TypeScript, TanStack Query, PostgreSQL)",
      "Structured health record keeping for complex protocols, lab panels, and medical documents",
      "Private document storage with signed URLs — no publicly accessible medical files",
    ],
    links: {
      github: "https://github.com/GrassHopper12345/Wellness-Protocol-Tracker",
      live: null,
    },
    image: wellnessProtocolTracker,
    alt: "Wellness Protocol Tracker dashboard illustration",
    relevanceTier: "primary",
    status: "Production-style",
    featured: true,
    lastUpdated: "2026",
    highlights: [
      "Next.js 14 full-stack app: protocols, stages, supplements, lab charts, and document storage",
      "Prisma + PostgreSQL, TanStack Query, React Hook Form + Zod, and GCS signed URLs",
      "Longitudinal health tracking for complex medical histories and VA disability documentation",
    ],
  },
  {
    id: "fairshake-estimate-engine",
    title: "FairShake Estimate Engine",
    roleLabel: "Backend · Microservice",
    shortPitch:
      "REST API microservice design for generating structured cost estimates for home repair and construction projects — itemized material/labor breakdowns and PDF quote generation for FairShake Construction LLC.",
    problem:
      "Handyman and home repair businesses need repeatable, itemized estimates from project inputs (dimensions, materials, labor rates) — delivered as structured API responses and client-ready PDF quotes.",
    whatIBuilt: [
      "API specification for project estimation across drywall, painting, bathroom remodel, water damage repair, and hourly handyman scope",
      "Structured cost breakdown model: materials, labor, waste factors, and configurable regional rate management",
      "PDF quote generation design with itemized line items, scope summary, contractor info, and signature line",
      "FastAPI + Pydantic v2 + SQLAlchemy + PostgreSQL + ReportLab tech stack architecture documented for implementation",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "Pydantic",
      "SQLAlchemy",
      "PostgreSQL",
      "ReportLab",
      "pytest",
      "Docker",
      "Uvicorn",
    ],
    impact: [
      "Demonstrates cross-language API design (Python/FastAPI) with real business logic for construction estimating",
      "Structured estimate and PDF quote workflow for a live handyman business",
      "API-first microservice architecture with admin rate management endpoints",
    ],
    links: {
      github: "https://github.com/GrassHopper12345/FairShake-Estimate-Engine",
      live: null,
    },
    image: fairShakeEstimateEngine,
    alt: "FairShake Estimate Engine API illustration",
    relevanceTier: "secondary",
    status: "Updating",
    lastUpdated: "2026",
    highlights: [
      "FastAPI microservice design for itemized construction cost estimates",
      "Supports drywall, painting, remodel, and water damage project types",
      "PDF quote generation and admin rate/material management endpoints",
    ],
  },
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
    lastUpdated: "2026",
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
    lastUpdated: "2026",
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
    lastUpdated: "2026",
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

