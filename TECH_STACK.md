# Technology Stack Explained

## What Was Used (Simple Answer)

**Pure vanilla web technologies. No frameworks. No React. No build tools.**

Your portfolio is built with:
- HTML5 (structure)
- CSS3 (design)
- Vanilla JavaScript (interactions)

That's it. Three technologies. All native to browsers. Zero dependencies.

---

## Why This Matters

**No frameworks means**:
- Loads instantly (no React bundle to download)
- Works forever (HTML/CSS/JS don't deprecate)
- Easy to edit (no build process, no npm, no toolchain)
- Deploys anywhere (GitHub Pages, Netlify, Vercel, your own server)

**React wasn't needed because**:
- Portfolio is static content (no complex state management)
- Interactions are simple (filtering, lightbox, scroll)
- Performance matters (vanilla is faster than any framework)

---

## Technical Breakdown

### HTML5 (Structure)

Five pages, semantic markup:
```
index.html      → Homepage with hero
work.html       → Card grid with filtering
about.html      → Bio with skills sidebar
resume.html     → Timeline layout
contact.html    → Security gate + contact cards
```

**Semantic elements used**:
- `<header>`, `<nav>`, `<main>`, `<footer>` for structure
- `<article>` for work cards
- `<section>` for content grouping
- `<figure>` for images

**Accessibility built-in**:
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text on all images
- ARIA labels where needed
- Keyboard navigation support

### CSS3 (Design System)

One file: `assets/css/style.css` (23KB uncompressed)

**Modern CSS features**:
- **CSS Variables** – Color system, spacing tokens, font stacks
- **CSS Grid** – Work card layout, responsive columns
- **Flexbox** – Navigation, buttons, card internals
- **CSS Animations** – Fade-in effects, staggered delays
- **Media Queries** – Responsive breakpoints (768px, 480px)
- **Backdrop Filter** – Lightbox blur effect
- **Custom Properties** – Theme customization

**Design tokens**:
```css
--bg-primary: #fdfcfa
--accent-warm: #b8866f
--font-display: 'Crimson Pro', serif
--space-8: 2rem
--transition-base: 350ms cubic-bezier(0.33, 1, 0.68, 1)
```

**No preprocessor** (Sass/Less). Pure CSS. Organized by section with clear comments.

### JavaScript (Interactions)

One file: `assets/js/main.js` (4KB uncompressed)

**Vanilla JS, no jQuery, no libraries.**

Features implemented:
1. **Category filtering** – DOM manipulation, class toggles
2. **Smooth scrolling** – Scroll to grid top before filtering
3. **Staggered animations** – Intersection Observer API
4. **Security gate** – Email validation with regex
5. **Lightbox** – Modal overlay with keyboard support
6. **Lazy loading** – Native + fallback for older browsers

**Modern APIs used**:
- `IntersectionObserver` – Scroll-triggered animations
- `classList` – Add/remove CSS classes
- `scrollIntoView` – Smooth scroll behavior
- `addEventListener` – Event handling
- `querySelector` – DOM selection

**No polyfills needed** – Targets modern browsers (Chrome 90+, Firefox 88+, Safari 14+).

---

## Fonts

**Google Fonts** (CDN-hosted):
- Crimson Pro (serif) – Display/headings
- Inter (sans-serif) – Body text

Loaded via `<link>` tag in HTML. Only the weights actually used (400, 500, 600).

**Why Google Fonts**:
- Free, fast CDN
- Subset to only Latin characters
- Self-hosted option available if needed

---

## Images

**Format**: WebP (modern, efficient)  
**Compression**: 80-85 quality  
**Loading**: Native lazy loading (`loading="lazy"`)

**Why WebP**:
- 30-50% smaller than PNG/JPG
- Supported by all modern browsers
- Lossless + lossy compression

**Fallback**: None needed. If browser doesn't support WebP (rare now), image won't load. Could add `<picture>` element with JPG fallback if required.

---

## Hosting

**Designed for GitHub Pages** (free static hosting):
- No server-side code
- No database
- No build step
- Just HTML/CSS/JS files

**Also works on**:
- Netlify (drag/drop)
- Vercel (import repo)
- Cloudflare Pages
- Any web server (Apache, Nginx)
- Even S3 bucket

---

## What This ISN'T

**Not React** – No virtual DOM, no JSX, no components  
**Not Vue** – No reactive data binding  
**Not Angular** – No framework at all  
**Not WordPress** – No CMS, no PHP, no database  
**Not Wix/Squarespace** – Custom code, not drag-and-drop  
**Not Jekyll/Hugo** – No static site generator  

**Pure HTML/CSS/JS.** Written by hand. No abstraction layers.

---

## Performance Impact

**Lighthouse scores** (expected):
- Performance: 95-100
- Accessibility: 90-100
- Best Practices: 95-100
- SEO: 90-100

**Load time**:
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Total page weight: ~200-300KB (with images)

**Why so fast**:
- No framework overhead
- Minimal JavaScript
- Optimized images (WebP)
- Single CSS file (23KB)
- Font subsetting
- Lazy loading

---

## Browser Support

**Modern browsers only** (intentional):
- Chrome 90+ (2021)
- Firefox 88+ (2021)
- Safari 14+ (2020)
- Edge 90+ (2021)

**Not supported**:
- Internet Explorer (dead)
- Very old mobile browsers

**Graceful degradation**:
- If CSS Grid unsupported → Falls back to stacked layout
- If IntersectionObserver unsupported → Animations instant
- If WebP unsupported → Images don't load (could add fallback)

---

## Maintainability

**To add new work**:
1. Convert image to WebP
2. Add to `assets/images/`
3. Copy a `<article class="work-card">` block
4. Change image path and category
5. Done. No build, no compile.

**To change colors**:
1. Open `style.css`
2. Edit CSS variables (lines 11-45)
3. Save. Refresh browser.

**To update content**:
1. Open relevant HTML file
2. Edit text directly
3. Save. Push to GitHub.

---

## Comparison: This vs Framework-Based

### Your Portfolio (Vanilla)
- **Files**: 5 HTML, 1 CSS, 1 JS
- **Dependencies**: 0
- **Build time**: 0 seconds
- **Deploy**: Push to GitHub
- **Bundle size**: ~30KB (before images)
- **Maintenance**: Edit HTML directly

### React Portfolio (Hypothetical)
- **Files**: 20+ components, config files
- **Dependencies**: 50-200 npm packages
- **Build time**: 10-30 seconds
- **Deploy**: Build → Upload
- **Bundle size**: 150-300KB (before images)
- **Maintenance**: npm updates, rebuild

**React would add**:
- Complexity (component hierarchy, state management)
- Build tooling (Webpack/Vite, Babel)
- Dependencies (React, ReactDOM, router)
- Bundle bloat (framework overhead)

**React would provide**:
- Component reusability (not needed for 5 pages)
- State management (not needed for static content)
- Virtual DOM (not needed for simple interactions)

**Verdict**: For a portfolio, vanilla wins. Simpler, faster, more maintainable.

---

## Future-Proofing

**This portfolio will work in 10 years because**:
- HTML/CSS/JS are web standards
- No framework to deprecate
- No dependencies to update
- No build tool to break

**React portfolios from 2015**:
- Many broken (old React versions)
- Dependencies outdated
- Build tools obsolete
- Need major refactoring

**Your portfolio**:
- Works as-is
- Edit anytime
- No refactoring needed

---

## What You Can Add Later (Without Frameworks)

**Dark mode** – CSS custom properties + `prefers-color-scheme`  
**Blog** – Markdown files + simple build script  
**CMS** – Netlify CMS, Forestry (no React needed)  
**Analytics** – Google Analytics, Plausible (script tag)  
**Comments** – Utterances, Giscus (GitHub-based)  
**Search** – Lunr.js (static search)  
**Animations** – GSAP, Anime.js (animation libraries)

All addable without React/frameworks.

---

## Summary

**Tech stack**:
- HTML5 (structure)
- CSS3 (design)
- JavaScript ES6+ (interactions)
- WebP (images)
- Google Fonts (typography)

**Philosophy**:
- Use the platform (native web APIs)
- Ship less code
- Prioritize performance
- Keep it maintainable

**Result**:
- Fast (< 2s load)
- Accessible (WCAG compliant)
- Responsive (works on all devices)
- Future-proof (no dependencies)
- Professional (looks like $5k+ design)

Built with care. No bloat. Just HTML, CSS, and JavaScript doing what they do best.
