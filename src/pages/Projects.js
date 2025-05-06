// src/pages/Projects.js

import React from 'react';
import './Projects.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaBootstrap,
  
  FaJava,
} from 'react-icons/fa';
import vscodeLogo from '../Assets/Home/visual-studio-code7642.jpg';



const projects = [
  {
    title: 'Amazon Clone',
    image: '/images/amazon_clone.png',
    description: 'An e-commerce website clone created using HTML, CSS, and JavaScript.',
    tools: ['html', 'css', 'js', 'github', 'vscode'],
    repoLink: 'https://github.com/TarunaAsthana23/Amazon_Clone',
    pageLink: 'https://tarunaasthana23.github.io/Amazon_Clone/',
  },
  {
    title: 'Event Management',
    image: '/images/event_management.png',
    description: 'An event management website developed using HTML, CSS, JavaScript, and TypeScript.',
    tools: ['html', 'css', 'js', 'bootstrap', 'github', 'vscode'],
    repoLink: 'https://github.com/TarunaAsthana23/Event-Management',
    pageLink: 'https://tarunaasthana23.github.io/Event-Management/',
  },
  {
    title: 'Apparent Clone Website',
    image: '/images/apparent_clone.png',
    description: 'A clone of Apparent Technologies Inc. official website built using HTML, CSS, and JavaScript.',
    tools: ['html', 'css', 'js', 'github', 'vscode'],
    repoLink: 'https://github.com/TarunaAsthana23/Apparent_Clone-Website',
    pageLink: 'https://tarunaasthana23.github.io/Apparent_Clone-Website/',
  },
  {
    title: 'Handling Form Submission',
    image: '/images/form_submission.png',
    description: 'A project to handle form submission using Java.',
    tools: ['java', 'github', 'vscode'],
    repoLink: 'https://github.com/TarunaAsthana23/handling-form-submission',
    pageLink: 'https://tarunaasthana23.github.io/portfolio/',
    
  },

  {
    title: 'My Portfolio Website',
    image: '/images/portfolio.png',
    description: 'A personal portfolio website created using React.js.',
    tools: ['html', 'css', 'js', 'github', 'vscode'],
    repoLink: 'https://github.com/TarunaAsthana23/portfolio',
    pageLink: 'https://tarunaasthana23.github.io/portfolio',

  },
];

const iconMap = {
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  js: <FaJs />,
  bootstrap: <FaBootstrap />,
  github: <FaGithub />,
  vscode: <img src={vscodeLogo} alt="VS Code" className="vscode-icon" />, // Custom image for VS Code
  java: <FaJava />,
  
};

function Projects() {
  return (
    <div className="projects-section">
      <h1 className="projects-title">PROJECTS</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-img" />
            <h2>{project.title}</h2>
            <p className='Parh_1'>{project.description}</p>
            <h4>TOOLS</h4>
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
              <a href={project.pageLink} target="_blank" rel="noreferrer">
                <FaGithub /> Page
              </a>
            </div> 
          </div>
        ))}
      </div>


      <div className="btn_7 ">
          {/* Button */}
        <button onClick={() => window.location.href = "/"}> Home </button>
        <button onClick={() => window.location.href = "/about"}> About </button>
        <button onClick={() => window.location.href = "/contact"}> Contact </button>
        <button onClick={() => window.location.href = "/skills"}> Skills </button>
      </div>


    </div>
  );
}

export default Projects;
