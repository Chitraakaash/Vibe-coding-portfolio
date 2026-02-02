# Akash Singh - Portfolio Website

A minimal, typography-focused portfolio showcasing visual design, illustration, and UI/UX work.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Masonry Gallery**: Dynamic image grid with lightbox functionality
- **Performance Optimized**: Lazy loading, WebP images, minimal JavaScript
- **Clean Typography**: Inter font family for modern, readable text
- **SEO Ready**: Proper meta tags and semantic HTML

## Structure

```
portfolio-root/
├── index.html          # Homepage
├── work.html           # Portfolio gallery
├── about.html          # Bio and skills
├── resume.html         # Experience timeline
├── contact.html        # Contact form
├── assets/
│   ├── css/
│   │   └── style.css   # Main stylesheet
│   ├── js/
│   │   └── main.js     # Interactive features
│   └── images/         # Portfolio images (WebP format)
└── docs/
    └── AkashSingh_Resume.pdf
```

## Setup Instructions

### 1. Add Your Resume PDF

Place your resume PDF in the `docs/` folder:
```
docs/AkashSingh_Resume.pdf
```

### 2. Add Portfolio Images

Convert your images to WebP format (for better performance) and place them in `assets/images/`:

**Required images:**
- Background_1.webp, Background_2.webp
- Portrait_1.webp through Portrait_5.webp
- Character_Illustration_1.webp through Character_Illustration_6.webp
- Character_Design_1.webp, Character_Design_2.webp

**Converting images to WebP:**
```bash
# Using ImageMagick
convert image.png -quality 85 image.webp

# Using cwebp (Google's tool)
cwebp -q 85 image.png -o image.webp
```

### 3. Configure Contact Form

The contact form uses Formspree. To enable it:

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form ID
4. In `contact.html`, replace `YOUR_FORM_ID` with your actual ID:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### 4. Update Social Links

In `contact.html`, update social media links:
- Instagram: Currently points to `instagram.com/ickles_`
- Portfolio: Currently points to `ickles.carrd.co`

Add LinkedIn or other platforms as needed.

## Deployment

### GitHub Pages

1. Create a new repository on GitHub
2. Push your portfolio files:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Under "Source", select `main` branch
5. Click Save
6. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Custom Domain (Optional)

1. In GitHub Pages settings, add your custom domain
2. Create a `CNAME` file in your repository root with your domain:
   ```
   akashsingh.design
   ```
3. Update your domain's DNS records:
   - Type: A Record
   - Host: @
   - Value: 185.199.108.153 (GitHub Pages IP)
   - Add additional A records for: 185.199.109.153, 185.199.110.153, 185.199.111.153

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Checklist

- [x] WebP images for faster loading
- [x] Lazy loading for images
- [x] Minimal JavaScript (< 2KB)
- [x] CSS optimization (no unused styles)
- [x] Proper semantic HTML
- [x] Accessible keyboard navigation

## Credits

Design & Development: Akash Singh  
Typography: Inter (Google Fonts)  
Icons: Unicode arrows (no external dependencies)

## License

All rights reserved © 2026 Akash Singh
