// src/pages/Projects.js

import React, { useState } from 'react';
import './Projects.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaBootstrap,
  FaJava,
  FaReact,
} from 'react-icons/fa';
import { SiVercel} from 'react-icons/si'; // Vercel icon from Simple Icons
import { VscVscode } from "react-icons/vsc";



const projects = [
  {
    id: 1,
    title: 'Codemic',
    image: '/Set/Images/Codemic.png',
    description: 'A responsive and visually appealing website for a web development company, designed to showcase services, portfolio, and contact details in a professional, user-friendly manner. Built using React.js for the frontend and Node.js for the backend, with MongoDB as the database, the site delivers a modern design, smooth navigation, and reliable performance across all devices.',
    tools: ['html', 'css', 'bootstrap', 'js', 'github', 'vscode', 'vercel', 'react'],
    // repoLink: 'https://github.com/TarunaAsthana23/codemic.git',
    // pageLink: 'https://tarunaasthana23.github.io/portfolio',
    vercelLink: 'https://codemic.vercel.app/', // replace with your actual Vercel URL
  },

  {
    id: 2,
    title: 'Portfolio',
    image: '/Set/Images/Portfolio.png',
    description: 'A personal portfolio website created using React.js.',
    tools: ['html', 'css', 'js', 'github', 'vscode', 'vercel', 'react'],
    repoLink: 'https://github.com/TarunaAsthana23/PORTFOLIO.git',
    // pageLink: 'https://tarunaasthana23.github.io/portfolio',
    vercelLink: 'https://portfolio-tarunaasthana23-taruna-asthanas-projects.vercel.app/', // replace with your actual Vercel URL

  },

  {
    id: 3,
    title: 'Event Management',
    image: '/Set/Images/Event Management.png',
    description: 'An event management website developed using HTML, CSS, JavaScript, and TypeScript.',
    tools: ['html', 'css', 'js', 'bootstrap', 'github', 'vscode', 'vercel'],
    repoLink: 'https://github.com/TarunaAsthana23/Event-Management',
    // pageLink: 'https://tarunaasthana23.github.io/Event-Management/',
    vercelLink: 'https://event-management-tarunaasthana23-taruna-asthanas-projects.vercel.app/', // replace with your actual Vercel URL
  },

  {
    id: 4,
    title: 'My Portfolio',
    image: '/Set/Images/My Portfolio.png',
    description: 'A personal portfolio website created using React.js.',
    tools: ['html', 'css', 'js', 'github', 'vscode', 'vercel', 'react'],
    repoLink: 'https://github.com/TarunaAsthana23/My_Portfolio.git',
    // pageLink: 'https://tarunaasthana23.github.io/portfolio',
    vercelLink: 'https://my-portfolio-tarunaasthana23-taruna-asthanas-projects.vercel.app/', // replace with your actual Vercel URL
  },

  {
    id: 5,
    title: 'Amazon Clone',
    image: '/Set/Images/Amazon.png',
    description: 'An e-commerce website clone created using HTML, CSS, and JavaScript.',
    tools: ['html', 'css', 'js', 'github', 'vscode', 'vercel'],
    repoLink: 'https://github.com/TarunaAsthana23/Amazon_Clone',
    // pageLink: 'https://tarunaasthana23.github.io/Amazon_Clone/',
    // vercelLink: '', 
    // replace with your actual Vercel URL
  },
  
  {
    id: 6,
    title: 'Apparent Clone',
    image: '/Set/Images/Apparent.png',
    description: 'A clone of Apparent Technologies Inc. official website built using HTML, CSS, and JavaScript.',
    tools: ['html', 'css', 'js', 'github', 'vscode', 'vercel'],
    repoLink: 'https://github.com/TarunaAsthana23/Apparent_Clone-Website',
    // pageLink: 'https://tarunaasthana23.github.io/Apparent_Clone-Website/',
    vercelLink: 'https://apparent-git-main-taruna-asthanas-projects.vercel.app/', // replace with your actual Vercel URL
  },
  {
    id: 7,
    title: 'Handling Form Submission',
    image: '/Set/Images/S1.png',
    description: 'A project to handle form submission using Java.',
    tools: ['java', 'github', 'vscode', 'vercel'],
    repoLink: 'https://github.com/TarunaAsthana23/handling-form-submission',
    // pageLink: 'https://tarunaasthana23.github.io/portfolio/',
    // vercelLink: '',
     // replace with your actual Vercel URL
    
  },
  

];

const iconMap = {
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  js: <FaJs />,
  bootstrap: <FaBootstrap />,
  github: <FaGithub />,
  vscode: <VscVscode />, // ✅ No <img>, icon just like others
  java: <FaJava />,
  react: <FaReact />,
  vercel: <SiVercel />,
};

function Projects() {
   const [showAll, setShowAll] = useState(false);

  // Pehle 6 cards dikhane ka logic
  const displayedProjects = showAll ? projects : projects.slice(0, 6);


  return (
    <section id="projects" name="projects">
    <div className="projects-section" >
      <h1 className="projects-title">PROJECTS</h1>
      <div className="projects-container">
        {displayedProjects.map((project, index) => (

          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-img" />
            <h2 className="Pro_1">{project.title}</h2>
            <p className='Parh_1'>{project.description}</p>
            <h2 className="Pro_2">TOOLS</h2>
            <div className="tools">
              {project.tools.map((tool, i) => (
                <span className="tool-icon" key={i}>
                  {iconMap[tool]}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.repoLink} target="_blank" rel="noreferrer">
                <FaGithub /> Repository
              </a>
              <a href={project.vercelLink} target="_blank" rel="noreferrer">
              <SiVercel /> Vercel
              </a>
        
            </div> 
          </div>

        ))}
      </div>

       {/* View More / View Less Button */}
        {projects.length > 6 && (
          <div className="view">
            <button className="view-btn" onClick={() => setShowAll(!showAll)}> {showAll ? "View Less" : "View More"} </button>
          </div>
        )}

      <div className="btn_7 ">
          {/* Button */}
        <button onClick={() => window.location.href = "/"}> Home </button>
        <button onClick={() => window.location.href = "/about"}> About </button>
        <button onClick={() => window.location.href = "/contact"}> Contact </button>
        <button onClick={() => window.location.href = "/skills"}> Skills </button>
      </div>


      </div>
      </section>
  );
}

export default Projects;

// "Building Websites That Build Your Business."

// "Where Creative Design Meets Powerful Code."

// "Crafting Digital Solutions for Modern Businesses."

// "Turning Ideas into Stunning Web Experiences."

// "Your Vision, Our Code."