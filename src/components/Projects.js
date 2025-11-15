import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Projects({ projects }) {
  return (
    <Container className="my-5">
      <h2 className='projects-section'>Projects & Experiences</h2>
      <p className=' category'>Select a category to check out my work pieces</p>
      <Row className="mt-5">
        {projects?.map((item) => (
          <Col lg={4} md={6} sm={12} className="mb-4" key={item.id}>
            <Link to={`/projects/${item.id}`}>
              <Card>
                <img className="img-icon" src={item.img_url} alt={item.name}/>
                <Card.Body>
                  <Card.Title className="category-title">{item.name}</Card.Title>
                  <Card.Text className="category-description">
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
