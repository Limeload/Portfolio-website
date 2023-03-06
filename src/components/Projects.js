import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';


function Projects({projects}) {
  return (
    <Container className="my-5">
      <h2 className='projects-section'>What I Have In Here?</h2>
      <p className=' category'> Select a category to check out my work pieces</p>
      <Row className="mt-5">
        {projects.map((project) => (
        <Col lg={4} md={6} sm={12} className="mb-4">
          <Card>
            <img className="img-icon" src={project.img_url} alt={project.name}/>
            <Card.Body>
              <Card.Title className="category-title">{project.name}</Card.Title>
              <Card.Text className="category-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum elit vel lorem scelerisque, ut tincidunt justo aliquet.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>))}
      </Row>
    </Container>
  );
}

export default Projects;
