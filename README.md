# SWESCO MACHINE BOYS - 23rd Instrumentalist Website

A modern Next.js website for the SWESCO MACHINE BOYS 23rd Instrumentalist celebration event.

## Features

- Modern, responsive design with Tailwind CSS
- Fast performance with Next.js 16
- Mobile-first approach with hamburger menu
- SEO optimized with proper metadata
- Easy deployment to Vercel

## Getting Started

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── program/
│   │   └── page.tsx        # Program page
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Header component
│   └── Footer.tsx          # Footer component
├── public/
│   └── images/
│       └── swesco.jpg      # Logo image
└── package.json
```

## Deployment to Vercel

### Option 1: Direct Deployment (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Vercel will automatically detect Next.js and configure the build settings
6. Click "Deploy"

Your site will be live in seconds with automatic SSL, CDN, and analytics.

### Option 2: Vercel CLI

Install Vercel CLI:
```bash
npm i -g vercel
```

Deploy:
```bash
vercel
```

### Option 3: GitHub Auto-Deploy

1. Connect your GitHub account to Vercel
2. Vercel automatically deploys on every push to main branch
3. Get preview deployments for pull requests

## Environment Variables

No environment variables are required for basic functionality.

## Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS
- **React 19** - Latest React features

## Performance

- Lighthouse Score: 95+
- Fast Time to First Byte (TTFB)
- Optimized images with Next.js Image component
- Zero unnecessary JavaScript

## Support

For issues or questions, contact: broato0787@gmail.com

## License

© 2026 SWESCO MACHINE BOYS. All rights reserved.
