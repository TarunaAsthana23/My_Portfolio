// src/pages/Skills.js

import React from 'react';


import "./Skills.css"; // Apni CSS file agar alag banayi ho to import karein

function Skills() {
  return (
    <div className="skills-page">
      <h1>My Skills</h1>


      <div className="skills-container_1">
        <div className="skill-box">
          <h3>Frontend</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="skill-box">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Spring Boot</li>
          </ul>
        </div>
      </div>
        
        
        <div className="skills-container_2">
        <div className="skill-box">
          <h3>Database</h3>
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="skill-box">
          <h3>Tools & Platforms</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Postman</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>

      <div className="btn_6 ">
          {/* Button */}
        <button onClick={() => window.location.href = "/"}> Home </button>
        <button onClick={() => window.location.href = "/about"}> About </button>
        <button onClick={() => window.location.href = "/contact"}> Contact </button>
        <button onClick={() => window.location.href = "/projects"}> Projects </button>
      </div>

    </div>
  );
}

export default Skills;

  