// src/pages/Home.js

import React from "react";
import profilePic from "../Assets/Home/Taruna(1).jpg";
import "./Home.css";  // ← Yeh line add kariye


function Home() {
    return (
    
      <div className="home fade-in-left">  {/* Class name apply kar rahe hain */}

        <div className="block_1 fade-in-left">
          <img className="photo_1 fade-in-left" src={profilePic} alt="Profile" />
        </div>


        <div className="title_1 fade-in-left">
          <h1>Taruna Asthana</h1>
          <h2>Frontend Developer</h2>
          <p>"Always open to learning something and searching new every day."</p>
        
          <div className="btn_1 fade-in-left">
            {/* Contact Me Button */}
            <button onClick={() => window.location.href = "/about"}> About </button>
            <button onClick={() => window.location.href = "/contact"}> Contact </button>
            <button onClick={() => window.location.href = "/skills"}> Skills </button>
            <button onClick={() => window.location.href = "/projects"}> Projects </button>
          </div>
        </div>

      </div>
       );
   
  }
  export default Home;
  


//   import React from "react";
// import About from "./About";
// import Skills from "./Skills";
// import Projects from "./Projects";
// import Contact from "./Contact";
// import "./Home.css";

// function Home() {
//   return (
//     <div className="home">
//       <section id="home">
//         <h1>Welcome to My Portfolio</h1>
//         <p>This is the home section.</p>
//       </section>

//       <section id="about">
//         <About />
//       </section>

//       <section id="skills">
//         <Skills />
//       </section>

//       <section id="projects">
//         <Projects />
//       </section>

//       <section id="contact">
//         <Contact />
//       </section>
//     </div>
//   );
// }

// export default Home;
