import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className={`about-hero-content ${isVisible ? 'fade-in-up' : ''}`}>
            <h1>Our Story</h1>
            <p className="hero-subtitle">A journey of passion, community, and exceptional coffee</p>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="story-section section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>The Beginning</h2>
              <p>
                Café was born from a simple dream: to create a space where people could 
                connect over exceptional coffee in a warm, welcoming environment. Founded in 2018 
                by coffee enthusiasts, our café started as a small corner shop 
                with just a few tables and a big vision.
              </p>
              <p>
                What began as a passion project has grown into a beloved community hub, where 
                neighbors become friends and strangers become family. Every morning, we're 
                reminded of why we started this journey when we see familiar faces walking 
                through our doors, ready to start their day with a perfect cup of coffee.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <span>🏪</span>
                <p>Our original location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Community</h3>
              <p>
                Building connections is at the heart of what we do. We support local 
                artists, host community events, and create spaces for meaningful conversations.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3>Quality</h3>
              <p>
                Every cup is crafted with care, using only the finest ingredients and 
                time-tested techniques to ensure an exceptional experience every time.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">💝</div>
              <h3>Authenticity</h3>
              <p>
                We stay true to our roots while embracing innovation, creating a genuine 
                experience that reflects our passion for coffee and community.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Atmosphere Section */}
      <section className="atmosphere-section section">
        <div className="container">
          <div className="atmosphere-content">
            <div className="atmosphere-text">
              <h2>Our Atmosphere</h2>
              <p>
                Step into Café and you'll immediately feel the warmth and character 
                that makes us special. Our space is designed to be your home away from home, 
                whether you're catching up with friends, working on a project, or simply 
                enjoying a quiet moment with a good book.
              </p>
              <div className="atmosphere-features">
                <div className="atmosphere-feature">
                  <span className="feature-icon">🪑</span>
                  <div>
                    <h4>Comfortable Seating</h4>
                    <p>Cozy chairs and tables for every preference</p>
                  </div>
                </div>
                <div className="atmosphere-feature">
                  <span className="feature-icon">🎵</span>
                  <div>
                    <h4>Curated Music</h4>
                    <p>Carefully selected playlist to enhance your experience</p>
                  </div>
                </div>
                <div className="atmosphere-feature">
                  <span className="feature-icon">📚</span>
                  <div>
                    <h4>Reading Corner</h4>
                    <p>Quiet space with books and magazines to enjoy</p>
                  </div>
                </div>
                <div className="atmosphere-feature">
                  <span className="feature-icon">🌿</span>
                  <div>
                    <h4>Natural Elements</h4>
                    <p>Plants and natural light create a calming environment</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="atmosphere-image">
              <div className="image-placeholder">
                <span>🏠</span>
                <p>Our cozy interior</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Experience Our Café</h2>
            <p>Come visit us and discover why we're more than just a coffee shop – we're a community.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Visit Us Today</a>
              <a href="/menu" className="btn btn-secondary">View Our Menu</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
