import React from 'react';
import './HeroSection.css';
import heroImage from '../Assets/Home/Amazon.png';

const HeroSection = () => {
  const sectionStyle = {
    backgroundImage: `url(${heroImage})`,
  };

  return (
    <section className="hero-section" style={sectionStyle}>
      <div className="hero-content">
        <h1>नमस्ते, मैं Taruna हूँ</h1>
        <p>मैं एक फ्रंटएंड डेवलपर हूँ जो React.js में विशेषज्ञता रखती हूँ।</p>
        <a href="#projects" className="hero-button">मेरे प्रोजेक्ट्स देखें</a>
      </div>
    </section>
  );
};

export default HeroSection;
