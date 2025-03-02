import React from 'react';

export default function Experience({ experience }) {
  return (
    <section className="section">
      <h2>Work Experience</h2>
      {experience.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.title}</h3>
          <p className="period">{exp.period}</p>
          <ul>
            {exp.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}