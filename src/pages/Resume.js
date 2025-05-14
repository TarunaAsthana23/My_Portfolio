// src/pages/About.js

import React from "react";

// import { Link } from "react-scroll";
import "./Rum.css";  
// ← Yeh line add kariye




function Resume() {
  return (
    <section id="resume" name="resume">                       
        <div className="Rum fade-in-right">  


            <div className="Rum_1 fade-in-right">
                <h1>Resume</h1>
            </div>

            <div className="Rum_2 fade-in-right">
                
                    {/* Embedded Resume */}
                <div className="resume-box">
                    <iframe src="/Set/Resume/2025 TARUNA_ASTHANA.pdf" title="Resume" width="100%" height="500px"> </iframe>
                </div>   
                

                
              
            
                <div className="btn_8 fade-in-right">
                    {/* Preview CV */}
                    <button onClick={() => window.open("/Set/Resume/2025 TARUNA_ASTHANA.pdf", "_blank")}>
                    View Fullscreen
                    </button>
                        
                    {/* Download CV */}
                    <a href="/Set/Resume/2025 TARUNA_ASTHANA.pdf" download>
                    <button>Download CV</button>
                    </a>
                </div>
                
          
            </div>

            <div className="btn_9 fade-in-right">
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
  export default Resume;


//   function Resume() {
//     const resumeURL = "/Set/Resume/2025 TARUNA_ASTHANA.pdf";
//     const viewerURL = `https://docs.google.com/gview?url=${window.location.origin}${resumeURL}&embedded=true`;
  
//     return (
//       <section id="resume">
//         <div className="resume-container fade-in-right">
//           <div className="resume-header">
//             <h1>Resume</h1>
//           </div>
  
//           <div className="resume-content">
//             <div className="resume-box">
              /* Embedded Resume using Google Viewer */
    //           <iframe
    //             src={resumeURL}
    //             title="Resume"
    //             className="resume-frame"
    //           ></iframe>
    //         </div>
  
    //         <div className="resume-buttons">
    //           <button onClick={() => window.open(resumeURL, "_blank")}>
    //             View Fullscreen
    //           </button>
    //           <a href={resumeURL} download>
    //             <button>Download CV</button>
    //           </a>
    //         </div>
    //       </div>
  
    //       <div className="navigation-buttons">
    //         <button onClick={() => (window.location.href = "/")}>Home</button>
    //         <button onClick={() => (window.location.href = "/contact")}>Contact</button>
    //         <button onClick={() => (window.location.href = "/skills")}>Skills</button>
    //         <button onClick={() => (window.location.href = "/projects")}>Projects</button>
    //       </div>
    //     </div>
    //   </section>
  