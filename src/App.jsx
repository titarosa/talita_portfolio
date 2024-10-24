import React, { useRef } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './App.css';

function App() {
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const resumeRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <Header>
        <nav>
          <ul>
            <li><Link to="#" onClick={() => scrollToSection(aboutRef)}>About Me</Link></li>
            <li><Link to="#" onClick={() => scrollToSection(portfolioRef)}>Portfolio</Link></li>
            <li><Link to="#" onClick={() => scrollToSection(contactRef)}>Contact</Link></li>
            <li><Link to="#" onClick={() => scrollToSection(resumeRef)}>Resume</Link></li>
          </ul>
        </nav>
      </Header>
      <main>
        <section ref={aboutRef}>
          <AboutMe />
        </section>
        <section ref={portfolioRef}>
          <Portfolio />
        </section>
        <section ref={contactRef}>
          <Contact />
        </section>
        <section ref={resumeRef}>
          <Resume />
        </section>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
