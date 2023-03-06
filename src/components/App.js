import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import {useState, useEffect} from 'react';

// import About from './components/About';
import Projects from './Projects';
// import Contact from './components/Contact';
import Footer from './Footer';
import MediumFeed from './MediumFeed';
import NavbarComponent from './NavbarComponent';
import "../App.css";
import { Container } from 'react-bootstrap';


function App() {
  const [projects, setProjects] = useState('');
  useEffect(() => {
    fetch('http://localhost:3001/projects')
    .then(response => response.json())
    .then(projects => setProjects(projects))
      }, []);
  return (
    // <Router>
    //   <>
      <div className="App">
      <NavbarComponent />
      <Container>
        <Home />
        {/* <About /> */}
        <Projects projects={projects} />
        <MediumFeed username="shraddharao_" />
        {/* <Contact /> */}
        <Footer />
      </Container>
    </div>
    //     <Route exact path="/" component={Home} />
    //     <Route path="/about" component={About} />
    //     <Route path="/projects" component={Projects} />
    //     <Route path="/contact" component={Contact} />
    //   </>
    // </Router>
  );
}

export default App;
