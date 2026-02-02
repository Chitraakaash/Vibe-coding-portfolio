# GitHub Pages Deployment Guide

Getting your portfolio live is surprisingly straightforward. This guide walks you through the entire process—from preparing your files to seeing your work on the web.

## Before You Begin

Make sure you have:
- A GitHub account ([sign up here](https://github.com/join))
- Git installed on your computer
- All your portfolio files ready (HTML, CSS, JS, images, resume PDF)

## Step 1: Organize Your Files

Your directory should look like this:

```
portfolio-root/
├── index.html
├── work.html
├── about.html
├── resume.html
├── contact.html
├── README.md
├── .gitignore
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       └── [all your .webp images]
└── docs/
    └── AkashSingh_Resume.pdf
```

## Step 2: Prepare Your Images

GitHub Pages works best with optimized images. Convert your portfolio images to WebP format:

**Using online tools:**
- Visit [Squoosh.app](https://squoosh.app)
- Upload your PNG/JPG files
- Select WebP format
- Set quality to 80-85
- Download and rename according to the structure

**Using command line (if you have ImageMagick):**
```bash
convert image.png -quality 85 image.webp
```

**Required images:**
- Background_1.webp, Background_2.webp
- Portrait_1.webp through Portrait_5.webp  
- Character_Illustration_1.webp through Character_Illustration_6.webp
- Character_Design_1.webp, Character_Design_2.webp

## Step 3: Create a GitHub Repository

1. Log in to GitHub
2. Click the **+** icon in the top right → **New repository**
3. Name it (example: `portfolio` or `akash-singh-portfolio`)
4. Keep it **Public**
5. **Do NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**

## Step 4: Upload Your Files to GitHub

Open your terminal/command prompt and navigate to your portfolio folder:

```bash
cd /path/to/your/portfolio-root
```

Initialize Git and push to GitHub:

```bash
# Initialize Git in your folder
git init

# Add all files
git add .

# Create your first commit
git commit -m "Initial portfolio launch"

# Set the main branch name
git branch -M main

# Connect to your GitHub repository (replace with your username and repo name)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push everything to GitHub
git push -u origin main
```

**Example:**
If your GitHub username is `akashsingh92` and your repo is named `portfolio`, the remote command would be:
```bash
git remote add origin https://github.com/akashsingh92/portfolio.git
```

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down and click **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

GitHub will now build your site. This takes 1-3 minutes.

## Step 6: Access Your Live Site

Once deployed, your portfolio will be live at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

For example:
```
https://akashsingh92.github.io/portfolio/
```

You'll see a green checkmark and a link once it's ready.

## Step 7: Set Up Contact Form (Optional)

The contact form needs a backend service to work. Here's how to set it up with Formspree (free tier available):

1. Go to [Formspree.io](https://formspree.io)
2. Sign up for a free account
3. Click **+ New Form**
4. Name it (e.g., "Portfolio Contact Form")
5. Copy your form endpoint (looks like `https://formspree.io/f/xyzabc123`)
6. In `contact.html`, find this line:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
7. Replace `YOUR_FORM_ID` with your actual ID (just the part after `/f/`)

**Commit and push the change:**
```bash
git add contact.html
git commit -m "Add Formspree contact form integration"
git push
```

The form will now send messages to your email.

## Step 8: Add a Custom Domain (Optional)

If you own a domain like `akashsingh.design`, you can connect it:

### In GitHub:
1. Go to **Settings → Pages**
2. Under **Custom domain**, enter your domain
3. Click **Save**
4. GitHub will create a `CNAME` file automatically

### With Your Domain Provider:
Add these DNS records:

**A Records:**
| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**CNAME Record (for www):**
| Type | Name | Value |
|------|------|-------|
| CNAME | www | YOUR_USERNAME.github.io |

DNS changes can take 24-48 hours to propagate.

## Updating Your Portfolio

Whenever you make changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

GitHub Pages will automatically rebuild your site within 1-2 minutes.

## Troubleshooting

**Site not loading?**
- Check that `index.html` is in the root directory
- Verify the repository is public
- Wait a few minutes after enabling Pages

**Images not showing?**
- Confirm file names match exactly (case-sensitive)
- Check that images are in `assets/images/`
- Verify file extensions are correct (.webp, not .png)

**Contact form not working?**
- Make sure you replaced `YOUR_FORM_ID` with the actual Formspree ID
- Check that the form action URL is correct
- Verify your Formspree account is active

**CSS not applying?**
- Check that `style.css` is in `assets/css/`
- Verify the link in your HTML: `<link rel="stylesheet" href="assets/css/style.css">`

## Performance Tips

Once live, test your site:
- [PageSpeed Insights](https://pagespeed.web.dev/) - Check loading speed
- [GTmetrix](https://gtmetrix.com/) - Analyze performance
- Test on mobile devices

Your portfolio is optimized for speed with WebP images and lazy loading, so it should score well.

## Next Steps

Now that your portfolio is live:
1. Share the link on LinkedIn, Instagram, and your resume
2. Set up Google Analytics (optional) to track visitors
3. Regularly update with new work
4. Backup your files locally

Your portfolio is now a living, breathing showcase of your work. Keep it updated, and let it do the talking.
