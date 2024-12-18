import React from 'react';
import './About.css';
function About() {
  return (
    <section className="about" id='about'>
      <h2 className="title">About Me</h2>
      <div className="content">
        <p>
          With over 1.4 years of experience in web development, I specialize in creating
          modern and responsive websites that provide exceptional user experiences.
          My expertise includes front-end development, UI/UX design, and implementing
          responsive layouts that work seamlessly across all devices.
        </p>
        <div className="stats">
          <div className="stat">
            <h3>1+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat">
            <h3>05+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat">
            <h3>05+</h3>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;

