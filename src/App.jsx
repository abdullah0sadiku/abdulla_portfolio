import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Import all modern components
import Navigation from './components/sections/Navigation.jsx';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import Skills from './components/sections/Skills.jsx';
import Experience from './components/sections/Experience.jsx';
import Projects from './components/sections/Projects.jsx';
import Photography from './components/photography/Photography.jsx';

import Contact from './components/sections/Contact.jsx';
import Footer from './components/sections/Footer.jsx';

import './App.css';

function Home({ activeSection, setActiveSection, scrollToSection }) {
  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  return (
    <>
      {/* Navigation */}
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      
      {/* All Sections */}
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Experience />
      <Projects />

      <Contact />
      <Footer />
    </>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              activeSection={activeSection} 
              setActiveSection={setActiveSection} 
              scrollToSection={scrollToSection} 
            />
          } 
        />
        <Route path="/photography" element={<Photography />} />
      </Routes>
    </div>
  );
}

export default App;
