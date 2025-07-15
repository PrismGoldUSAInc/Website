# Prism Gold USA Inc. - Website

![Prism Gold USA](https://img.shields.io/badge/Gold-Investment-FFD700?style=for-the-badge&logo=bitcoin&logoColor=white)
![Accessibility](https://img.shields.io/badge/WCAG-2.1%20AA-green?style=for-the-badge)
![Responsive](https://img.shields.io/badge/Mobile-Responsive-blue?style=for-the-badge)

## 🏆 About

**Prism Gold USA Inc.** is a premium gold investment website showcasing high-quality gold products in multiple purity levels. The site features modern design, full accessibility compliance, and detailed information about 24K (99.99%), 23K (95.83%), and 22K (91.7%) gold products.

### ✨ Key Features

- **🥇 Multi-Carat Gold Products**: 24K, 23K, and 22K gold options
- **♿ Fully Accessible**: WCAG 2.1 AA compliant
- **📱 Mobile-First Design**: Responsive across all devices
- **🎨 Modern UI/UX**: Luxury gold-themed design
- **⚡ Performance Optimized**: Fast loading and smooth animations
- **🔒 SEO Ready**: Search engine optimized structure

## 🚀 Quick Start

### Prerequisites

- Modern web browser
- Text editor (VS Code recommended)
- Basic knowledge of HTML/CSS/JavaScript (optional)

### Installation

1. **Download or Clone**
   ```bash
   git clone https://github.com/yourusername/prism-gold-website.git
   cd prism-gold-website
   ```

2. **Open in Browser**
   - Double-click `index.html`
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve .
     
     # Using PHP
     php -S localhost:8000
     ```

3. **View Website**
   - Open `http://localhost:8000` in your browser

## 📁 Project Structure

```
prism-gold-website/
├── README.md                 # This file
├── index.html               # Main HTML file
├── css/
│   ├── styles.css          # Main stylesheet
│   └── accessibility.css   # Accessibility enhancements
├── js/
│   ├── main.js            # Main JavaScript functionality
│   └── accessibility.js   # Accessibility features
├── images/                 # Image assets (see Image Guide below)
│   ├── logo/
│   ├── products/
│   ├── backgrounds/
│   └── icons/
└── docs/                   # Documentation (optional)
```

## 🖼️ Image Management Guide

### Recommended Image Structure

```
images/
├── logo/
│   ├── logo-main.png          # Main logo (recommended: 300x100px)
│   ├── logo-white.png         # White version for dark backgrounds
│   ├── logo-favicon.ico       # Favicon (32x32px)
│   └── logo-og.png           # Social media (1200x630px)
├── products/
│   ├── gold-coins/
│   │   ├── american-eagle-24k.webp
│   │   ├── canadian-maple-23k.webp
│   │   └── krugerrand-22k.webp
│   ├── gold-bars/
│   │   ├── 1oz-bar-24k.webp
│   │   ├── 10oz-bar-23k.webp
│   │   └── kilo-bar-24k.webp
│   ├── gold-jewelry/
│   │   ├── necklace-22k.webp
│   │   ├── bracelet-23k.webp
│   │   └── ring-24k.webp
│   └── gold-biscuits/
│       ├── 1g-biscuit-24k.webp
│       ├── 5g-biscuit-24k.webp
│       └── 10g-biscuit-24k.webp
├── backgrounds/
│   ├── hero-background.webp    # Hero section background
│   ├── section-bg-1.webp     # Section backgrounds
│   └── texture-gold.webp     # Gold texture overlay
├── icons/
│   ├── phone-icon.svg
│   ├── email-icon.svg
│   ├── location-icon.svg
│   └── certificate-icon.svg
└── gallery/
    ├── showroom-1.webp
    ├── showroom-2.webp
    └── team-photo.webp
```

### Image Specifications

#### **Product Images**
- **Format**: WebP (preferred), JPEG, PNG
- **Size**: 800x800px (square for products)
- **Quality**: 85-90% for JPEG, high quality for WebP
- **Alt Text**: Include carat level, product type, and key features

#### **Background Images**
- **Format**: WebP (preferred), JPEG
- **Size**: 1920x1080px (Full HD) minimum
- **Quality**: 80-85% (balance file size and quality)
- **Usage**: Hero sections, section backgrounds

#### **Logo Images**
- **Main Logo**: 300x100px PNG with transparent background
- **Favicon**: 32x32px ICO format
- **Social Media**: 1200x630px PNG for Open Graph

#### **Icons**
- **Format**: SVG (preferred), PNG
- **Size**: 64x64px for PNG, scalable for SVG
- **Style**: Consistent with gold theme

### Image Optimization Tips

1. **Use WebP Format**
   ```html
   <picture>
       <source srcset="images/products/gold-coin.webp" type="image/webp">
       <img src="images/products/gold-coin.jpg" alt="24K American Eagle Gold Coin">
   </picture>
   ```

2. **Compress Images**
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target file sizes: <100KB for product images, <200KB for backgrounds

3. **Responsive Images**
   ```html
   <img src="images/products/gold-coin-800.webp" 
        srcset="images/products/gold-coin-400.webp 400w,
                images/products/gold-coin-800.webp 800w,
                images/products/gold-coin-1200.webp 1200w"
        sizes="(max-width: 768px) 400px, (max-width: 1200px) 800px, 1200px"
        alt="24K Gold American Eagle Coin - 99.99% Pure Gold">
   ```

### Adding Images to Your Website

1. **Place Images in Correct Folders**
   ```
   Save product photos → images/products/
   Save logo files → images/logo/
   Save background images → images/backgrounds/
   ```

2. **Update HTML References**
   ```html
   <!-- In index.html, update image sources -->
   <img src="images/products/gold-coins/american-eagle-24k.webp" 
        alt="American Eagle 24K Gold Coin - 99.99% Pure">
   ```

3. **Add CSS Background Images**
   ```css
   /* In styles.css */
   .hero {
       background-image: url('../images/backgrounds/hero-background.webp');
   }
   
   .product-section {
       background-image: url('../images/backgrounds/gold-texture.webp');
   }
   ```

## 🎨 Customization Guide

### Colors

The website uses CSS custom properties for easy color customization:

```css
:root {
    --gold-primary: #ffd700;     /* Main gold color */
    --gold-secondary: #ffed4e;   /* Light gold */
    --gold-dark: #b8860b;        /* Dark gold */
    --dark-bg: #0a0a0a;          /* Dark background */
    --text-white: #ffffff;       /* White text */
    --text-gray: #cccccc;        /* Gray text */
}
```

### Typography

```css
:root {
    --font-family: 'Inter', sans-serif;  /* Main font */
    --font-size-base: 1rem;              /* Base font size */
    --line-height-base: 1.6;             /* Line height */
}
```

### Adding New Products

1. **Add Product Images** to `images/products/category/`
2. **Update HTML** in the products section:
   ```html
   <article class="product-card">
       <img src="images/products/new-product.webp" alt="New 24K Gold Product">
       <h3>New Gold Product</h3>
       <div class="product-purity">
           <span class="purity-badge">24K</span>
       </div>
       <p>Product description with carat information.</p>
       <button class="product-btn">Learn More</button>
   </article>
   ```

### Updating Contact Information

Edit the contact section in `index.html`:

```html
<div class="contact-item">
    <h3>Phone</h3>
    <p><a href="tel:+1234567890">Your Phone Number</a></p>
</div>

<div class="contact-item">
    <h3>Email</h3>
    <p><a href="mailto:your@email.com">your@email.com</a></p>
</div>

<div class="contact-item">
    <h3>Address</h3>
    <p>Your Address<br>City, State ZIP</p>
</div>
```

## 🌐 Deployment

### Option 1: Netlify (Recommended)

1. Go to [netlify.com](https://netlify.com)
2. Sign up for free account
3. Drag your project folder to the deploy area
4. Your site is live with HTTPS!

**Custom Domain on Netlify:**
1. Go to Site Settings > Domain Management
2. Add custom domain
3. Follow DNS configuration instructions

### Option 2: GitHub Pages

1. Create GitHub repository
2. Upload all files
3. Go to Settings > Pages
4. Select source branch
5. Access at `username.github.io/repository-name`

### Option 3: Traditional Hosting

1. Purchase hosting from provider (Bluehost, SiteGround, etc.)
2. Upload files via FTP/cPanel File Manager
3. Configure domain settings

## ♿ Accessibility Features

This website includes comprehensive accessibility features:

- **Screen Reader Support**: Proper semantic HTML and ARIA labels
- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Color Contrast**: Meets WCAG 2.1 AA standards (4.5:1 ratio)
- **Focus Indicators**: Visible focus states for keyboard users
- **Responsive Design**: Works on all screen sizes
- **Motion Preferences**: Respects `prefers-reduced-motion`
- **Form Accessibility**: Proper labels, validation, and error handling

### Testing Accessibility

1. **Automated Testing**:
   - Use WAVE browser extension
   - Run Lighthouse accessibility audit
   - Validate HTML with W3C validator

2. **Manual Testing**:
   - Navigate using only keyboard (Tab, Enter, Space, Arrow keys)
   - Test with screen reader (NVDA, JAWS, VoiceOver)
   - Check at 200% zoom level
   - Verify in high contrast mode

## 🔧 Technical Specifications

- **HTML5**: Semantic markup with proper document structure
- **CSS3**: Modern features with fallbacks for older browsers
- **JavaScript**: ES6+ with graceful degradation
- **Responsive**: Mobile-first design approach
- **Performance**: Optimized for fast loading
- **SEO**: Structured data and meta tags included

### Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Graceful Degradation**: Basic functionality works in older browsers

## 📊 Performance Optimization

### Current Optimizations

- **CSS/JS Minification**: Reduce file sizes
- **Image Optimization**: WebP format with fallbacks
- **Lazy Loading**: Images load as needed
- **Efficient CSS**: Modern layout techniques
- **Minimal Dependencies**: No heavy frameworks

### Monitoring

Use these tools to monitor performance:
- Google PageSpeed Insights
- GTmetrix
- WebPageTest
- Lighthouse audits

## 🚨 Troubleshooting

### Common Issues

1. **Images Not Loading**
   - Check file paths are correct
   - Ensure images are in the right folders
   - Verify file extensions match references

2. **Mobile Menu Not Working**
   - Check JavaScript is enabled
   - Verify mobile-menu-toggle class exists
   - Test on actual mobile device

3. **Contact Form Not Submitting**
   - Form submission is demo only
   - Configure with real form handler (Netlify Forms, Formspree)
   - Add server-side processing

4. **Animations Not Working**
   - Check if user has reduced motion preferences
   - Verify CSS animations are not disabled
   - Test in different browsers

### Support

For technical support:
- Check browser console for errors
- Validate HTML/CSS syntax
- Test in different browsers
- Review accessibility guidelines

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📧 Contact

**Prism Gold USA Inc.**
- Website: [Your Website URL]
- Email: info@prismgoldusa.com
- Phone: 1-800-774-7646

## 🔄 Version History

### v1.0.0 (Current)
- Initial release
- Full accessibility compliance
- Mobile responsive design
- Multi-carat gold product showcase
- Contact form integration
- SEO optimization

### Planned Features (Future Versions)
- Online shopping cart
- Real-time gold price integration
- Customer account system
- Investment calculator
- Multi-language support
- Payment gateway integration

---

**Built with ❤️ and pure gold standards**

![Gold Standard](https://img.shields.io/badge/Standard-Gold-FFD700?style=for-the-badge)