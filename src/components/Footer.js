import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Café Information */}
          <div className="footer-section">
            <h3>Café</h3>
            <p>Where Every Sip Feels Like Home</p>
            <div className="address">
              <p>123 Coffee Street</p>
              <p>Downtown District</p>
              <p>City, State 12345</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <p>
                <span className="icon">📞</span>
                (555) 123-CAFE
              </p>
              <p>
                <span className="icon">✉️</span>
                example@example.com
              </p>
              <p>
                <span className="icon">🕒</span>
                Mon-Fri: 7AM-8PM<br />
                Sat-Sun: 8AM-9PM
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#">
                <FaInstagram className="social-icon" />
                Instagram
              </a>
              <a href="#">
                <FaFacebook className="social-icon" />
                Facebook
              </a>
              <a href="#">
                <FaTiktok className="social-icon" />
                TikTok
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="quick-links">
              <a href="/about">About Us</a>
              <a href="/menu">Our Menu</a>
              <a href="/gallery">Gallery</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-corners">
            <div className="footer-bottom-left">
              <p>&copy; {currentYear} Café. All rights reserved.</p>
            </div>
            <div className="footer-bottom-right">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;