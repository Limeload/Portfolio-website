import React from 'react';
import { Container, TabContainer} from 'react-bootstrap';

function Home() {
  return (
    <Container className="my-5">
      <TabContainer>
        <h1>Welcome to my Portfolio</h1>
        <p>This is a sample portfolio built with React and Bootstrap.</p>
      </TabContainer>
    </Container>
  );
}

export default Home;
