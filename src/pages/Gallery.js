import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const galleryImages = [
    {
      id: 1,
      title: 'Cozy Interior',
      description: 'Our warm and welcoming café interior',
      category: 'interior',
      emoji: '🏠'
    },
    {
      id: 2,
      title: 'Fresh Coffee',
      description: 'Perfectly brewed coffee with beautiful latte art',
      category: 'coffee',
      emoji: '☕'
    },
    {
      id: 3,
      title: 'Delicious Pastries',
      description: 'Freshly baked pastries and desserts',
      category: 'food',
      emoji: '🥐'
    },
    {
      id: 4,
      title: 'Reading Corner',
      description: 'Quiet space for reading and relaxation',
      category: 'interior',
      emoji: '📚'
    },
    {
      id: 5,
      title: 'Coffee Beans',
      description: 'Premium coffee beans from around the world',
      category: 'coffee',
      emoji: '🫘'
    },
    {
      id: 6,
      title: 'Outdoor Seating',
      description: 'Enjoy your coffee in our outdoor garden',
      category: 'interior',
      emoji: '🌿'
    },
    {
      id: 7,
      title: 'Artisan Sandwiches',
      description: 'Fresh ingredients in every bite',
      category: 'food',
      emoji: '🥪'
    },
    {
      id: 8,
      title: 'Barista at Work',
      description: 'Our skilled baristas crafting the perfect cup',
      category: 'coffee',
      emoji: '👨‍🍳'
    },
    {
      id: 9,
      title: 'Dessert Display',
      description: 'Sweet treats to satisfy your cravings',
      category: 'food',
      emoji: '🍰'
    },
    {
      id: 10,
      title: 'Morning Light',
      description: 'Beautiful morning atmosphere in our café',
      category: 'interior',
      emoji: '🌅'
    },
    {
      id: 11,
      title: 'Coffee Roasting',
      description: 'Freshly roasted beans for the perfect flavor',
      category: 'coffee',
      emoji: '🔥'
    },
    {
      id: 12,
      title: 'Community Space',
      description: 'A place where friends and families gather',
      category: 'interior',
      emoji: '👥'
    }
  ];

  const categories = [
    { id: 'all', name: 'All', icon: '📸' },
    { id: 'interior', name: 'Interior', icon: '🏠' },
    { id: 'coffee', name: 'Coffee', icon: '☕' },
    { id: 'food', name: 'Food', icon: '🍽️' }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="container">
          <div className={`gallery-hero-content ${isVisible ? 'fade-in-up' : ''}`}>
            <h1>Gallery</h1>
            <p className="hero-subtitle">A glimpse into the Café experience</p>
          </div>
        </div>
      </section>

      {/* Gallery Navigation */}
      <section className="gallery-nav section">
        <div className="container">
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="filter-icon">{category.icon}</span>
                <span className="filter-name">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid-section section">
        <div className="container">
          <div className="gallery-grid">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id}
                className="gallery-item"
                onClick={() => openModal(image)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="gallery-image">
                  <div className="image-placeholder">
                    <span className="image-emoji">{image.emoji}</span>
                  </div>
                  <div className="gallery-overlay">
                    <div className="overlay-content">
                      <h3>{image.title}</h3>
                      <p>{image.description}</p>
                      <span className="view-btn">View</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="instagram-section section">
        <div className="container">
          <div className="section-header">
            <h2>Follow Our Journey</h2>
            <p>See more of our daily moments on Instagram</p>
          </div>
          <div className="instagram-cta">
            <div className="instagram-content">
              <div className="instagram-icon">📷</div>
              <h3>@cafe</h3>
              <p>Follow us for daily coffee inspiration, behind-the-scenes moments, and special announcements.</p>
              <a 
                href="https://instagram.com/cafearoma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-image">
              <div className="modal-image-placeholder">
                <span className="modal-emoji">{selectedImage.emoji}</span>
              </div>
            </div>
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
