import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NavbarComponent from './NavbarComponent';
import "../App.css";
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Individual from './Individual';
import Collaboration from './Collaboration';
import ProductClones from './ProductClones';
import Vertical from './Vertical';
import JavaScript from './JavaScript';
import CaseStudies from './CaseStudies';

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
        <Route path="/projects/1"><Individual /></Route>
        <Route path="/projects/2"><Collaboration /></Route>
        <Route path="/projects/3"><ProductClones /></Route>
        <Route path="/projects/4"><Vertical /></Route>
        <Route path="/projects/5"><JavaScript /></Route>
        <Route path="/projects/6"><CaseStudies /></Route>

        </Container>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
