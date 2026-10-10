const GITHUB_PROFILE = "https://www.github.com/ShanukaAlahakoon";

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  highlights: string[];
  stack: string[];
  github?: string;
  demo?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  current: boolean;
  summary: string;
  highlights: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export const profile = {
  name: "Shanuka Alahakoon",
  role: "Software Engineer Intern",
  location: "Medirigiriya, Sri Lanka",
  email: "shanukaalahakoon456@gmail.com",
  linkedin: "https://www.linkedin.com/in/shanuka-alahakoon",
  github: GITHUB_PROFILE,
  cv: "/Shanuka_Bandara_CV.pdf",
  // Put your photo at public/profile.jpg and change this to "/profile.jpg"
  photo: "/profile.svg",
  company: "SLTMobitel",
  headline: "Software engineer building full-stack and applied AI products.",
  intro:
    "Computer Science undergraduate and Software Engineer Intern at SLTMobitel. I focus on production-minded engineering: clean APIs, solid data models, and software that is tested, versioned, and deployed properly.",
  about: [
    "I am a Computer Science undergraduate with hands-on experience building full-stack web applications and applied AI solutions using the MERN stack, Python, and modern developer tooling.",
    "My work spans authentication workflows, CRUD-heavy applications, retrieval-augmented document chat, computer vision pipelines, and machine learning model deployment. I care about strong software engineering fundamentals: API design, database design, and disciplined version control.",
    "Today I am working as a Software Engineer Intern at SLTMobitel, applying these fundamentals in a professional engineering environment.",
  ],
  strengths: [
    "Problem solving and algorithmic thinking",
    "RESTful API design and system architecture",
    "Debugging, testing, and performance optimization",
    "Clean code practices and version control",
    "Agile collaboration and continuous learning",
  ],
  stats: [
    { label: "Degree GPA", value: "3.59" },
    { label: "Projects built", value: "5" },
    { label: "Certifications", value: "6" },
  ],
};

export const experience: Experience[] = [
  {
    company: "SLTMobitel",
    role: "Software Engineer Intern",
    period: "Present",
    current: true,
    summary:
      "Software engineering internship at SLTMobitel, one of Sri Lanka's leading telecommunications providers.",
    // Add 2 to 4 short points about what you actually work on, for example:
    // "Built and maintained REST APIs for an internal tool using Node.js and MongoDB."
    highlights: [],
  },
];

export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "Full-Stack E-Commerce Platform",
    category: "Web Application",
    summary:
      "A complete MERN e-commerce platform covering seller inventory management and customer purchasing workflows.",
    highlights: [
      "Secure JWT authentication with role-based access control for admin and customer users.",
      "RESTful APIs and CRUD operations with optimized database interactions.",
      "Search filtering, persistent cart, and a responsive interface.",
    ],
    stack: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
    github: GITHUB_PROFILE,
    demo: "https://i-computer-frontend-pied.vercel.app/",
  },
  {
    slug: "knowledgebot",
    title: "KnowledgeBot",
    category: "Applied AI / RAG",
    summary:
      "A retrieval-augmented generation chatbot that lets users upload PDF documents and query them in natural language.",
    highlights: [
      "ChromaDB vector storage and semantic search to improve response relevance.",
      "Flask backend services with PDF parsing through PyPDF2.",
      "Responsive Tailwind CSS frontend for document upload and chat.",
    ],
    stack: ["Python", "Flask", "Google Gemini", "ChromaDB", "Tailwind CSS"],
    github: GITHUB_PROFILE,
  },
  {
    slug: "attendance-system",
    title: "Real-Time Attendance System",
    category: "Computer Vision",
    summary:
      "An attendance system that recognizes faces in real time and records attendance automatically.",
    highlights: [
      "OpenCV face recognition orchestrated through a Flask service.",
      "Web interface for enrollment and attendance monitoring.",
      "MySQL storage for student profiles and attendance records.",
    ],
    stack: ["Python", "OpenCV", "Flask", "MySQL", "JavaScript"],
    github: GITHUB_PROFILE,
  },
  {
    slug: "plant-disease-detector",
    title: "AI-Powered Plant Disease Detector",
    category: "Machine Learning",
    summary:
      "A CNN-based classifier that detects plant diseases from leaf images and returns predictions with confidence scores.",
    highlights: [
      "Classifies 15 disease and healthy states, trained on the PlantVillage dataset.",
      "Model trained and optimized with TensorFlow and Keras.",
      "Full-stack delivery: React frontend with a Flask REST API.",
    ],
    stack: ["Python", "TensorFlow", "Keras", "Flask", "React"],
    github: GITHUB_PROFILE,
  },
  {
    slug: "sentimind",
    title: "Sentimind",
    category: "NLP / Deployment",
    summary:
      "A deployed NLP application that classifies product review sentiment using a fine-tuned BERT model.",
    highlights: [
      "Batch analysis of large CSV files with progress tracking and dashboard outputs.",
      "Fine-tuned BERT model served through a Streamlit interface.",
      "Automated deployment using GitHub and Streamlit Cloud.",
    ],
    stack: ["Python", "BERT", "Streamlit", "CI/CD"],
    github: GITHUB_PROFILE,
  },
];

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "Java", "PHP", "TypeScript"],
  },
  {
    label: "Frontend",
    items: ["React.js", "Tailwind CSS", "Bootstrap", "HTML", "CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "Flask", "REST APIs"],
  },
  {
    label: "Databases",
    items: ["MongoDB", "MySQL", "ChromaDB"],
  },
  {
    label: "AI / ML",
    items: ["TensorFlow", "Keras", "OpenCV", "BERT", "RAG"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Postman", "Streamlit", "CI/CD basics"],
  },
];

export const education = [
  {
    title: "BSc (Honors) in Computer Science",
    institution: "South Eastern University of Sri Lanka",
    period: "2022 - Present",
    note: "GPA 3.59",
  },
  {
    title: "Bachelor of Information Technology (External)",
    institution: "University of Colombo School of Computing",
    period: "2022 - Present",
  },
  {
    title: "Diploma in Information Technology",
    institution: "University of Colombo School of Computing",
    period: "2023",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  // Optional link to the online credential
  url?: string;
};

export const certifications: Certification[] = [
  {
    title: "Full Stack Web Development (MERN)",
    issuer: "SKYREK (PVT) LTD",
  },
  {
    title: "Artificial Intelligence and Machine Learning",
    issuer: "SKYREK (PVT) LTD",
  },
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
  },
  {
    title: "Python for Beginners",
    issuer: "CODL, University of Moratuwa",
  },
  {
    title: "TypeScript Basics",
    issuer: "Simplilearn",
  },
  {
    title: "Introduction to Software Testing",
    issuer: "Simplilearn",
  },
];
