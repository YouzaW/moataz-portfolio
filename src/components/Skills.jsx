import React from 'react';

export default function Skills({ skills }) {
  return (
    <section className="section">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <ul>
            {skills.programming.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        </div>

        <div className="skill-category">
          <h3>Frameworks & Libraries</h3>
          <ul>
            {skills.frameworks.map((framework, index) => (
              <li key={index}>{framework}</li>
            ))}
          </ul>
        </div>

        <div className="skill-category">
          <h3>Databases</h3>
          <ul>
            {skills.databases.map((db, index) => (
              <li key={index}>{db}</li>
            ))}
          </ul>
        </div>

        <div className="skill-category">
          <h3>Hosting Services</h3>
          <ul>
            {skills.hosting.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}