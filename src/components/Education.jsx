import React from 'react';

export default function Education({ education }) {
  return (
    <section className="section">
      <h2>Education</h2>
      <div className="education-item">
        <h3>{education.institution}</h3>
        <p className="period">{education.period}</p>
        <p><strong>{education.degree}</strong></p>
        <p className="cgpa">CGPA: {education.cgpa}</p>
        <p className="activities">Notable Activities: {education.activities}</p>
      </div>
    </section>
  );
}