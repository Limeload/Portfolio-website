import React from 'react';
// import {useState, useEffect} from 'react';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import github from '../images/github.png';
import demo from '../images/demo.png';
import tech from '../images/tech.png';
import peercashew from '../images/projects/peercashew4.png';
import urbaneyes from '../images/projects/urbaneyes.png';
import mixology from '../images/projects/mixology.png';
import rhythmiq from '../images/projects/rhythmiq.png';
import Footer from './Footer';


function Individual() {
    // const [individuals, setIndividuals] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:3001/individual')
    //     .then(response => response.json())
    //     .then(data => setIndividuals(data))
    // }, []);
    return (
        <div>
             <Container className="my-5">
                           <><br /><br />
                           <h2 className='projects-section'>PeerCashew</h2>
                           <p className=' category'>PeerCashew is a peer-to-peer lending platform that allows borrowers to connect with investors and obtain loans.</p>
                           <Row className="mt-5">
                         <Col md={8}>
                             <Image className="project-image" src={peercashew} alt={peercashew} fluid />
                         </Col>
                         <Col md={4}>
                             <ListGroup className="technologies">
                                 <ListGroup.Item className="d-flex align-items-center">
                                 <img className="img-icon" src={github} alt={github}/>
                                 <a href="https://github.com/Limeload/PeerCashew"><strong>Github</strong></a>
                                 </ListGroup.Item>
                                 <ListGroup.Item className="d-flex align-items-center">
                                 <img className="img-icon" src={demo} alt={demo}/>
                                 <a href="https://youtu.be/1M7A8-FhsaM"><strong>Demo</strong></a>
                                 </ListGroup.Item>
                                 <ListGroup.Item className="d-flex align-items-center">
                                     <img className="img-icon" src={tech} alt={tech}/>
                                     {/* <strong>Technologies Used:</strong> */}
                                     <ul className='badge-list'>
                                   <li className='badge'>React.js</li>
                                   <li className='badge'>Rails</li>
                                   <li className='badge'>Postgresql</li>
                                   <li className='badge'>Stripe payment API</li>
                                   <li className='badge'>Bootstrap</li>
                                    </ul>
                                </ListGroup.Item>
                             </ListGroup>
                         </Col>
                     </Row></>

                     <><br /><br />
                           <h2 className='projects-section'>UrbanEyes</h2>
                           <p className=' category'>UrbanEyes is designed to help cities and communities become more efficient, sustainable, and livable.</p>
                           <Row className="mt-5">
                         <Col md={8}>
                             <Image className="project-image" src={urbaneyes} alt={urbaneyes} fluid />
                         </Col>
                         <Col md={4}>
                             <ListGroup className="technologies">
                                 <ListGroup.Item className="d-flex align-items-center">
                                 <img className="img-icon" src={github} alt={github}/>
                                 <a href="https://github.com/Limeload/UrbanEyes"><strong>Github</strong></a>
                                 </ListGroup.Item>
                                 {/* <ListGroup.Item className="d-flex align-items-center">
                                 <img className="img-icon" src={demo} alt={demo}/>
                                 <a href="https://youtu.be/1M7A8-FhsaM"><strong>Demo</strong></a>
                                 </ListGroup.Item> */}
                                 <ListGroup.Item className="d-flex align-items-center">
                                     <img className="img-icon" src={tech} alt={tech}/>
                                     {/* <strong>Technologies Used:</strong> */}
                                     <ul className='badge-list'>
                                   <li className='badge'>React.js</li>
                                   <li className='badge'>Ruby on Rails</li>
                                   <li className='badge'>Bootstrap</li>
                                    </ul>
                                </ListGroup.Item>
                             </ListGroup>
                         </Col>
                     </Row></>

                     <><br /><br />
                           <h2 className='projects-section'>Mixology</h2>
                           <p className=' category'>Mixology is a Single Page Application allowing different kinds of selection operations over Cocktail recipes.</p>
                           <Row className="mt-5">
                         <Col md={8}>
                             <Image className="project-image" src={mixology} alt={mixology} fluid />
                         </Col>
                         <Col md={4}>
                             <ListGroup className="technologies">
                                 <ListGroup.Item className="d-flex align-items-center">
                                 <img className="img-icon" src={github} alt={github}/>
                                 <a href="https://github.com/Limeload/Mixology"><strong>Github</strong></a>
                                 </ListGroup.Item>
                                 <ListGroup.Item className="d-flex align-items-center">
                                 <img className="img-icon" src={demo} alt={demo}/>
                                 <a href="https://youtu.be/j7ZlXX-8hxQ"><strong>Demo</strong></a>
                                 </ListGroup.Item>
                                 <ListGroup.Item className="d-flex align-items-center">
                                     <img className="img-icon" src={tech} alt={tech}/>
                                     {/* <strong>Technologies Used:</strong> */}
                                     <ul className='badge-list'>
                                   <li className='badge'>HTML</li>
                                   <li className='badge'>CSS</li>
                                   <li className='badge'>Bootstrap</li>
                                   <li className='badge'>JavaScript</li>
                                    </ul>
                                </ListGroup.Item>
                             </ListGroup>
                         </Col>
                     </Row></>

                     <><br /><br />
                           <h2 className='projects-section'>Rhythmiq</h2>
                           <p className=' category'>Rhythmiq is a music app built with the Spotify API and React. With Rhythmiq, users can listen to their favorite songs, discover new music, and create custom playlists.</p>
                           <Row className="mt-5">
                         <Col md={8}>
                             <Image className="project-image" src={rhythmiq} alt={rhythmiq} fluid />
                         </Col>
                         <Col md={4}>
                             <ListGroup className="technologies">
                                 <ListGroup.Item className="d-flex align-items-center">
                                 <img className="img-icon" src={github} alt={github}/>
                                 <a href="https://github.com/Limeload/Rhythmiq"><strong>Github</strong></a>
                                 </ListGroup.Item>
                                 {/* <ListGroup.Item className="d-flex align-items-center">
                                 <img className="img-icon" src={demo} alt={demo}/>
                                 <a href="https://youtu.be/j7ZlXX-8hxQ"><strong>Demo</strong></a>
                                 </ListGroup.Item> */}
                                 <ListGroup.Item className="d-flex align-items-center">
                                     <img className="img-icon" src={tech} alt={tech}/>
                                     {/* <strong>Technologies Used:</strong> */}
                                     <ul className='badge-list'>
                                   <li className='badge'>HTML</li>
                                   <li className='badge'>CSS</li>
                                   <li className='badge'>JavaScript</li>
                                   <li className='badge'>React.js</li>
                                   <li className='badge'>Spotify API</li>
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

export default Individual;
