import React from 'react';
import { Container, TabContainer, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Projects from './Projects';
import { projects } from '../data/staticData';

function Home() {
  return (
    <Container className="my-5">
      <TabContainer>
        <h1 className="hello">HELLO,
        <p className="welcome-message">I'm <span style={{color: '#033374'}}>Manikonda Shraddha Rao</span>, a software engineer and AWS Cloud Practitioner based in Chicago. I am passionate about building software that solves real-world problems, automating workflows, and creating efficient cloud-based solutions.</p>
        </h1>
        <Link to="/about"> <Button variant='dark'> Get to know me!</Button></Link>
      </TabContainer>
      <div>
        <Projects projects={projects} />
      </div>
      <Footer />
    </Container>
  );
}

export default Home;
