# Launch Checklist

Three steps separate you from live.

---

## 1. Add Images

Convert 15 files to WebP. Place in `assets/images/`:

```
Background_1.webp
Background_2.webp
Portrait_1.webp → Portrait_5.webp
Character_Design_1.webp → Character_Design_2.webp
Character_Illustration_1.webp → Character_Illustration_6.webp
```

**Convert using**:
- [Squoosh.app](https://squoosh.app) (online, instant)
- `./convert-images.sh` (if ImageMagick installed)

Quality: 80-85. Balance size and clarity.

---

## 2. Configure Discord

`contact.html`, line 57:

```html
<a href="https://discord.com/users/YOUR_DISCORD_ID" ...>
```

**Find your ID**:
1. Discord → Settings → Advanced → Developer Mode (enable)
2. Right-click your name → Copy ID
3. Paste in place of `YOUR_DISCORD_ID`

Skip this if you don't use Discord. Card will still display; link just won't work.

---

## 3. Deploy

```bash
cd /path/to/portfolio
git init
git add .
git commit -m "Launch"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

Then:
- GitHub → Repository Settings → Pages
- Source: `main` branch
- Save

Live in 2 minutes at:  
`https://USERNAME.github.io/REPO/`

---

## Verify After Launch

- [ ] All images load
- [ ] Category filtering works
- [ ] Lightbox opens/closes
- [ ] Contact links functional
- [ ] Mobile responsive

Test on phone. Test in different browsers.

---

## Share

Update everywhere you exist:
- LinkedIn profile
- Instagram bio  
- Resume header
- Email signature

This is your showcase now.

---

That's it. Three steps. Then live.
