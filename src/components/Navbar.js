// Example: src/components/Navbar.js


import React from "react";
import { NavLink } from "react-router-dom"; // NavLink import karo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} 
from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, 
  faFolderOpen, 
  faPhone
} 
from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"; // CSS ko import karo

function Navbar() {
  return (
    <nav className="navbar">
       {/* 🔗 Social Links Div */}


       <div className="social-links">
        
       <a href="https://github.com/TarunaAsthana23" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size="lg" alt="GitHub"/>
        </a>
        <a href="https://www.linkedin.com/in/pragyaasthana/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="lg" alt="LinkedIn" />
        </a>
        <a href="https://your-portfolio.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faFolderOpen} size="lg" alt="Portfolio" />
        </a>
        <a href="mailto:hiyasrivastava777@gmail.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faEnvelope} size="lg" alt="Email" />
        </a>
        <a href="tel:+917985877742" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faPhone} size="lg" alt="Contact" />
          </a>
      </div>

      <ul className="nav-links">
        <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        <li><NavLink to="/skills" activeClassName="active">Skills</NavLink></li>
        <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
      </ul>
 {/* Contact Me Button */}
    </nav>
  );
}

export default Navbar;



// import React from "react";
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <nav>
//       <ul>
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#skills">Skills</a></li>
//         <li><a href="#projects">Projects</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;


  