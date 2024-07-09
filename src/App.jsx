import React, { useRef } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionId) => {
    let sectionRef;
    switch (sectionId) {
      case "Projects":
        sectionRef = projectRef;
        break;
      case "About":
        sectionRef = aboutRef;
        break;
      case "Contact":
        sectionRef = contactRef;
        break;
      default:
        break;
    }

    if (sectionRef && sectionRef.current) {
      const offset = -100; // Change this value to your desired offset
      const elementPosition = sectionRef.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <Router>
      <Navbar scrollToSection={scrollToSection} />
      <div>
        <Hero scrollToSection={scrollToSection}/>
        <About ref={aboutRef} />
        <Projects ref={projectRef} />
        <Contact ref={contactRef} />
      </div>
    </Router>
  )
}

export default App