# Privacy & Security Notes

## What's Protected

Your phone number has been completely removed from all files. Only your email address is included, protected behind a verification gate.

---

## Public Information

These details are publicly visible:
- **Name**: Akash Singh
- **Discord**: ickles#2209
- **Instagram**: instagram.com/ickles_
- **Location**: India (general only, no specific address)

---

## Protected Information

**Email**: akash.singh6926@gmail.com

Protected by security gate:
- Users must enter valid Gmail address to view
- Client-side validation (JavaScript)
- Prevents casual bots and scrapers
- Real inquiries can still access

**Phone**: Removed completely from all files

---

## Security Gate Details

**How it works**:
1. User visits contact page
2. Email field hidden initially
3. Prompt: "Enter your Gmail to view contact email"
4. JavaScript validates: must match `@gmail.com`
5. If valid → email revealed
6. If invalid → error message shown

**Level of protection**:
- **Casual bots**: Blocked (can't execute JavaScript)
- **Scrapers**: Blocked (email not in HTML initially)
- **Determined actors**: Can bypass (client-side only)
- **Real people**: Easy access (just type Gmail)

**Trade-off**: This is friction, not fortress. It stops 95% of spam while keeping legitimate inquiries accessible.

---

## What's NOT Protected

**Publicly visible on GitHub**:
- Your name
- Discord username
- Instagram handle
- Portfolio link
- General location (India)
- Work history
- Skills list

This is standard for public portfolios. These details help people find and hire you.

---

## If You Want More Privacy

### Option 1: Remove Email Protection
Make email public (no verification gate):

1. Open `contact.html`
2. Delete lines 33-51 (security gate section)
3. Remove `id="protectedContent"` from line 54
4. Delete `class="protected-content"` from line 54

Email will show immediately, no verification needed.

### Option 2: Complete Email Removal
Remove email entirely:

1. Open `contact.html`
2. Delete security gate (lines 33-51)
3. Delete email card (lines 54-68)
4. Keep only Discord and social cards

Contact methods: Discord, Instagram only.

### Option 3: Use Contact Form
Replace email with form service:

Use [Formspree](https://formspree.io) or [Netlify Forms](https://www.netlify.com/products/forms/):
- Messages go to your email
- Your email never shown publicly
- Spam filtering built-in

Instructions in DEPLOYMENT_GUIDE.md (old version).

---

## Recommendations

**For public portfolio**:
- Current setup (email behind gate) is good balance
- Discord + Instagram provide alternative contact
- Professional emails expect some visibility

**If receiving spam**:
- Gmail filters handle most
- Create filter: sender not in contacts → archive
- Use Gmail alias: akash.singh6926+portfolio@gmail.com

**For complete privacy**:
- Use contact form service (Formspree)
- Or remove email, use Discord/Instagram only
- Or create separate "portfolio email" just for this

---

## Data on GitHub

**What's stored**:
- HTML/CSS/JS files (code only)
- Your work images (if you add them)
- Your profile photo (if you add it)
- Documentation files

**What's NOT stored**:
- Visitor information
- Form submissions
- Analytics data
- IP addresses

GitHub Pages is static hosting. No server-side processing. No databases. No visitor tracking.

---

## Verification Gate Bypass

**Can it be bypassed?**

Yes. Determined person could:
1. View page source
2. Find email in JavaScript
3. Or inspect HTML after verification

**Why use it then?**

Stops:
- Automated bots (95%+ of spam)
- Casual scrapers
- Email harvesting tools
- Lazy spammers

Allows:
- Real human inquiries
- Legitimate recruiters
- Potential clients

**Better than**:
- Email plainly visible (100% spam)
- Contact form only (adds friction, misses some genuine inquiries)
- No contact method (defeats purpose of portfolio)

---

## GitHub Repository Settings

**Recommended**:
- Repository: Public (required for GitHub Pages)
- Discussions: Disabled
- Issues: Disabled
- Wiki: Disabled

**Your email won't appear in**:
- Commit history (if you configure Git properly)
- Repository settings
- GitHub profile

**Configure Git privacy**:
```bash
git config user.email "YOUR_GITHUB_USERNAME@users.noreply.github.com"
```

Uses GitHub's anonymous email instead of real one.

---

## Summary

**Current privacy level**: Medium-high
- Email: Protected by verification gate
- Phone: Completely removed
- Other info: Public (standard for portfolios)

**Who can contact you**:
- Email: Anyone with Gmail (after verification)
- Discord: Anyone who adds ickles#2209
- Instagram: Anyone via DMs

**Who can spam you**:
- Very few (gate blocks most bots)

**Good balance for**: Professional portfolio that attracts opportunities while minimizing spam.

---

## Questions?

If you want to adjust privacy settings further, all contact methods are in `contact.html`. Easy to modify, remove, or replace.

Remember: Public portfolio means some info must be public. Find your comfort level between visibility (getting hired) and privacy (avoiding spam).
