# Café Website

A modern, responsive café website built with React, featuring a warm color palette and elegant design. This website showcases Café's story, menu, gallery, and contact information with smooth animations and mobile-friendly design.

## Features

### 🏠 **Home Page**
- Welcoming hero section with coffee background image
- Café name "Café" with slogan "Where Every Sip Feels Like Home"
- Features section highlighting what makes the café special
- Customer testimonials section
- Call-to-action buttons for menu and contact

### 📖 **About Page**
- Café story and founding history
- Core values (Sustainability, Community, Quality, Authenticity)
- Team member profiles
- Atmosphere description with features
- Interactive layout with smooth animations

### ☕ **Menu Page**
- Interactive category tabs (Coffee, Pastries, Sandwiches, Desserts, Beverages)
- Detailed menu items with descriptions and prices
- Daily specials section
- Order online functionality (mock implementation)
- Responsive grid layout

### 📸 **Gallery Page**
- Filterable photo gallery by category
- Modal view for detailed image viewing
- Instagram integration section
- Hover effects and smooth transitions
- Grid layout with responsive design

### 📞 **Contact Page**
- Contact information cards
- Google Maps integration (placeholder)
- Interactive contact form with validation
- FAQ section
- Business hours and location details

### 🎨 **Design Features**
- **Color Palette**: Warm coffee browns, cream, beige, and gold accents
- **Typography**: Playfair Display for headings, Inter for body text
- **Animations**: Fade-in effects, hover animations, smooth scrolling
- **Responsive**: Mobile-first design that works on all devices
- **Navigation**: Sticky header with smooth scrolling and active link highlighting

### 🚀 **Technical Features**
- React Router for navigation
- CSS Grid and Flexbox for layouts
- CSS animations and transitions
- Form validation and submission handling
- Mobile-responsive design
- Clean, organized code with comments

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project files**
   ```bash
   # If you have the files in a folder, navigate to it
   cd cafe-aroma-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation component
│   ├── Header.css
│   ├── Footer.js          # Footer component
│   └── Footer.css
├── pages/
│   ├── Home.js            # Home page
│   ├── Home.css
│   ├── About.js           # About page
│   ├── About.css
│   ├── Menu.js            # Menu page
│   ├── Menu.css
│   ├── Gallery.js         # Gallery page
│   ├── Gallery.css
│   ├── Contact.js         # Contact page
│   └── Contact.css
├── App.js                 # Main app component
├── App.css               # App-specific styles
├── index.js              # React entry point
└── index.css             # Global styles
```

## Customization

### Colors
The website uses CSS custom properties for easy color customization. Edit the color variables in `src/index.css`:

```css
:root {
  --primary-brown: #8B4513;
  --secondary-brown: #A0522D;
  --light-brown: #D2B48C;
  --cream: #FDF6E3;
  --beige: #F5E6D3;
  --dark-brown: #3C2415;
  --accent-gold: #DAA520;
  --text-light: #6B4423;
}
```

### Content
- **Menu Items**: Edit the `menuItems` object in `src/pages/Menu.js`
- **Team Members**: Update the team information in `src/pages/About.js`
- **Contact Information**: Modify contact details in `src/components/Footer.js` and `src/pages/Contact.js`
- **Gallery Images**: Update the `galleryImages` array in `src/pages/Gallery.js`

### Images
Replace placeholder emojis with actual images by:
1. Adding image files to the `public` folder
2. Updating the image sources in the respective components
3. Adjusting CSS to use `background-image` or `<img>` tags

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Optimized CSS with efficient selectors
- Smooth animations using CSS transforms
- Responsive images and layouts
- Clean, semantic HTML structure
- Minimal JavaScript for better performance

## Future Enhancements

- Real image integration
- Backend integration for contact form
- Online ordering system
- Blog/news section
- Customer review system
- Multi-language support

## License

This project is created for educational and portfolio purposes. Feel free to use and modify as needed.

## Support

For questions or support, please contact the development team or refer to the React documentation for technical issues.

---

**Café** - Where Every Sip Feels Like Home ☕
