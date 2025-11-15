# Static Website Hosting Deployment Guide

This portfolio website has been configured for static hosting on **AWS S3** and **GitHub Pages**.

## Build the Project

1. Install dependencies:
```bash
npm install
```

2. Build the project:
```bash
npm run build
```

This will create a `build` folder with all static files.

---

## Deploy to AWS S3

### Option 1: Using AWS Console

1. Create an S3 bucket (or use existing one)
2. Enable static website hosting in bucket properties
3. Set index document to: `index.html`
4. Set error document to: `index.html` (for client-side routing)
5. Upload all files from the `build` folder to the bucket root
6. Make bucket public (or configure bucket policy for public read access)
7. Access your site via the S3 website endpoint

### Option 2: Using AWS CLI

```bash
# Build the project
npm run build

# Sync build folder to S3 bucket
aws s3 sync build/ s3://your-bucket-name --delete

# Enable static website hosting
aws s3 website s3://your-bucket-name --index-document index.html --error-document index.html
```

### Option 3: Using CloudFront (Recommended for Production)

1. Deploy to S3 as above
2. Create a CloudFront distribution
3. Point origin to your S3 bucket
4. Set default root object to: `index.html`
5. Add error pages:
   - 403 → 200 → `/index.html`
   - 404 → 200 → `/index.html`

---

## Deploy to GitHub Pages

### Method 1: Using gh-pages package (Recommended)

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will:
- Create a `gh-pages` branch (if it doesn't exist)
- Push the `build` folder contents to the `gh-pages` branch
- Your site will be available at `https://[username].github.io/[repository-name]`

3. In GitHub repository settings:
   - Go to **Settings → Pages**
   - Select source: **`gh-pages` branch**
   - Select folder: **`/ (root)`**
   - Click **Save**

### Method 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Create or checkout the `gh-pages` branch:
```bash
git checkout --orphan gh-pages
git rm -rf .
```

3. Copy build files:
```bash
cp -r build/* .
```

4. Commit and push:
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

5. In GitHub repository settings:
   - Go to **Settings → Pages**
   - Select source: **`gh-pages` branch**
   - Save

---

## Important Notes

- The project uses **BrowserRouter** with a 404.html fallback for GitHub Pages compatibility
- All data is now static (no API calls to json-server)
- The MediumFeed component has been removed to avoid external API dependencies
- EmailJS is still configured for the contact form (works client-side)
- The `404.html` file handles client-side routing for GitHub Pages
- For S3, set error document to `index.html` to handle routing

## Custom Domain Setup

### For S3/CloudFront:
1. Create a CloudFront distribution (recommended)
2. Configure your domain's DNS to point to CloudFront
3. Add SSL certificate via AWS Certificate Manager

### For GitHub Pages:
1. Add a `CNAME` file in the `public` folder with your domain name
2. Configure DNS settings in your domain registrar
3. Enable custom domain in GitHub Pages settings

