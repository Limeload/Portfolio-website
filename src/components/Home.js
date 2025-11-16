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
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="container-modern">
        <div className="hero-content" ref={heroRef}>
          <div className="hero-greeting fade-in">Hello, I'm</div>
          <h1 className="hero-name">
            {personalInfo.name}
          </h1>
          <h2 className="hero-title gradient-text">
            {personalInfo.title}
          </h2>
          <p className="hero-description">
            {personalInfo.description}
          </p>
          
          <div className="hero-buttons">
            <Link to="/projects" className="btn-modern">
              View My Work
            </Link>
            <Link to="/contact" className="btn-modern btn-outline">
              Get In Touch
            </Link>
          </div>

          <div className="hero-social">
            {personalInfo.social.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="social-link"
              >
                {social.icon || social.name}
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

      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
}

export default Home;
