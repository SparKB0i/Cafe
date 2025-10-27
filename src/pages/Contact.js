import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Address',
      details: ['123 Coffee Street', 'Downtown District', 'City, State 12345']
    },
    {
      icon: '📞',
      title: 'Phone',
      details: ['(555) 123-CAFE', 'Call us for orders or questions']
    },
    {
      icon: '✉️',
      title: 'Email',
      details: ['example@example.com', 'We respond within 24 hours']
    },
    {
      icon: '🕒',
      title: 'Hours',
      details: ['Mon-Fri: 7:00 AM - 8:00 PM', 'Sat-Sun: 8:00 AM - 9:00 PM']
    }
  ];

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className={`contact-hero-content ${isVisible ? 'fade-in-up' : ''}`}>
            <h1>Contact Us</h1>
            <p className="hero-subtitle">We'd love to hear from you</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="contact-info-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                <div className="info-details">
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Form Section */}
      <section className="map-form-section section">
        <div className="container">
          <div className="map-form-content">
            {/* Map Section */}
            <div className="map-section">
              <h2>Find Us</h2>
              <div className="map-container">
                <div className="map-placeholder">
                  <div className="map-content">
                    <span className="map-icon">🗺️</span>
                    <h3>Google Maps</h3>
                    <p>123 Coffee Street, Downtown District</p>
                    <p>City, State 12345</p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="form-section">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="catering">Catering Services</option>
                      <option value="events">Private Events</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    <span className="success-icon">✅</span>
                    <p>Thank you! Your message has been sent successfully.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Do you offer catering services?</h3>
              <p>Yes! We provide catering for events, meetings, and special occasions. Contact us for custom menus and pricing.</p>
            </div>
            <div className="faq-item">
              <h3>Can I reserve a table?</h3>
              <p>While we don't take reservations for regular seating, we do offer private event bookings for larger groups.</p>
            </div>
            <div className="faq-item">
              <h3>Do you have WiFi?</h3>
              <p>Absolutely! We provide free high-speed WiFi for all our customers. Perfect for remote work or studying.</p>
            </div>
            <div className="faq-item">
              <h3>Are you pet-friendly?</h3>
              <p>Yes, we welcome well-behaved pets in our outdoor seating area. Please keep them leashed and clean up after them.</p>
            </div>
            <div className="faq-item">
              <h3>Do you have parking?</h3>
              <p>We have limited street parking available. There's also a public parking garage two blocks away.</p>
            </div>
            <div className="faq-item">
              <h3>Can I order online?</h3>
              <p>Online ordering is coming soon! For now, you can call ahead to place your order for pickup.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
