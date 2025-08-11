import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Import all modern components
import Navigation from './components/sections/Navigation.jsx';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import Skills from './components/sections/Skills.jsx';
import Experience from './components/sections/Experience.jsx';
import Projects from './components/sections/Projects.jsx';

import Contact from './components/sections/Contact.jsx';
import Footer from './components/sections/Footer.jsx';

import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
  }, []);
  
  return (
    <div className="min-h-screen bg-slate-950 text-white">
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
    </div>
  );
}

export default App;
