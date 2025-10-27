import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className={`hero-content ${isVisible ? 'fade-in-up' : ''}`}>
            <h1 className="hero-title">Café</h1>
            <p className="hero-subtitle">Where Every Sip Feels Like Home</p>
            <p className="hero-description">
              Experience the perfect blend of tradition and innovation in every cup. 
              From our carefully sourced beans to our cozy atmosphere, we create moments 
              that warm your heart and awaken your senses.
            </p>
            <div className="hero-buttons">
              <Link to="/menu" className="btn btn-primary">
                Explore Our Menu
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Visit Us
              </Link>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <button
            className="scroll-arrow-btn"
            aria-label="Scroll down to features"
            onClick={() => {
              const nextSection = document.querySelector('.features');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <div className="scroll-arrow"></div>
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Our Café?</h2>
            <p>Discover what makes our café a special place for coffee lovers</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">☕</div>
              <h3>Premium Coffee</h3>
              <p>Hand-selected beans from the finest coffee regions, roasted to perfection for an exceptional taste experience.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏠</div>
              <h3>Cozy Atmosphere</h3>
              <p>Our warm and inviting space is designed to make you feel at home, whether you're working or relaxing.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🥐</div>
              <h3>Fresh Pastries</h3>
              <p>Daily-baked treats made with love, perfectly paired with your favorite coffee or tea.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Customers Say</h2>
            <p>Real experiences from our beloved coffee community</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The best coffee in town! The atmosphere is so welcoming and the staff always remembers my order. It's become my second home."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👩</div>
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <span>Regular Customer</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Amazing pastries and the perfect latte art! I love coming here for my morning coffee - it sets the tone for my entire day."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👨</div>
                <div className="author-info">
                  <h4>Michael Chen</h4>
                  <span>Coffee Enthusiast</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Great place to work remotely! Fast WiFi, comfortable seating, and the background music is just right. Plus, the coffee is incredible."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👩‍💻</div>
                <div className="author-info">
                  <h4>Emily Rodriguez</h4>
                  <span>Remote Worker</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience Café?</h2>
            <p>Join us for a cup of coffee and discover why we're the community's favorite gathering place.</p>
            <div className="cta-buttons">
              <Link to="/menu" className="btn btn-primary">
                View Our Menu
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
