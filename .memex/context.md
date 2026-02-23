# Chef Bijay Ghimire Portfolio - Project Rules

## Project Overview
Professional chef portfolio website for Chef Bijay Ghimire, focusing on B2B culinary services, restaurant consulting, and student training programs in Banepa, Kavre, Nepal.

## Core Business Focus
- **Professional Services Only**: Restaurant consulting, hotel partnerships, corporate catering
- **Student Training**: Hotel Management, Professional Chef Skills, Bakery & Pastry Arts
- **NO Personal Services**: No private dining, home events, or individual bookings

## Email Configuration
**Primary Contact Email**: rajuraja88922@gmail.com

**Email Locations (4 places):**
1. `script.js` - Line ~235: `const targetEmail = "rajuraja88922@gmail.com"`
2. `index.html` - Contact section display
3. `index.html` - Contact form note
4. `index.html` - Hire form note

## Design System

### Color Palette (Professional Gold Theme)
```css
--accent-gold: #d4af37         /* Classic elegant gold */
--accent-gold-bright: #f0c75e  /* Highlights */
--accent-copper: #b87333       /* Warm complementary */
--accent-warm: #e85d04         /* Energy accent */
--bg-main: #0a0a0f             /* Pure dark background */
```

### Design Patterns
- **Glass Morphism**: backdrop-filter: blur(20px) for cards and navigation
- **Golden Glow Effects**: box-shadow with rgba(212, 175, 55, 0.3-0.5)
- **Smooth Animations**: cubic-bezier(0.4, 0, 0.2, 1) for all transitions
- **Lift on Hover**: translateY(-4px to -8px) for interactive elements

## Gallery System

### Categories (data-category attribute)
- `indian` → Chef Journey with Students (5 images)
- `international` → Desserts (6 images)
- `dessert` → Local Cuisines (5 images)

### Image Handling Rules
- **ALWAYS use object-fit: contain** (not cover) - images must fit naturally
- **No fixed aspect-ratio** - cards should adjust to image dimensions
- **Show 5-6 images per category** - keep galleries focused
- **Image paths**: Use relative paths `Images/filename.jpeg`
- **Alt text**: Descriptive and relevant to category

### Gallery CSS Requirements
```css
.gallery-item {
  height: auto;
  min-height: 250px;
  /* NO aspect-ratio property */
}

.gallery-item img {
  object-fit: contain;  /* NOT cover */
  height: auto;
}
```

## Navigation Structure (Order Matters)
1. Home
2. About
3. **Experience** (includes timeline + training programs)
4. Skills
5. Gallery
6. Services
7. Hire Me
8. Contact

## Services Structure (6 Professional Services)
1. Restaurant Consulting
2. Hotel & Resort Partnership
3. Corporate Event Catering
4. Culinary Training & Workshops
5. Menu Development
6. Food Styling & Photography

Each service MUST have:
- Icon (emoji or symbol)
- Title
- Description (2-3 sentences)
- 4 feature bullet points

## Training Programs (Critical Component)
Chef Bijay trains students in three specializations:

### 1. Professional Chef Training
- Duration: 3-6 months
- Covers: Techniques, cuisines, plating, kitchen management

### 2. Hotel Management Training
- Duration: 2-4 months
- Covers: F&B operations, HACCP, service standards

### 3. Bakery & Pastry Arts
- Duration: 2-3 months
- Covers: Bread, pastry, cakes, chocolate work

**Training Details:**
- Location: Banepa, Kavre, Nepal
- Class size: 8-10 students
- Certification provided
- Monthly batch start

## Form Handling

### Contact Form
```javascript
// Opens email client with:
To: rajuraja88922@gmail.com
Subject: Contact Inquiry - Chef Bijay Ghimire Portfolio
Body: Name, Email, Message
```

### Hire Form (Professional)
```javascript
// 7 fields: service_type, organization, name, email, phone, location, message
To: rajuraja88922@gmail.com
Subject: Professional Inquiry - [Service Type] - Chef Bijay Ghimire
```

**No Backend Required**: All forms use mailto: protocol

## Content Guidelines

