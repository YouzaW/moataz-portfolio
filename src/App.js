import React from 'react';
import { resumeData } from './data/resumeData';
import Header from './components/Header';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Awards from './components/Awards';
import ChatBot from './components/ChatBot';
import './styles.css';

function App() {
  return (
    <div className="container">
      <Header data={resumeData} />
      
      <Experience experience={resumeData.experience} />
      
      <Projects projects={resumeData.projects} />
      
      <Skills skills={resumeData.skills} />
      
      <Education education={resumeData.education} />
      
      <Awards awards={resumeData.awards} />

      <ChatBot />

    </div>
  );
}

export default App;