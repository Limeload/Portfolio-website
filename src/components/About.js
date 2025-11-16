import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profilePic from '../images/profilePic.jpeg';
import Footer from './Footer';

function About() {
  return (
    <Container>
      <Row className='about-section'>
        <Col md={2}>
          <Image src={profilePic} alt={profilePic} roundedCircle fluid />
        </Col>
        <Col md={10} className="about">
          <h2>About Me</h2>
          <p>Hello there, thank you for stopping by.</p>

          <p>I'm a software engineer and AWS Cloud Practitioner based in Chicago, passionate about building scalable applications, automating workflows, and leveraging cloud technologies to solve real-world problems. I have experience in full-stack development, cloud infrastructure, and open-source contributions.</p>

          <h3 className="mt-4">Education</h3>
          <ul>
            <li><strong>Per Scholas, Chicago</strong> - AWS re/Start (March 2025)</li>
            <li><strong>Flatiron School Bootcamp, Chicago</strong> - Software engineering certification (March 2023)</li>
            <li><strong>Raffles College of Higher Education, Singapore</strong> - B.A. (Hons) (June 2018)</li>
          </ul>

          <h3 className="mt-4">Skills</h3>
          <p><strong>Programming Languages & Frameworks:</strong><br />
            <span className="badge">Java</span>
            <span className="badge">Python</span>
            <span className="badge">JavaScript</span>
            <span className="badge">TypeScript</span>
            <span className="badge">React</span>
            <span className="badge">Flask</span>
            <span className="badge">Spring Boot</span>
            <span className="badge">Tailwind CSS</span>
            <span className="badge">Material UI</span>
          </p>

          <p><strong>Cloud & DevOps:</strong><br />
            <span className="badge">AWS</span>
            <span className="badge">Lambda</span>
            <span className="badge">S3</span>
            <span className="badge">Docker</span>
            <span className="badge">GitLab CI/CD</span>
          </p>

          <p><strong>Databases:</strong><br />
            <span className="badge">PostgreSQL</span>
            <span className="badge">DynamoDB</span>
            <span className="badge">MySQL</span>
          </p>

          <p><strong>Tools & Others:</strong><br />
            <span className="badge">Git</span>
            <span className="badge">GitLab</span>
            <span className="badge">GitHub</span>
            <span className="badge">Postman</span>
            <span className="badge">Swagger</span>
          </p>

          <h3 className="mt-4">Certifications</h3>
          <ul>
            <li><strong>AWS Certified Cloud Practitioner</strong> (2025-2028) - <a href="https://www.credly.com/badges/aws-certified-cloud-practitioner" target="_blank" rel="noopener noreferrer">Credential</a></li>
            <li><strong>Generative AI Fundamentals</strong> – Databricks Academy (2025-2027) - <a href="https://www.credly.com/badges/generative-ai-fundamentals" target="_blank" rel="noopener noreferrer">Credential</a></li>
            <li><strong>Georgia Tech–CS1331xI:</strong> Intro to Object-Oriented Programming with Java I (2025) - <a href="https://www.credly.com/badges/georgia-tech-java" target="_blank" rel="noopener noreferrer">Credential</a></li>
            <li><strong>Cisco–Python Essentials</strong> (2025) - <a href="https://www.credly.com/badges/cisco-python" target="_blank" rel="noopener noreferrer">Credential</a></li>
          </ul>

          <h3 className="mt-4">Experience</h3>
          <div className="mb-3">
            <h5>Open Source Developer | Hacktoberfest (~160 hours)</h5>
            <p><em>October 2025</em></p>
            <p>Python, TypeScript, CLI development, API integration, and database management</p>
            <ul>
              <li>Developed Terminal CLI Agent, an intelligent command-line tool to automate repetitive tasks, integrate with APIs, and boost developer productivity with cross-platform functionality.</li>
              <li>Built MCP (Model Context Protocol) for Database, an AI-driven workflow system that integrates multiple databases, automates query handling, and streamlines data orchestration.</li>
              <li>Delivered two functional open-source projects, enhancing workflow automation and efficiency for developers.</li>
              <li>Contributed to the Hacktoberfest community by releasing maintainable, well-documented open-source tools.</li>
            </ul>
          </div>

          <div className="mb-3">
            <h5>Identity Access Manager for Distributed Services | Open Source (~120 hours)</h5>
            <p><em>September 2025 - October 2025</em></p>
            <p>Java, Spring Boot, JWT, OAuth2, AWS Lambda, DynamoDB</p>
            <ul>
              <li>Developed a secure authentication and authorization service for microservices with token rotation, permission groups, and audit logs.</li>
              <li>Designed a Lambda-powered token verifier with DynamoDB for session persistence and revocation lists.</li>
              <li>Integrated multi-environment CI/CD using GitLab, enabling automated deployments.</li>
            </ul>
          </div>

          <div className="mb-3">
            <h5>UI Engineer Intern | Patient Studio (~720 hours)</h5>
            <p><em>September 2021 - March 2022</em></p>
            <p>React Native, Tailwind CSS, Apollo GraphQL</p>
            <ul>
              <li>Designed and implemented UI components to execute front-end queries and mutations within the React framework, enhancing user interactions and system performance.</li>
              <li>Facilitated daily sprint stand-ups for a cross-functional team, driving discussions around feature development, bug fixes, and project progress to ensure alignment and timely delivery.</li>
              <li>Designed and developed dynamic patient form pages with seamless API integrations and reusable components, optimizing data collection workflows and enhancing the overall user experience.</li>
              <li>Developed and launched an improved chat widget to facilitate real-time communication between patients and doctors, enhancing accessibility and user engagement.</li>
            </ul>
          </div>

          <h3 className="mt-4">Activities</h3>
          <ul>
            <li><strong>Technical Blog Writer</strong> - Published 10+ articles covering cloud engineering, Python patterns, and AI tooling; shared practical breakdowns of architectures, performance tips, and debugging approaches.</li>
            <li><strong>Hackathon Participant</strong> - Competed in 3+ cloud & AI hackathons, focusing on automation and developer tools.</li>
            <li><strong>AWS Free Tier Experiments</strong> - Explored EC2, Lambda, S3, RDS, and serverless workflows to gain hands-on cloud experience.</li>
            <li><strong>Freelance Developer</strong> - Completed client projects building web apps, APIs, and automation tools; delivered end-to-end solutions using React, Python, AWS, and database technologies.</li>
          </ul>

          <p className="mt-4">Let's connect and create something amazing!</p>

        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default About;
