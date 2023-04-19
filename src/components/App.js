import React from 'react';
import Home from './Home';
import About from './About';
// import Projects from './Projects';
import Contact from './Contact';
// import Footer from './Footer';
// import MediumFeed from './MediumFeed';
import NavbarComponent from './NavbarComponent';
import "../App.css";
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Container>
        <NavbarComponent />
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/contact"><Contact /></Route>
        {/* <Route path="/projects"><Projects projects={projects} /></Route> */}
        {/* <Route path="/blog"><MediumFeed username="shraddharao_" /></Route> */}
        {/* <Route path="/footer"><Footer /></Route> */}
        </Container>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
