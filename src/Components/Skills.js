import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Responsive Design', level: 90 },
  ];

  return (
    <section className="skills" id='skill'>
      <h2 className="title">My Skills</h2>
      <div className="skillsGrid">
        {skills.map((skill, index) => (
          <div key={index} className="skillItem">
            <div className="skillInfo">
              <h3>{skill.name}</h3>
              <span>{skill.level}%</span>
            </div>
            <div className="progressBar">
              <div 
                className="progress" 
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

