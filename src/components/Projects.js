import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import icon3 from '../images/images/icon3.png';
import icon4 from '../images/images/icon4.png';


function Projects() {
  return (
    <Container className="my-5">
      <h2 className='projects-section'>What I Have In Here?</h2>
      <p className=' category'> Select a category to check out my work pieces</p>
      {/* <Row className="mt-5">
        {projects?.slice(0, 2).map((item) => (
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
      </Row> */}
      <Row className="mt-5">
      <Col lg={4} md={6} sm={12} className="mb-4">
      <Link to={`/projects/1`}>
              <Card>
                <img className="img-icon" src={icon3} alt={icon3} />
                <Card.Body>
                  <Card.Title className="category-title">Individual</Card.Title>
                  <Card.Text className="category-description"> Projects that I have completed on my own, showcasing my personal interests, skills, and creativity.
                  </Card.Text>
                </Card.Body>
              </Card>
              </Link>
          </Col>
          <Col lg={4} md={6} sm={12} className="mb-4">
          <Link to={`/projects/2`}>
              <Card>
                <img className="img-icon" src={icon4} alt={icon4} />
                <Card.Body>
                  <Card.Title className="category-title">Collaboration</Card.Title>
                  <Card.Text className="category-description"> Showcases my ability to work effectively with others and highlights the strengths and contributions of each team member.
                  </Card.Text>
                </Card.Body>
              </Card>
              </Link>
          </Col>
      </Row>
    </Container>
  );
}

export default Projects;
