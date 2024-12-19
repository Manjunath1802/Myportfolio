import React from 'react';
import './Project.css';

function Project() {
  const projects = [
    {
      title: 'E-commerce Website',
      description: 'A fully responsive online store with product catalog and shopping cart functionality.',
      technologies: ['React JS', 'HTML', 'CSS','JavaScript']
    },
    {
      title: 'Portfolio Website',
      description: 'A sleek, modern portfolio website showcasing my skills and projects.',
      technologies: ['React JS', 'CSS3','Javascript']
    },
    {
      title: 'Health Care',
      description: 'Developed responsive and intractive user interfaces for the hospital appointment booking system using React.js.',
      technologies: ['React JS', 'HTML', 'CSS','JavaScript']
    }
  ];

  return (
    <section className="projects" id='project'>
      <h2 className="title">My Projects</h2>
      <div className="projectGrid">
        {projects.map((project, index) => (
          <div key={index} className="projectCard">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;

