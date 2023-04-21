import React from 'react';
import { Container, TabContainer, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import Footer from './Footer';
import MediumFeed from './MediumFeed';
import Projects from './Projects';

function Home() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/projects')
    .then(response => response.json())
    .then(data => setProjects(data))
      }, []);
  return (
    <Container className="my-5">
      <TabContainer>
        <h1 className="hello">HELLO,
        <p className="welcome-message">I'm <span style={{color: '#033374'}}>Shraddha Rao</span>, a software engineer based in Chicago. I am passionate about building software that solves real-world problems and makes a positive impact on people's lives.</p>
        </h1>
        <Link to="/about"> <Button variant='dark'> Get to know me!</Button></Link>
      </TabContainer>
      <div>
        <Projects projects={projects} />
        <MediumFeed username="shraddharao_" />
      </div>
      <Footer />
    </Container>
  );
}

export default Home;
