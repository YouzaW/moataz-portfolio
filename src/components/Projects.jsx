import React from 'react';

export default function Projects({ projects }) {
  return (
    <section className="section">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p className="period">{project.period}</p>
          <p>{project.description}</p>
          <div className="tech-stack">
            {project.tech.map((tech, i) => (
              <span key={i} className="tech-pill">{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}