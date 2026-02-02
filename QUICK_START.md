# 3-Minute Deployment Guide

Everything you need. Nothing you don't.

---

## Add Two Files

**1. Profile image** → `assets/images/profile.jpg`
- Square, 400×400px minimum
- Professional photo of you
- JPG or PNG

**2. Portfolio images** → 15 WebP files in `assets/images/`
- Use [Squoosh.app](https://squoosh.app) to convert
- Quality 80-85
- Names exactly as listed in FINAL_UPDATES.md

---

## Test Locally

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`

**Check**:
- Profile shows (homepage + about)
- Work grid shows all images
- Filter buttons work
- Contact security gate accepts @gmail.com

---

## Deploy

```bash
git init
git add .
git commit -m "Launch"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

**Enable Pages**:
Settings → Pages → Source: main → Save

Live in 2 minutes.

---

## What's Different

**Typography**: Crimson Pro + Inter (warm editorial feel)  
**Work page**: Card grid with category filtering, smooth scroll  
**Contact**: Email/phone hidden behind Gmail verification  
**Position**: Updated to Prepress Executive Design Operator, Daman  
**Skills**: Removed 3D/AutoCAD, focused on digital painting/UI/UX  
**Profile image**: Shows on homepage + about for warmth  

---

## How Security Gate Works

User types @gmail.com email → Clicks verify → Email/phone revealed

**To disable**: Delete security gate div in contact.html, remove `class="protected-content"` from email/phone section.

---

## How Filtering Works

Click category → Page scrolls to grid top → Cards filter with fade

Smooth, intentional, professional.

---

That's it. Add images. Deploy. Done.

Read FINAL_UPDATES.md for complete details.
