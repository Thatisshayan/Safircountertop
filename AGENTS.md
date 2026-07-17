# SafirCountertop — Agent Rules

This file is the first-stop instruction set for any agent working in this repository.

## Mandatory Read Order

Before planning, editing, or reporting completion, every agent must read:

1. [README.md](./README.md)
2. Project structure (see below)
3. The latest implementation notes (check for phase documents)

## Repo Structure

```
SafirCountertop/
├── index.html                      # Landing page
├── .netlify/                       # Netlify configuration (if deployed there)
├── .vercel/                        # Vercel configuration (if deployed there)
├── images/                         # Product images, portfolio photos
├── ideas.md                        # Ideas/roadmap document
├── src/                            # Source files (if using build tool)
├── dist/                           # Build output (if using build tool)
├── package.json                    # Dependencies (if using npm/build tool)
├── tsconfig.json                   # TypeScript config (if using TS)
├── vite.config.ts                  # Vite config (if using Vite)
├── README.md
├── .gitignore
├── node_modules/                   # Dependencies (if npm installed)
└── ...
```

## Project Type

**SafirCountertop** is a **countertop design/commerce website** — likely showcasing:

- Product catalog (countertop materials, designs)
- Portfolio (before/after installations)
- Service information
- Pricing and orders
- Contact/quotes

## Key Conventions

- **Responsive design**: Mobile-first CSS
- **Accessibility**: WCAG 2.1 AA standards
- **Performance**: Optimized images and fast load times
- **Clean code**: Well-organized HTML/CSS/JS
- **SEO**: Proper meta tags and structured data

## Development Workflow

### Local Development

```bash
npm install                  # Install dependencies (if npm project)
npm run dev                  # Start dev server (if Vite project)
# OR
open index.html              # Open directly in browser (if static)
```

### Building for Production

```bash
npm run build                # Build optimized site (if using build tool)
npm run preview              # Preview production build locally
```

### Asset Management

- **Images**: Place in `images/` folder with descriptive names
- **Optimization**: Compress before committing (TinyPNG, ImageOptim)
- **Responsive images**: Use `<picture>` or `srcset` for multiple sizes

## Common Tasks

### Add a New Product/Design

1. Create product page or add to portfolio section
2. Include high-quality images (multiple angles)
3. Write product description and specifications
4. Add price (if applicable) and CTA button
5. Link from main navigation and category pages
6. Test on mobile

### Update Pricing

1. Find pricing section in `index.html` or `src/` pages
2. Update prices and descriptions
3. Verify currency symbol and format
4. Test on mobile and desktop

### Add Testimonials

1. Create testimonial card with:
   - Customer name and photo
   - Quote or review text
   - Rating (if applicable)
   - Project details
2. Use consistent styling
3. Ensure images are optimized

### Set Up Contact Form

Forms need a backend service (no backend = no form submission):

**Options:**

1. **Formspree** (easiest, free)
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
     <input type="email" name="email" required>
     <textarea name="message" required></textarea>
     <button type="submit">Send</button>
   </form>
   ```

2. **Netlify Forms** (if deployed on Netlify)
   ```html
   <form name="contact" method="POST" netlify>
     <input type="email" name="email" required>
     <textarea name="message" required></textarea>
     <button type="submit">Send</button>
   </form>
   ```

3. **Basin** (free form backend)
   ```html
   <form action="https://usebasin.com/f/YOUR_FORM_ID" method="POST">
     <!-- Form fields -->
   </form>
   ```

## Deployment

### Deploy to Netlify (Recommended)

1. Push code to GitHub
2. Go to Netlify and connect your GitHub repo
3. Set build command: `npm run build` (or blank for static)
4. Set publish directory: `.` (root) or `dist/` (if using build tool)
5. Deploy automatically on push

### Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Set build command: `npm run build` (or blank for static)
4. Set output directory: `.` or `dist/`
5. Deploy automatically on push

### Custom Domain

1. Set up DNS records at your domain registrar
2. Point to Netlify/Vercel nameservers (or specific IP)
3. Update site settings with custom domain
4. Enable HTTPS/SSL (automatic on Netlify/Vercel)

## SEO Optimization

### Meta Tags

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Safir Countertop — Premium countertop designs and installation...">
  <meta name="keywords" content="countertops, design, installation, kitchen, bathroom">
  
  <!-- Open Graph for social sharing -->
  <meta property="og:title" content="Safir Countertop">
  <meta property="og:description" content="...">
  <meta property="og:image" content="images/og-image.png">
  <meta property="og:url" content="https://safircountertop.com">
  
  <title>Safir Countertop — Premium Design & Installation</title>
</head>
```

### Structured Data (Schema)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Safir Countertop",
  "url": "https://safircountertop.com",
  "telephone": "+1-XXX-XXX-XXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "City",
    "addressRegion": "State",
    "postalCode": "12345"
  }
}
</script>
```

## Performance Tips

- **Image optimization**: Use WebP with fallbacks; lazy loading for below-fold images
- **CSS/JS**: Minify for production; defer non-critical JS
- **Fonts**: Limit to 2-3 typefaces; use system fonts or variable fonts
- **Caching**: Set proper cache headers for static assets
- **Compression**: Enable gzip on server

## Accessibility Checklist

- ✅ All images have descriptive `alt` text
- ✅ Color contrast ≥ 4.5:1 for text
- ✅ Keyboard navigation works (Tab key)
- ✅ Form labels associated with inputs
- ✅ Headings in logical order (h1 → h2 → h3)
- ✅ Skip link for keyboard users (optional but recommended)

## Completion Standard

An agent must not mark work complete until:

- All changes are applied and tested locally
- Links work (internal and external)
- All images load and are optimized
- Mobile responsiveness verified
- No console errors in DevTools
- SEO meta tags present (if changed)
- Changes committed with clear messages
- Final report distinguishes completed, deferred, and pre-existing issues

## Known Gaps & Deferred Items

- [ ] **E-commerce integration**: Shopping cart and checkout system
- [ ] **Inventory management**: Product stock tracking
- [ ] **CMS**: Headless CMS for content management (Contentful, Sanity)
- [ ] **Blog**: News/blog section for updates and tips
- [ ] **Analytics**: Google Analytics or event tracking
- [ ] **Multilingual**: Currently single language

## Support & Troubleshooting

- **"Form doesn't submit"**: Forms need a backend service; set up Formspree, Netlify Forms, or Basin
- **"Images not showing"**: Verify file paths; use relative paths
- **"Mobile looks broken"**: Check viewport meta tag; test with DevTools (F12 → device emulation)
- **"Site loads slowly"**: Compress images; check for unoptimized assets; profile with Lighthouse
- **"Styles look inconsistent"**: Clear browser cache (Ctrl+Shift+Delete); verify CSS is linked correctly
