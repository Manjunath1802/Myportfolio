import React from 'react'
import './Navabaraa.css';

function Navabaraa() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
      return (
        <nav className="navbar">
          <div className="logo">MG</div>
          <div className="links">
            <a onClick={() => scrollToSection('home')}>Home</a>
            <a onClick={() => scrollToSection('about')}>About</a>
            <a onClick={() => scrollToSection('skill')}>Skills</a>
            <a onClick={() => scrollToSection('project')}>Portfolio</a>
            <a onClick={() => scrollToSection('contact')}>Contact</a>
          </div>
        </nav>
      );
}

export default Navabaraa;
