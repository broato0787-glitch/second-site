# Quick Start Guide

## Local Development

### Prerequisites
- Node.js 16.x or higher
- Git

### Setup
```bash
# Install dependencies
npm install

# Add your school logo
# Place your logo at: public/images/swesco.jpg

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Customization

### Update Contact Info
Edit `/components/Footer.tsx` and `/app/contact/page.tsx`:
- Email: broato0787@gmail.com
- Phone: +233 20 572 8268
- Location: Swedru Secondary Campus

### Update Content
- **Home Page**: `/app/page.tsx`
- **About Page**: `/app/about/page.tsx`
- **Program Page**: `/app/program/page.tsx`
- **Contact Page**: `/app/contact/page.tsx`

### Update Styles
Global styles are in `/app/globals.css`
Colors and theme in `/tailwind.config.js`

## Deploy to Vercel

See `DEPLOYMENT.md` for step-by-step instructions.

## Build for Production

```bash
npm run build
npm run start
```

## Next Steps

1. Add your school logo to `/public/images/`
2. Update contact information
3. Review all page content
4. Test on mobile devices
5. Deploy to Vercel

## Need Help?

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com
- Vercel Support: https://vercel.com/support
