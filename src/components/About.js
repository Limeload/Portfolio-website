import React, { useEffect, useRef } from 'react';
import './About.css';
import { personalInfo, education, skills, certifications, experience, activities } from '../data/staticData';

function About() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref) => {
      if (!ref) return null;
      return new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('fade-in-up');
            }
          });
        },
        { threshold: 0.1 }
      );
    });

    sectionRefs.current.forEach((ref, index) => {
      if (ref && observers[index]) {
        observers[index].observe(ref);
      }
    });

    return () => {
      observers.forEach((observer, index) => {
        if (observer && sectionRefs.current[index]) {
          observer.unobserve(sectionRefs.current[index]);
        }
      });
    };
  }, []);

  return (
    <section className="about section">
      <div className="container-modern">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know more about my background and expertise</p>
        </div>

        <div className="about-intro" ref={(el) => (sectionRefs.current[0] = el)}>
          <p>
            I'm a software engineer and AWS Cloud Practitioner based in Chicago, passionate about 
            building scalable applications, automating workflows, and leveraging cloud technologies 
            to solve real-world problems. I have experience in full-stack development, cloud infrastructure, 
            and open-source contributions.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card" ref={(el) => (sectionRefs.current[1] = el)}>
            <h3>Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>{edu.institution}</h4>
                    <p className="timeline-degree">{edu.degree}</p>
                    <p className="timeline-period">{edu.period}</p>
                    <p className="timeline-description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-card" ref={(el) => (sectionRefs.current[2] = el)}>
            <h3>Skills</h3>
            <div className="skills-container">
              <div className="skill-category">
                <h4>Languages</h4>
                <div className="skill-tags">
                  {skills.languages.map((skill, index) => (
                    <span key={index} className="badge-modern">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4>Frameworks</h4>
                <div className="skill-tags">
                  {skills.frameworks.map((skill, index) => (
                    <span key={index} className="badge-modern">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4>Cloud & DevOps</h4>
                <div className="skill-tags">
                  {skills.cloud.map((skill, index) => (
                    <span key={index} className="badge-modern">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4>Databases</h4>
                <div className="skill-tags">
                  {skills.databases.map((skill, index) => (
                    <span key={index} className="badge-modern">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4>Tools</h4>
                <div className="skill-tags">
                  {skills.tools.map((skill, index) => (
                    <span key={index} className="badge-modern">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-card" ref={(el) => (sectionRefs.current[3] = el)}>
          <h3>Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card">
                <h4>{cert.name}</h4>
                <p className="cert-period">{cert.period}</p>
                {cert.credential && (
                  <a href={cert.credential} target="_blank" rel="noopener noreferrer" className="cert-link">
                    View Credential →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="about-card" ref={(el) => (sectionRefs.current[4] = el)}>
          <h3>Experience</h3>
          <div className="experience-timeline">
            {experience.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
                  <div>
                    <h4>{exp.title}</h4>
                    <p className="experience-company">{exp.company}</p>
                  </div>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <p className="experience-duration">{exp.duration}</p>
                <div className="experience-tech">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="badge-modern">{tech}</span>
                  ))}
                </div>
                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="about-card" ref={(el) => (sectionRefs.current[5] = el)}>
          <h3>Activities</h3>
          <div className="activities-grid">
            {activities.map((activity, index) => (
              <div key={index} className="activity-card">
                <h4>{activity.title}</h4>
                <p>{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
