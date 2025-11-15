
# Portfolio Website

### Personal portfolio website of Manikonda Shraddha Rao - Software Engineer and AWS Cloud Practitioner

This is a static portfolio website built using React, showcasing skills, experience, projects, and certifications. The website is optimized for deployment on **AWS S3** and **GitHub Pages**.

## Technologies Used

* React
* React Router (BrowserRouter)
* React Bootstrap
* HTML/CSS
* JavaScript/TypeScript
* EmailJS (for contact form)

## Features

* Responsive design that works on all devices
* Home page with introduction and project categories
* About page with education, skills, certifications, and experience
* Projects page showcasing open source and full-stack applications
* Contact page with email form
* Navigation bar with links to different pages
* Static data (no backend required)
* Optimized for static hosting (S3 & GitHub Pages)

## Installation

### To install the website, clone the repository:

```bash
git clone git@github.com:Limeload/Portfolio-Website.git
cd Portfolio-Website
```

### Install dependencies:

```bash
npm install
```

## Usage

### Development

To run the development server:

```bash
npm start
```

This will start the development server and open the website in your browser at `http://localhost:3000`

### Build for Production

To create a production build:

```bash
npm run build
```

This creates a `build` folder with optimized static files ready for deployment.

## Deployment

This portfolio is configured to work on both **AWS S3** and **GitHub Pages**. See [S3_DEPLOYMENT.md](./S3_DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy to GitHub Pages

1. Push your code to GitHub
2. The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically build and deploy on push to `main` branch
3. Enable GitHub Pages in repository settings (Settings → Pages)

### Quick Deploy to S3

1. Build the project: `npm run build`
2. Upload contents of `build` folder to S3 bucket
3. Enable static website hosting with index document: `index.html` and error document: `index.html`

## Project Structure

```
Portfolio-website/
├── public/           # Static files
│   ├── 404.html     # GitHub Pages routing fallback
│   └── index.html    # Main HTML template
├── src/
│   ├── components/  # React components
│   ├── data/        # Static data (no API calls)
│   └── images/      # Image assets
└── build/           # Production build (generated)
```

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute the code as you see fit.


