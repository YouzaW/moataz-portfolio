import React from 'react';

export default function Header({ data }) {
  return (
    <header className="header">
      <h1>{data.name}</h1>
      <div className="contact-info">
        <p>📞 {data.contact.phone}</p>
        <p>📧 {data.contact.email}</p>
        <p>👨💻 GitHub: {data.contact.github}</p>
        <p>💼 LinkedIn: {data.contact.linkedin}</p>
      </div>
    </header>
  );
}