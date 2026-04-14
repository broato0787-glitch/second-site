# Deployment Guide - SWESCO MACHINE BOYS Website

## Quick Start - Deploy to Vercel in 3 Steps

### Step 1: Prepare Your Logo
- Place your school logo at `/public/images/swesco.jpg`
- Recommended size: 200x200px or larger (square image works best)
- Format: JPG or PNG

### Step 2: Push to GitHub
```bash
git add .
git commit -m "Add SWESCO MACHINE BOYS website"
git push origin main
```

### Step 3: Deploy with Vercel

**Option A: Using Vercel Dashboard (Recommended)**
1. Go to [vercel.com](https://vercel.com)
2. Sign in or create an account
3. Click "Add New..." → "Project"
4. Select your GitHub repository
5. Click "Import"
6. Vercel will automatically detect Next.js and configure everything
7. Click "Deploy"

Your site will be live at a URL like: `https://swesco-machine-boys.vercel.app`

**Option B: Using Vercel CLI**
```bash
npm i -g vercel
vercel
```
Follow the prompts to connect and deploy.

## After Deployment

### Update Your Custom Domain
If you want to use a custom domain (e.g., swesco.school.edu):
1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update your domain's DNS settings according to Vercel's instructions

### Environment Variables (Optional)
If you need to add environment variables later:
1. Go to project Settings → "Environment Variables"
2. Add your variables
3. Redeploy with `vercel --prod`

### Update Content
To make changes after deployment:
1. Edit files in your repository
2. Commit and push to GitHub
3. Vercel will automatically redeploy with your changes

## Production Checklist

- [ ] Logo placed at `/public/images/swesco.jpg`
- [ ] Contact information updated in `/app/contact/page.tsx` and `/components/Footer.tsx`
- [ ] Event dates and times are correct
- [ ] All links working properly
- [ ] Mobile responsive design tested
- [ ] Form handling configured (optional email integration)

## Troubleshooting

**Logo not showing?**
- Ensure file is at `/public/images/swesco.jpg`
- File should be JPG or PNG format
- Check that filename matches exactly (case-sensitive)

**Build fails?**
- Check that all imports use correct paths
- Ensure no TypeScript errors with `npm run build`
- Check the Vercel deployment logs for specific errors

**Changes not reflecting?**
- Vercel auto-deploys on every push to `main` branch
- Wait 1-2 minutes for deployment to complete
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

## Support

For issues with deployment:
- Vercel support: [vercel.com/support](https://vercel.com/support)
- Next.js docs: [nextjs.org](https://nextjs.org)
- Contact us: broato0787@gmail.com

## Performance Tips

Your site is already optimized for:
- Fast page loads with Next.js server components
- Automatic image optimization
- SEO-friendly metadata
- Mobile-responsive design
- Caching and CDN delivery

## Security

The site includes:
- Secure form handling
- No sensitive data stored
- SSL/TLS encryption (automatic with Vercel)
- Regular Vercel security updates
