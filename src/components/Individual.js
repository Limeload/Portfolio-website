import React from 'react';
import {useState, useEffect} from 'react';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import github from '../images/github.png';
import demo from '../images/demo.png';
import tech from '../images/tech.png';
import Footer from './Footer';


function Individual() {
    const [individuals, setIndividuals] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/individual')
        .then(response => response.json())
        .then(data => setIndividuals(data))
    }, []);
    return (
        <div>
             <Container className="my-5">
                 {individuals?.map((item) => (
                           <><br /><br />
                           <h2 className='projects-section'>{item.name}</h2>
                           <p className=' category'>{item.description}</p>
                           <Row className="mt-5">
                         <Col md={8}>
                             <Image className="project-image" src={item.images} alt={item.images} fluid />
                         </Col>
                         <Col md={4}>
                             <ListGroup className="technologies">
                                 <ListGroup.Item className="d-flex align-items-center">
                                 <img className="img-icon" src={github} alt={github}/>
                                 <a href={item.github}><strong>Github</strong></a>                                 </ListGroup.Item>
                                 <ListGroup.Item className="d-flex align-items-center">
                                 <img className="img-icon" src={demo} alt={demo}/>
                                 <a href={item.demo}><strong>Demo</strong></a>                                 </ListGroup.Item>
                                 <ListGroup.Item className="d-flex align-items-center">
                                     <img className="img-icon" src={tech} alt={tech}/>
                                     {/* <strong>Technologies Used:</strong> */}
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

export default Individual;
