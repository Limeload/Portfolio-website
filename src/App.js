import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavbarComponent from './components/NavbarComponent';
import "./App.css";
import { Container } from 'react-bootstrap';


function App() {
  return (
    // <Router>
    //   <>
      <div className="App">
      <NavbarComponent />
      <Container>
        <Home />
        <About />
        <Projects />
        <Contact />
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
