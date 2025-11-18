import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { personalInfo } from '../data/staticData';

function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content" ref={heroRef}>
          <div className="hero-greeting">Hello, I'm</div>
          <h1 className="hero-name">{personalInfo.name}</h1>
          <h2 className="hero-title">{personalInfo.title}</h2>
          <p className="hero-description">{personalInfo.description}</p>
          
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              View Projects
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>

          <div className="hero-info">
            <div className="info-item">
              <span className="info-label">Location</span>
              <span className="info-value">{personalInfo.location}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email</span>
              <a href={`mailto:${personalInfo.email}`} className="info-value">
                {personalInfo.email}
              </a>
            </div>
            <div className="info-item">
              <span className="info-label">Phone</span>
              <a href={`tel:${personalInfo.phone}`} className="info-value">
                {personalInfo.phone}
              </a>
            </div>
          </div>

          <div className="hero-social">
            {personalInfo.social.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.name}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-stats">
          {personalInfo.stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
