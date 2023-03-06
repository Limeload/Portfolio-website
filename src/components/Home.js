import React from 'react';
import { Container, TabContainer, Button} from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import About from './About';



function Home() {
  const [showAbout, setShowAbout] = React.useState(false);
  return (
    <Container className="my-5">
      <TabContainer>
        <h1 className="hello">HELLO,
        <p className="welcome-message">I'm <span style={{color: '#033374'}}>Shraddha Rao</span>, a software engineer based in Chicago. I am passionate about building software that solves real-world problems and makes a positive impact on people's lives.</p>
        </h1>
        <Button variant="dark" onClick={() => setShowAbout(true)}> Get to know me!
        {/* <Link to="/about">About</Link> */}
        </Button>
        {showAbout && <About/>}
      </TabContainer>
    </Container>
  );
}

export default Home;
