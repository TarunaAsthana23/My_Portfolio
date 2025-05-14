// src/pages/Contact.js

import React from "react";
// import profilePic from "../Assets/Home/Chubby(1).jpg";
// import { Link } from "react-scroll";
import {
  FaLinkedin,
  FaGithub,
  FaPhone,
  // FaStackOverflow,
  // FaMedium,
  FaEnvelope
} from "react-icons/fa";
import "./Contact.css";  // CSS file import karo


function Contact() {


// const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };





  return (
<section id="contact" name="contact" > 
    <div className="con" >
      <div className="con_1">
        <h1>Contact Me</h1>
      </div>

      <div className="Con_2">
        <div className="contact">
          <h1>Contact Me</h1>
          <form className="contact_form" onSubmit={handleSubmit}>
            <label>
                Name:
            < input type="text" placeholder="Your Name" />
            </label>

            <label>
                Contact:
              <textarea placeholder="Contact Number" rows="2" />
            </label>

            <label>
                Email:
              <input type="email" placeholder="Your Email" />
            </label>

            <label>
                Message:
              <textarea placeholder="Your Message" rows="5" />
            </label>
          
            <button className ="btn_4" type="submit">Send</button>
          </form>
        </div>


        <div className="social-icons">

          <div className="icon_1">     
            <a href="https://www.linkedin.com/in/pragyaasthana/" target="_blank" rel="noreferrer">
              <FaLinkedin className="icon" />
            </a>
            <a href="mailto:hiyasrivastava777@gmail.com" target="_blank" rel="noreferrer">
              <FaEnvelope className="icon" />
            </a>
              {/* <a href="https://stackoverflow.com/users/yourprofile" target="_blank" rel="noreferrer">
              <FaStackOverflow className="icon" />
              </a> */}
              {/* <a href="https://medium.com/@yourprofile" target="_blank" rel="noreferrer">
              <FaMedium className="icon" />
              </a> */}
          </div>

          <div className="icon_1">
            <a href="https://github.com/TarunaAsthana23" target="_blank" rel="noreferrer">
              <FaGithub className="icon" />
            </a>
            <a href="tel:+917985877742" target="_blank" rel="noreferrer">
              <FaPhone className="icon" />
            </a>
          </div>
        </div>
      
      </div>
    

      <div className="btn_5 ">
        {/* Button */}
        <button onClick={() => window.location.href = "/"}> Home </button>
        <button onClick={() => window.location.href = "/about"}> About </button>
        <button onClick={() => window.location.href = "/skills"}> Skills </button>
        <button onClick={() => window.location.href = "/projects"}> Projects </button>
      </div>

    </div>
  </section>


  );
}

export default Contact;
