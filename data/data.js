export const profile = {
  name: "Nikhil Patil",
  title: "Full Stack Python Developer",
  tagline:
    "4+ years conjuring scalable web applications with Python, Django, FastAPI, Flask and React.js.",
  summary:
    "Full Stack Python Developer with 4+ years of hands-on experience building scalable web applications using Python, Django, FastAPI, Flask, and React.js. Proven track record in designing SaaS platforms, EHR systems, and ride-sharing apps with real-time collaboration and multi-tenant architectures. Strong problem solver with a passion for clean code, system optimization, and delivering impactful user experiences.",
  email: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER,
  location: "Ahmedabad, India",
  links: {
    github: process.env.NEXT_PUBLIC_GITHUB_URL,
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL,
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
  },
};

export const experience = [
  {
    role: "Software Engineer — Full Stack Python Developer",
    company: "BMV System Integration Pvt Ltd",
    location: "Ahmedabad, India",
    period: "May 2023 — Present",
    points: [
      "Lead development of SaaS-based applications (ticket management, hospital inventory, EHR systems) with multi-tenant architecture and secure data isolation.",
      "Implemented real-time synchronization features ensuring seamless collaboration across distributed teams.",
      "Optimized API performance (FastAPI/Django/Flask) and integrated React.js for dynamic, responsive interfaces.",
    ],
  },
  {
    role: "Python Developer",
    company: "Maquinistas Pvt Ltd / Softskillers Pvt Ltd",
    location: "Ahmedabad, India",
    period: "Oct 2021 — Feb 2023",
    points: [
      "Developed and deployed REST APIs in Django powering a proprietary ride-sharing platform.",
      "Integrated Google APIs for geolocation, route optimization, and map features.",
      "Collaborated with cross-functional teams to deliver scalable solutions with minimal downtime.",
    ],
  },
];

export const projects = [
  {
    name: "Aroma",
    subtitle: "SaaS Ticketing System",
    stack: ["Python", "Django", "React.js"],
    description:
      "Multi-tenant SaaS ticket management platform with subdomain isolation, enabling organizations to manage workflows securely and collaboratively.",
  },
  {
    name: "SCIMS",
    subtitle: "Hospital Inventory System",
    stack: ["FastAPI", "React.js"],
    description:
      "Hospital inventory software with real-time stock tracking, automated procurement, and stock alerts, reducing supply wastage significantly.",
  },
  {
    name: "Green Primary Care",
    subtitle: "Healthcare EHR",
    stack: ["Flask", "React.js"],
    description:
      "Health Practice Management software with Appointment Scheduling and Patient Data Management, fully compliant with HIPAA regulations. Built jointly with backend and frontend teams from client requirements.",
  },
  {
    name: "Doxer / Mylifto Rider",
    subtitle: "Ride-Sharing Platform",
    stack: ["Django", "REST API", "Ajax", "Google APIs"],
    description:
      "Ride-sharing platform similar to Uber, supporting real-time ride requests, driver-passenger matching, and route optimization.",
  },
  {
    name: "Quickfeet",
    subtitle: "Training App",
    stack: ["Django", "REST API", "Ajax", "CronJob"],
    description:
      "Game-like sports training application integrating Bluetooth-enabled devices for real-time tracking and performance feedback.",
  },
];

export const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React.js", "Redux", "Ajax"],
  Backend: [
    "Python",
    "PHP",
    "Django",
    "FastAPI",
    "Flask",
    "REST APIs",
    "Celery",
    "Redis",
  ],
  Databases: ["PostgreSQL", "MongoDB", "MySQL", "SQL"],
  "Version Control": ["Git", "GitLab"],
  "Cloud & DevOps": [
    "AWS",
    "DigitalOcean",
    "Microsoft Azure",
    "Amazon CCP",
    "cPanel",
  ],
  Tools: ["Jira", "Trello"],
};

export const education = [
  {
    degree: "Bachelor of Computer Applications",
    school: "Bholabhai Patel College of Computer Studies",
    location: "Gujarat, India",
    period: "2018 — 2021",
  },
];
