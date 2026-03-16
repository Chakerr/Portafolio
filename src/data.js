import HeroImage from "/assets/hero-img.webp";
const Image = { HeroImage };
export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools4 from "/assets/tools/js.png";
import Tools5 from "/assets/tools/ts.png";
import Tools6 from "/assets/tools/nodejs.png";
import Tools7 from "/assets/tools/github.png";
import Tools8 from "/assets/tools/mysql.png";
import Tools9 from "/assets/tools/firebase.png";

export const listTools = [
  { id: 1,  gambar: Tools2,  nama: "React.js",       ket: "Frontend Framework",      dad: "100" },
  { id: 2,  gambar: Tools5,  nama: "TypeScript",      ket: "Language",                dad: "200" },
  { id: 3,  gambar: Tools4,  nama: "JavaScript",      ket: "Language",                dad: "300" },
  { id: 4,  gambar: Tools6,  nama: "Node.js",         ket: "Backend Runtime",         dad: "400" },
  { id: 5,  gambar: Tools8,  nama: "PostgreSQL",      ket: "Database",                dad: "500" },
  { id: 6,  gambar: Tools8,  nama: "MySQL",           ket: "Database",                dad: "600" },
  { id: 7,  gambar: Tools9,  nama: "MongoDB",         ket: "Database",                dad: "700" },
  { id: 8,  gambar: Tools7,  nama: "Git & GitHub",    ket: "Version Control",         dad: "800" },
  { id: 9,  gambar: Tools1,  nama: "VS Code",         ket: "Code Editor",             dad: "900" },
  { id: 10, gambar: Tools9,  nama: "Docker",          ket: "DevOps",                  dad: "1000" },
  { id: 11, gambar: Tools9,  nama: "Vercel",          ket: "Deployment",              dad: "1100" },
  { id: 12, gambar: Tools9,  nama: "Render",          ket: "Cloud Deployment",        dad: "1200" },
  { id: 13, gambar: Tools9,  nama: "Spring Boot",     ket: "Backend Framework",       dad: "1300" },
  { id: 14, gambar: Tools9,  nama: "REST APIs",       ket: "API Design",              dad: "1400" },
  { id: 15, gambar: Tools9,  nama: "JWT Auth",        ket: "Security",                dad: "1500" },
  { id: 16, gambar: Tools9,  nama: "Scrum",           ket: "Methodology",             dad: "1600" },
  { id: 17, gambar: Tools9,  nama: "Java",            ket: "Language",                dad: "1700" },
  { id: 18, gambar: Tools9,  nama: "Python",          ket: "Language",                dad: "1800" },
];

import Proyek1 from "/assets/proyek/proyek1.jpg";
import Proyek2 from "/assets/proyek/proyek2.jpg";
import Proyek3 from "/assets/proyek/proyek3.jpg";
import Proyek4 from "/assets/proyek/proyek4.jpg";
import Proyek5 from "/assets/proyek/proyek5.jpg";
import Proyek6 from "/assets/proyek/proyek6.jpg";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "Exa Platform",
    subtitle: "Full Stack SaaS startup with payments, real-time services and JWT auth.",
    fullDescription: "Co-founded and built Exa from scratch — a scalable software platform integrating users, payments, and services in real time. Designed the full architecture using React on the frontend, Spring Boot on the backend, and PostgreSQL as the database. Implemented JWT-based authentication, secure authorization, and integrated payment gateways for real transactional flows. Deployed and managed on Render and Vercel. This project represents my most complete professional experience as both a technical lead and co-founder.",
    borderColor: "#7C3AED",
    gradient: "linear-gradient(145deg, #7C3AED, #000)",
    url: "https://github.com/Chakerr",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "Gepetto Educational Platform",
    subtitle: "Institutional platform for academic management and data automation.",
    fullDescription: "Designed and implemented a full institutional platform for Jardín Infantil Construyendo con Gepetto to manage academic and administrative processes. Built the database schema for student information, automated report generation, and digitalized internal workflows — reducing operational times and improving data traceability. Provided ongoing tech support and infrastructure maintenance for the institution.",
    borderColor: "#0F6E56",
    gradient: "linear-gradient(145deg, #0F6E56, #000)",
    url: "https://github.com/Chakerr",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "REST API with Spring Boot",
    subtitle: "Backend service with JWT auth, role management and PostgreSQL.",
    fullDescription: "A robust RESTful API built with Spring Boot and PostgreSQL, featuring JWT-based authentication, role-based access control, and secure endpoint design. Includes full CRUD operations, database migrations, and structured error handling. Deployed on Render with CI/CD via GitHub Actions.",
    borderColor: "#185FA5",
    gradient: "linear-gradient(145deg, #185FA5, #000)",
    url: "https://github.com/Chakerr",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "React Dashboard",
    subtitle: "Interactive admin dashboard with data visualization and real-time updates.",
    fullDescription: "A modern admin dashboard built with React and TypeScript, featuring dynamic data tables, charts, and real-time state management. Includes authentication flow, protected routes, and a clean UI built with Tailwind CSS. Designed to be modular and easily extendable for different business contexts.",
    borderColor: "#7C3AED",
    gradient: "linear-gradient(145deg, #7C3AED, #000)",
    url: "https://github.com/Chakerr",
    dad: "400",
  },
  {
    id: 5,
    image: Proyek5,
    title: "Database Design & Analysis",
    subtitle: "SQL schema design and optimization for complex relational models.",
    fullDescription: "Advanced database design project covering entity-relationship modeling, normalization, complex query optimization, and stored procedures in PostgreSQL and MySQL. Applied in production environments for academic and business data management, achieving significant performance improvements in query execution times.",
    borderColor: "#0F6E56",
    gradient: "linear-gradient(145deg, #0F6E56, #000)",
    url: "https://github.com/Chakerr",
    dad: "500",
  },
  {
    id: 6,
    image: Proyek6,
    title: "Full Stack Web App",
    subtitle: "End-to-end web application with React frontend and Node.js backend.",
    fullDescription: "A full-stack web application connecting a React frontend with a Node.js/Express backend and MongoDB database. Features user authentication, CRUD operations, file uploads, and responsive design. Deployed on Vercel (frontend) and Render (backend) with environment-based configuration.",
    borderColor: "#185FA5",
    gradient: "linear-gradient(145deg, #185FA5, #000)",
    url: "https://github.com/Chakerr",
    dad: "600",
  },
];
