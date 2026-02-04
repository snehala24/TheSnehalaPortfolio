import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-primary min-h-screen text-text selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />

      <About />
      <Experience />
      <Projects />

      <Achievements />
      <Contact />
    </div>
  );
}

export default App;
