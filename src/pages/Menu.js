import React, { useState, useEffect } from 'react';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'coffee', name: 'Coffee', icon: '☕' },
    { id: 'pastries', name: 'Pastries', icon: '🥐' },
    { id: 'sandwiches', name: 'Sandwiches', icon: '🥪' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'beverages', name: 'Beverages', icon: '🥤' }
  ];

  const menuItems = {
    coffee: [
      { name: 'Espresso', description: 'Rich, full-bodied shot of pure coffee', price: '£3.50', image: '☕' },
      { name: 'Americano', description: 'Espresso with hot water for a smooth taste', price: '£4.00', image: '☕' },
      { name: 'Cappuccino', description: 'Espresso with steamed milk and foam', price: '£4.50', image: '☕' },
      { name: 'Latte', description: 'Espresso with steamed milk and light foam', price: '£5.00', image: '☕' },
      { name: 'Mocha', description: 'Espresso with chocolate and steamed milk', price: '£5.50', image: '☕' },
      { name: 'Cold Brew', description: 'Smooth, refreshing cold-brewed coffee', price: '£4.25', image: '🧊' },
      { name: 'Iced Coffee', description: 'Chilled coffee served over ice', price: '£3.75', image: '🧊' },
      { name: 'Macchiato', description: 'Espresso with a dollop of foam', price: '£4.25', image: '☕' }
    ],
    pastries: [
      { name: 'Croissant', description: 'Buttery, flaky French pastry', price: '£3.25', image: '🥐' },
      { name: 'Chocolate Croissant', description: 'Croissant filled with rich chocolate', price: '£3.75', image: '🥐' },
      { name: 'Danish Pastry', description: 'Sweet pastry with fruit filling', price: '£3.50', image: '🥐' },
      { name: 'Muffin', description: 'Freshly baked muffin of the day', price: '£2.95', image: '🧁' },
      { name: 'Scone', description: 'Traditional British scone with jam', price: '£3.00', image: '🥐' },
      { name: 'Bagel', description: 'Fresh bagel with cream cheese', price: '£3.25', image: '🥯' }
    ],
    sandwiches: [
      { name: 'Turkey Club', description: 'Turkey, bacon, lettuce, tomato on sourdough', price: '£8.95', image: '🥪' },
      { name: 'Grilled Cheese', description: 'Three-cheese blend on artisan bread', price: '£7.50', image: '🥪' },
      { name: 'Veggie Wrap', description: 'Fresh vegetables in a spinach tortilla', price: '£7.95', image: '🥪' },
      { name: 'Chicken Panini', description: 'Grilled chicken with pesto and mozzarella', price: '£9.25', image: '🥪' },
      { name: 'BLT', description: 'Bacon, lettuce, tomato on toasted bread', price: '£8.50', image: '🥪' },
      { name: 'Avocado Toast', description: 'Smashed avocado on sourdough with toppings', price: '£8.00', image: '🥑' }
    ],
    desserts: [
      { name: 'Chocolate Cake', description: 'Rich chocolate cake with ganache', price: '£4.95', image: '🍰' },
      { name: 'Cheesecake', description: 'New York style cheesecake', price: '£4.75', image: '🍰' },
      { name: 'Tiramisu', description: 'Classic Italian dessert', price: '£5.25', image: '🍰' },
      { name: 'Chocolate Chip Cookie', description: 'Warm, gooey chocolate chip cookie', price: '£2.50', image: '🍪' },
      { name: 'Brownie', description: 'Fudgy chocolate brownie', price: '£3.25', image: '🍫' },
      { name: 'Ice Cream', description: 'Artisan ice cream flavors', price: '£3.75', image: '🍦' }
    ],
    beverages: [
      { name: 'Hot Tea', description: 'Selection of premium teas', price: '£2.95', image: '🍵' },
      { name: 'Iced Tea', description: 'Refreshing iced tea', price: '£2.75', image: '🧊' },
      { name: 'Hot Chocolate', description: 'Rich, creamy hot chocolate', price: '£3.50', image: '☕' },
      { name: 'Fresh Juice', description: 'Freshly squeezed fruit juice', price: '£4.25', image: '🧃' },
      { name: 'Smoothie', description: 'Blended fruit smoothie', price: '£5.50', image: '🥤' },
      { name: 'Sparkling Water', description: 'Refreshing sparkling water', price: '£2.25', image: '💧' }
    ]
  };

  return (
    <div className="menu">
      {/* Hero Section */}
      <section className="menu-hero">
        <div className="container">
          <div className={`menu-hero-content ${isVisible ? 'fade-in-up' : ''}`}>
            <h1>Our Menu</h1>
            <p className="hero-subtitle">Carefully crafted drinks and delicious treats</p>
          </div>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="menu-nav section">
        <div className="container">
          <div className="category-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="menu-items section">
        <div className="container">
          <div className="menu-grid">
            {menuItems[activeCategory]?.map((item, index) => (
              <div 
                key={index} 
                className="menu-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="item-image">
                  <span className="item-emoji">{item.image}</span>
                </div>
                <div className="item-content">
                  <div className="item-header">
                    <h3 className="item-name">{item.name}</h3>
                    <span className="item-price">{item.price}</span>
                  </div>
                  <p className="item-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="special-offers section">
        <div className="container">
          <div className="section-header">
            <h2>Daily Specials</h2>
            <p>Don't miss our limited-time offers</p>
          </div>
          <div className="offers-grid">
            <div className="offer-card">
              <div className="offer-badge">Today's Special</div>
              <h3>Morning Combo</h3>
              <p>Any coffee + pastry for just £6.50</p>
              <span className="offer-price">Save £2.00</span>
            </div>
            <div className="offer-card">
              <div className="offer-badge">Weekend Special</div>
              <h3>Family Pack</h3>
              <p>4 drinks + 4 pastries for £25</p>
              <span className="offer-price">Save £5.00</span>
            </div>
            <div className="offer-card">
              <div className="offer-badge">Happy Hour</div>
              <h3>Afternoon Delight</h3>
              <p>50% off all desserts 3-5 PM</p>
              <span className="offer-price">Daily</span>
            </div>
          </div>
        </div>
      </section>

      {/* Order Online CTA */}
      <section className="order-cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Order?</h2>
            <p>Skip the line and order online for pickup or delivery</p>
            <div className="cta-buttons">
              <button className="btn btn-primary" onClick={() => alert('Order online feature coming soon!')}>
                Order Online
              </button>
              <a href="/contact" className="btn btn-secondary">
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
