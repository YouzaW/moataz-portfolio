import React from 'react';

export default function Awards({ awards }) {
  return (
    <section className="section">
      <h2>Awards & Honors</h2>
      <ul className="awards-list">
        {awards.map((award, index) => (
          <li key={index} className="award-item">
            ✅ {award}
          </li>
        ))}
      </ul>
    </section>
  );
}