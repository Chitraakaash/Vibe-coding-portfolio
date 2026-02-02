# Quick Reference Card

Your portfolio in one page. Everything you need to go from files to live site.

---

## File Structure at a Glance

```
portfolio-root/
├── index.html              # Homepage
├── work.html               # Gallery (15 images)
├── about.html              # Bio + skills
├── resume.html             # Work history
├── contact.html            # Contact form
│
├── assets/
│   ├── css/
│   │   └── style.css       # Optimized styles
│   ├── js/
│   │   └── main.js         # Lightbox, interactions
│   └── images/             # 15 WebP images go here
│
├── docs/
│   └── AkashSingh_Resume.pdf
│
├── README.md               # Repo documentation
├── DEPLOYMENT_GUIDE.md     # Step-by-step setup
├── CRITICAL_FIXES.md       # Issues resolved
├── .gitignore              # Git exclusions
└── convert-images.sh       # Image optimizer
```

---

## Deploy in 5 Steps

### 1. Add Images
Convert to WebP, save to `assets/images/`:
- Background_1.webp, Background_2.webp
- Portrait_1.webp → Portrait_5.webp
- Character_Illustration_1.webp → Character_Illustration_6.webp
- Character_Design_1.webp, Character_Design_2.webp

### 2. Add Resume
Place PDF at `docs/AkashSingh_Resume.pdf`

### 3. Configure Form
1. Sign up: [formspree.io](https://formspree.io)
2. Get form ID
3. Update `contact.html` line 57

### 4. Push to GitHub
```bash
git init
git add .
git commit -m "Launch portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

### 5. Enable Pages
Settings → Pages → Source: main → Save

Live at: `https://USERNAME.github.io/REPO/`

---

## Image Conversion Commands

**Using Squoosh (online):**
→ [squoosh.app](https://squoosh.app)
→ Upload → WebP → Quality 80-85 → Download

**Using Script (terminal):**
```bash
chmod +x convert-images.sh
./convert-images.sh
```

**Using ImageMagick:**
```bash
convert image.png -quality 85 image.webp
```

---

## Critical Configuration Points

| Item | Location | Action |
|------|----------|--------|
| Contact form | `contact.html` line 57 | Replace `YOUR_FORM_ID` |
| Resume download | `docs/AkashSingh_Resume.pdf` | Add your PDF |
| Portfolio images | `assets/images/*.webp` | Add 15 images |
| Repository URL | Terminal command | Update USERNAME/REPO |

---

## Contact Info (Already Updated)

✓ Email: akash.singh6926@gmail.com (protected)  
✓ Discord: ickles#2209  
✓ Instagram: instagram.com/ickles_  
✓ Portfolio: ickles.carrd.co  
✓ Location: India

---

## Performance Targets

Your portfolio should achieve:
- PageSpeed Score: **90+**
- First Paint: **< 1.5s**
- Time to Interactive: **< 3s**

Already optimized for these benchmarks with:
- WebP images (30-50% smaller)
- Lazy loading
- Minimal JavaScript (< 2KB)
- Clean CSS (no bloat)

---

## Common Issues + Fixes

**Images not showing?**
→ Check file names match exactly (case-sensitive)
→ Verify files are in `assets/images/`

**Form not working?**
→ Confirm Formspree ID is correct
→ Check form action URL format

**Site not deploying?**
→ Repository must be public
→ Wait 2-3 minutes after enabling Pages

**CSS not applying?**
→ Verify `style.css` is in `assets/css/`
→ Check HTML link path

---

## Next Actions After Launch

- [ ] Test on mobile devices
- [ ] Share on LinkedIn, Instagram
- [ ] Add to resume
- [ ] Monitor Formspree for messages
- [ ] Check PageSpeed Insights score
- [ ] Update regularly with new work

---

## Support Documents

Need more detail?
- **START_HERE.md** - Complete overview and philosophy
- **DEPLOYMENT_GUIDE.md** - Step-by-step GitHub Pages setup
- **CRITICAL_FIXES.md** - Every issue resolved
- **README.md** - Features and browser support

---

Your portfolio is production-ready. Add images, configure form, deploy. That's it.

Time to go live.
