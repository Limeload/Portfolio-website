import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Projects() {
  return (
    <Container className="my-5">
      <h1>Projects</h1>
      <Row className="mt-5">
        <Col lg={4} md={6} sm={12} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/350x200" />
            <Card.Body>
              <Card.Title>Project 1</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum elit vel lorem scelerisque, ut tincidunt justo aliquet.
              </Card.Text>
              <Button variant="primary">View Project</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/350x200" />
            <Card.Body>
              <Card.Title>Project 2</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum elit vel lorem scelerisque, ut tincidunt justo aliquet.
              </Card.Text>
              <Button variant="primary">View Project</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/350x200" />
            <Card.Body>
              <Card.Title>Project 3</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum elit vel lorem scelerisque, ut tincidunt justo aliquet.
              </Card.Text>
              <Button variant="primary">View Project</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
