import React from 'react';
// import {useState, useEffect} from 'react';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import github from '../images/github.png';
import demo from '../images/demo.png';
import tech from '../images/tech.png';
import pickmeinacup from '../images/projects/pickmeinacup.png';
import taskhive from '../images/projects/taskhive.png';
import Footer from './Footer';

function Collaboration() {
    // const [collab, setCollab] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:3001/collaboration')
    //     .then(response => response.json())
    //     .then(data => setCollab(data))
    // }, []);
    return (
        <div>
        <Container className="my-5">
                      <><br /><br />
                      <h2 className='projects-section'>PickMeInACup</h2>
                      <p className=' category'>PickMeInACup is a web application built using the React framework that enables users to easily order their favorite plant milk coffees from the comfort of their own homes.</p>
                      <Row className="mt-5">
                    <Col md={8}>
                        <Image className="project-image" src={pickmeinacup} alt={pickmeinacup} fluid />
                    </Col>
                    <Col md={4}>
                        <ListGroup className="technologies">
                            <ListGroup.Item className="d-flex align-items-center">
                            <img className="img-icon" src={github} alt={github}/>
                            <a href="https://github.com/Limeload/PickMeUpInACup"><strong>Github</strong></a>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center">
                            <img className="img-icon" src={demo} alt={demo}/>
                            <a href=""><strong>Demo</strong></a>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center">
                                <img className="img-icon" src={tech} alt={tech}/>
                                {/* <strong>Technologies Used:</strong> */}
                                <ul className='badge-list'>
                              <li className='badge'>Bootstrap</li>
                              <li className='badge'>React.js</li>
                               </ul>
                           </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row></>

                <><br /><br />
                      <h2 className='projects-section'>TaskHive</h2>
                      <p className=' category'>This is a web application for managing tasks. The application allows users to create tasks, assign tasks to projects, set deadlines, prioritize tasks, and track their progress.</p>
                      <Row className="mt-5">
                    <Col md={8}>
                        <Image className="project-image" src={taskhive} alt={taskhive} fluid />
                    </Col>
                    <Col md={4}>
                        <ListGroup className="technologies">
                            <ListGroup.Item className="d-flex align-items-center">
                            <img className="img-icon" src={github} alt={github}/>
                            <a href="https://github.com/Limeload/TaskHive"><strong>Github</strong></a>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center">
                            <img className="img-icon" src={demo} alt={demo}/>
                            <a href=""><strong>Demo</strong></a>
                             </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center">
                                <img className="img-icon" src={tech} alt={tech}/>
                                {/* <strong>Technologies Used:</strong> */}
                                <ul className='badge-list'>
                              <li className='badge'>Ruby on Rails</li>
                              <li className='badge'>Bootstrap</li>
                              <li className='badge'>React.js</li>
                               </ul>
                           </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row></>

            <Footer />
</Container>
   </div>
    )
}

export default Collaboration;
