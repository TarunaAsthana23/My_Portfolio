// src/pages/About.js

import React from "react";
import profilePic_2 from "../Assets/Home/Chubby(1).jpg";
// import { Link } from "react-scroll";
import "./About.css";  // ← Yeh line add kariye




function About() {
  return (
    <section id="about" name="about"  >                       
    <div className="block_2 fade-in-right" >  


        <div className="title_2 fade-in-right">
          <h1>About Me</h1>
        </div>

        <div className="block_3 fade-in-right" >
            <div className="title_3 fade-in-right">
              <h1>"Hi, I'm Taruna Asthana"</h1>
              <p> "I'm a curious and dedicated learner who enjoys exploring new things and growing every day.</p>
              <p>I have completed my B.Tech and M.Tech in Computer Science and Engineering. During my studies, I worked on interesting projects. My B.Tech project was called Easy Go SMS, and in my M.Tech, I worked on a research topic that focused on removing things like raindrops and reflections from images using pattern recognition. I also published two research papers as part of my work.</p>
              <p>I started learning coding with HTML and CSS, then moved on to JavaScript and front-end development. Now, I’m learning modern frameworks like React, Angular, Vue.js, and also working with Node.js to build full-stack web applications that are dynamic and user-friendly.</p>
              <p>For me, coding is not just a job — it’s a journey of learning, creating, and solving real problems. Every line of code I write helps me grow and gives me a chance to do something meaningful with technology. ✨"</p>
            </div>

            <div className="block_4 fade-in-right" >
              <img className="photo_2 fade-in-right" src={profilePic_2} alt="Profile" />

            
              <div className="btn_2 fade-in-right">
                  {/* Preview CV */}
                <button onClick={() => window.open("/Set/Resume/2025_TARUNA_ASTHANA.pdf", "_blank")}>
                  Preview CV
                </button>

                  {/* Download CV */}
                <a href="/Set/Resume/2025_TARUNA_ASTHANA.pdf" download>
                  <button>Download CV</button>
                </a>
              </div>
            </div>
          
        </div>

        <div className="btn_3 fade-in-right">
                    {/* Button */}
        <button onClick={() => window.location.href = "/"}> Home </button>
        <button onClick={() => window.location.href = "/contact"}> Contact </button>
        <button onClick={() => window.location.href = "/skills"}> Skills </button>
        <button onClick={() => window.location.href = "/projects"}> Projects </button>
        </div>
    </div>
  </section>
      
    );
  }
  export default About;
  