### About Section Must Include:
- Chef's location: Banepa, Kavre, Nepal
- Training mention: Hotel Management, Chef, Bakery programs
- Professional Journey highlights box
- Statistics (years, dishes, cities/students)

### Experience Section Structure:
1. **Professional Timeline** (left column):
   - Chronological work history
   - 4+ positions with dates, titles, companies
   - Bullet points for responsibilities
   
2. **Training Programs** (right column):
   - 3 training cards (Chef, Hotel, Bakery)
   - Features list for each
   - Call-to-action section

### Services Section:
- 6 cards with icons, descriptions, features
- Focus on B2B professional services
- NO personal/private dining options

## Responsive Breakpoints
```css
Desktop:  > 1024px  (3 columns for gallery)
Tablet:   768-1024px (2 columns for gallery)
Mobile:   < 768px   (1 column for gallery)
```

## File Structure
```
bijayweb/
├── index.html       # Main HTML (updated structure)
├── styles.css       # 35KB+ professional design
├── script.js        # Gallery filters + form handlers
├── Images/          # All photos (keep original names)
├── Documentation:
│   ├── README.md
│   ├── UPDATES_SUMMARY.md
│   ├── FINAL_CHECKLIST.md
│   ├── QUICK_REFERENCE.md
│   └── (others)
└── styles_backup.css # Original CSS backup
```

## JavaScript Requirements

### Gallery Filtering
- Filter buttons must have data-filter attribute
- Gallery items must have data-category attribute
- Active filter gets golden highlight
- Hidden items use display: none

### Form Handling
- Validate all required fields
- Format email body with clear labels
- Use encodeURIComponent for email content
- Professional subject lines

## Common Modifications

### Adding Gallery Images
```html
<div class="gallery-item" data-category="indian|international|dessert">
  <div class="gallery-image">
    <img src="Images/filename.jpeg" alt="Description" loading="lazy">
  </div>
</div>
```

### Adding New Service
```html
<div class="service-card">
  <div class="service-icon">🎯</div>
  <h3 class="service-title">Service Name</h3>
  <p class="service-description">Description text</p>
  <ul class="service-features">
    <li>Feature 1</li>
    <li>Feature 2</li>
    <li>Feature 3</li>
    <li>Feature 4</li>
  </ul>
</div>
```

### Changing Email Address
Update in 4 locations:
1. script.js → targetEmail variable
2. index.html → Contact section href
3. index.html → Contact form note
4. index.html → Hire form note

## SEO & Meta Information
- Title: Chef Bijay Ghimire | Professional Culinary Artist
- Location: Banepa, Kavre, Nepal
- Services: Restaurant consulting, training, catering
- Keywords: chef, culinary artist, hotel management training, bakery training

## Performance Requirements
- Images: lazy loading (loading="lazy")
- CSS: Single file, organized by sections
- JavaScript: Deferred loading (defer attribute)
- Animations: Hardware-accelerated (transform, opacity)

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

**Features used:**
- CSS Grid & Flexbox
- CSS Custom Properties
- Backdrop Filter
- Object-fit
- Smooth Scroll

## Accessibility
- Semantic HTML structure
- ARIA labels on buttons
- Alt text on all images
- Keyboard navigation support
- Focus states visible

## Deployment Notes
- Static site (no backend needed)
- Can deploy to: GitHub Pages, Netlify, or any web host
- Upload: index.html, styles.css, script.js, Images/
- Test all forms after deployment

## Key Differentiators
1. **Professional B2B Focus**: Not a typical chef portfolio
2. **Student Training Programs**: Major component of business
3. **No Backend Required**: Pure frontend with mailto: forms
4. **Auto-fit Gallery**: Images maintain aspect ratios
5. **Glass Morphism Design**: Modern, professional aesthetic

## Maintenance Checklist
- [ ] Keep email (rajuraja88922@gmail.com) updated in 4 places
- [ ] Gallery shows 5-6 images per category
- [ ] All forms tested (mailto: links work)
- [ ] Gallery images use object-fit: contain
- [ ] Training programs info current (duration, fees, batches)
- [ ] Professional services only (no personal options)
- [ ] Mobile responsive on all sections
- [ ] Documentation kept up-to-date