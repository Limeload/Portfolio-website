import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profilePic from '../images/profilePic.jpeg';
import Footer from './Footer';
import logistician from '../images/logistician.svg';

function About() {
  return (
    <Container>
      <Row className='about-section'>
        <Col md={2}>
          <Image src={profilePic} alt={profilePic} roundedCircle fluid />
        </Col>
        <Col md={8} className="about">
          <p>Hello there, thank you for stopping by.</p>

<p>The human brain is a crazy place and using both the logical and creative sides of it has always been my goal. I began my career as a fashion designer with a vision of sustainability, zero waste, and the goal of a small business. I maintain a professional Instagram account to display fine pieces of apparel, fashion illustrations, and some snippets of the fashion lifestyle.</p>

<p>Instagram handle - <a href="https://www.instagram.com/freedinfinery">@freedinfinery</a> </p>

<p>Down the line, my interest has inclined towards establishing technical expertise because being 'T-shaped' is one of the greatest skills to have, and coding helped me to achieve that aspect. I have learned programming over time and I seek to collaborate with talented tech professionals in a challenging environment with an eye for detail and strong documentation skills to be applied towards addressing and resolving problems (bugs), improving product quality, UI experience, and achieving business goals.</p>

<p>In my spare time, you can find me at the gym, or in a book club. I enjoy traveling and exploring contemporary art museums. I also enjoy indoor activities that involve baking and teaching fashion sketching online. 'Tarot reading' is one of the special talents that I share with my family and friends.</p>

<p>Read how my personality type operates in the workplace - <a href="https://www.16personalities.com/istjs-at-work"><img src={logistician} alt="Logistician" /></a>
</p>

<p>Areas of expertise - </p>

<p>Technologies -
  <span class="badge">HTML 5</span>
  <span class="badge">CSS 3.0</span>
  <span class="badge">JavaScript</span>
  <span class="badge">Typescript</span>
  <span class="badge">Tailwind CSS</span>
  <span class="badge">Apollo GraphQL</span>
  <span class="badge">React.js</span>
  <span class="badge">Ruby on Rails</span>
  <span class="badge">Bootstrap</span>
  <span class="badge">Git</span>
</p>

<p>Software -
  <span class="badge">Visual Studio Code</span>
  <span class="badge">Github</span>
  <span class="badge">Postman</span>
  <span class="badge">Chrome developer tools</span>
  <span class="badge">Adobe Photoshop</span>
  <span class="badge">Adobe Illustrator</span>
  <span class="badge">Figma</span>
  <span class="badge">Adobe XD</span>
</p>

<p>Tools -
  <span class="badge">Trello</span>
  <span class="badge">Jira</span>
  <span class="badge">Mailchimp</span>
</p>

<p>Let's connect and create something amazing!</p>

        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default About;
