import React from 'react';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import github from '../images/github.png';
import demo from '../images/demo.png';
import tech from '../images/tech.png';
import Footer from './Footer';
import { fullStackProjects } from '../data/staticData';

function Collaboration() {
    return (
        <div>
        <Container className="my-5">
            {fullStackProjects?.map((item) => (
                      <><br /><br />
                      <h2 className='projects-section'>{item.name}</h2>
                      <p className=' category'>{item.description}</p>
                      <Row className="mt-5">
                    <Col md={8}>
                        <Image className="project-image" src={item.images} alt={item.images} fluid />
                    </Col>
                    <Col md={4}>
                        <ListGroup className="technologies">
                            {item.github && (
                            <ListGroup.Item className="d-flex align-items-center">
                            <img className="img-icon" src={github} alt={github}/>
                            <a href={item.github} target="_blank" rel="noopener noreferrer"><strong>Github</strong></a>
                            </ListGroup.Item>
                            )}
                            {item.demo && (
                            <ListGroup.Item className="d-flex align-items-center">
                            <img className="img-icon" src={demo} alt={demo}/>
                            <a href={item.demo} target="_blank" rel="noopener noreferrer"><strong>Demo</strong></a>
                            </ListGroup.Item>
                            )}
                            <ListGroup.Item className="d-flex align-items-center">
                                <img className="img-icon" src={tech} alt={tech}/>
                                <ul className='badge-list'>
                              {item.technologies.map((tech, index) => (
                              <li key={index} className='badge'>{tech}</li>
                              ))}
                               </ul>
                           </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row></>
            ))}
            <Footer />
</Container>
   </div>
    )
}

export default Collaboration;
